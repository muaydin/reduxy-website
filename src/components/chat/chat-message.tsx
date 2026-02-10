'use client'

import type { ChatMessage } from '@/lib/types'
import { TextResult } from './text-result'
import { ImageResult } from './image-result'
import { DetectionDetails } from './detection-details'
import { AlertCircle, Loader2, ImageIcon } from 'lucide-react'

interface ChatMessageProps {
  message: ChatMessage
}

export function ChatMessageBubble({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[85%] md:max-w-[75%] ${isUser ? 'order-1' : 'order-1'}`}>
        {/* Label */}
        <div className={`text-[10px] font-medium text-muted-foreground mb-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {isUser ? 'You' : 'Reduxy'}
        </div>

        {/* Bubble */}
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-primary text-primary-foreground rounded-br-sm'
              : 'bg-muted rounded-bl-sm'
          }`}
        >
          {/* Loading state */}
          {message.isLoading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Analyzing...</span>
            </div>
          )}

          {/* Error state */}
          {message.error && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{message.error}</span>
            </div>
          )}

          {/* User text message */}
          {isUser && message.mode === 'text' && message.content && (
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          )}

          {/* User image message */}
          {isUser && message.mode === 'image' && (
            <div className="space-y-2">
              {message.originalImageUrl ? (
                <div className="rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={message.originalImageUrl}
                    alt={message.originalFileName || 'Uploaded image'}
                    className="max-h-[200px] object-contain"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm">
                  <ImageIcon className="h-4 w-4" />
                  <span>{message.originalFileName || 'Image'}</span>
                </div>
              )}
            </div>
          )}

          {/* Reduxy text result */}
          {!isUser && !message.isLoading && !message.error && message.mode === 'text' && message.redactedContent && (
            <TextResult redactedContent={message.redactedContent} />
          )}

          {/* Reduxy image result */}
          {!isUser && !message.isLoading && !message.error && message.mode === 'image' && message.redactedImageUrl && (
            <ImageResult
              redactedImageUrl={message.redactedImageUrl}
              originalFileName={message.originalFileName}
            />
          )}

          {/* Placeholder for restored image sessions */}
          {!isUser && !message.isLoading && !message.error && message.mode === 'image' && !message.redactedImageUrl && message.detections.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ImageIcon className="h-4 w-4" />
              <span>Image was redacted</span>
            </div>
          )}

          {/* Detection details (for reduxy messages) */}
          {!isUser && !message.isLoading && !message.error && message.detections.length > 0 && (
            <DetectionDetails
              detections={message.detections}
              processingTimeMs={message.processingTimeMs}
            />
          )}
        </div>
      </div>
    </div>
  )
}
