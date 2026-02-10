'use client'

import { useState, useCallback } from 'react'
import type { ChatMessage, PiiDetection } from '@/lib/types'
import { redactText, analyzeImage, redactImage } from '@/lib/api'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

export function useChatSession(
  initialMessages: ChatMessage[] = [],
  onMessagesChange?: (messages: ChatMessage[]) => void
) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [isProcessing, setIsProcessing] = useState(false)

  const updateMessages = useCallback(
    (updater: (prev: ChatMessage[]) => ChatMessage[]) => {
      setMessages((prev) => {
        const next = updater(prev)
        onMessagesChange?.(next)
        return next
      })
    },
    [onMessagesChange]
  )

  const sendText = useCallback(
    async (text: string) => {
      if (isProcessing || !text.trim()) return

      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        mode: 'text',
        timestamp: Date.now(),
        content: text,
        detections: [],
      }

      const replyId = generateId()
      const loadingMsg: ChatMessage = {
        id: replyId,
        role: 'reduxy',
        mode: 'text',
        timestamp: Date.now(),
        detections: [],
        isLoading: true,
      }

      updateMessages((prev) => [...prev, userMsg, loadingMsg])
      setIsProcessing(true)

      try {
        const result = await redactText(text)
        const detections: PiiDetection[] = result.pii_detections.map((d) => ({
          type: d.entity_type,
          value: d.value,
          confidence: d.confidence,
          start: d.start,
          end: d.end,
        }))

        updateMessages((prev) =>
          prev.map((m) =>
            m.id === replyId
              ? {
                  ...m,
                  isLoading: false,
                  content: result.original_request.messages[0]?.content,
                  redactedContent: result.redacted_request.messages[0]?.content,
                  detections,
                  processingTimeMs: result.processing_time_ms,
                }
              : m
          )
        )
      } catch (err) {
        updateMessages((prev) =>
          prev.map((m) =>
            m.id === replyId
              ? {
                  ...m,
                  isLoading: false,
                  error: err instanceof Error ? err.message : 'An error occurred',
                }
              : m
          )
        )
      } finally {
        setIsProcessing(false)
      }
    },
    [isProcessing, updateMessages]
  )

  const sendImage = useCallback(
    async (file: File) => {
      if (isProcessing) return

      const originalUrl = URL.createObjectURL(file)
      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        mode: 'image',
        timestamp: Date.now(),
        originalImageUrl: originalUrl,
        originalFileName: file.name,
        detections: [],
      }

      const replyId = generateId()
      const loadingMsg: ChatMessage = {
        id: replyId,
        role: 'reduxy',
        mode: 'image',
        timestamp: Date.now(),
        detections: [],
        isLoading: true,
      }

      updateMessages((prev) => [...prev, userMsg, loadingMsg])
      setIsProcessing(true)

      try {
        // Run analysis and redaction in parallel
        const [analyzeResult, redactResult] = await Promise.all([
          analyzeImage(file),
          redactImage(file),
        ])

        const detections: PiiDetection[] = analyzeResult.detections.map((d) => ({
          type: d.pii_type,
          value: d.text || undefined,
          confidence: d.confidence,
          boundingBox: d.bounding_box
            ? {
                xMin: d.bounding_box.x_min,
                yMin: d.bounding_box.y_min,
                xMax: d.bounding_box.x_max,
                yMax: d.bounding_box.y_max,
              }
            : undefined,
        }))

        const redactedUrl = URL.createObjectURL(redactResult.blob)

        updateMessages((prev) =>
          prev.map((m) =>
            m.id === replyId
              ? {
                  ...m,
                  isLoading: false,
                  redactedImageUrl: redactedUrl,
                  detections,
                  processingTimeMs:
                    redactResult.processingTimeMs || analyzeResult.processing_time_ms,
                  totalRedactions:
                    redactResult.totalRedactions || analyzeResult.total_detections,
                }
              : m
          )
        )
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'An error occurred'
        updateMessages((prev) =>
          prev.map((m) =>
            m.id === replyId
              ? {
                  ...m,
                  isLoading: false,
                  error:
                    errorMsg === 'AUTH_REQUIRED'
                      ? 'Sign in to scan images. Text redaction is available without login.'
                      : errorMsg,
                }
              : m
          )
        )
      } finally {
        setIsProcessing(false)
      }
    },
    [isProcessing, updateMessages]
  )

  const loadMessages = useCallback(
    (msgs: ChatMessage[]) => {
      setMessages(msgs)
    },
    []
  )

  const clearMessages = useCallback(() => {
    setMessages([])
    onMessagesChange?.([])
  }, [onMessagesChange])

  return {
    messages,
    isProcessing,
    sendText,
    sendImage,
    loadMessages,
    clearMessages,
  }
}
