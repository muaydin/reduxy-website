'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Paperclip, ArrowUp } from 'lucide-react'
import { MAX_TEXT_LENGTH, ACCEPTED_IMAGE_TYPES } from '@/lib/constants'
import { useFileUpload } from '@/hooks/use-file-upload'

interface ChatInputProps {
  onSendText: (text: string) => void
  onSendImage: (file: File) => void
  isProcessing: boolean
  className?: string
}

export function ChatInput({ onSendText, onSendImage, isProcessing, className }: ChatInputProps) {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleFileReady = useCallback((file: File) => {
    // Don't auto-send — let the user confirm via send button or we send immediately
    onSendImage(file)
  }, [onSendImage])

  const {
    error: fileError,
    fileInputRef,
    openFilePicker,
    handlePaste,
  } = useFileUpload({ onFileSelected: handleFileReady })

  // Listen for clipboard paste
  useEffect(() => {
    const handler = (e: ClipboardEvent) => handlePaste(e)
    document.addEventListener('paste', handler)
    return () => document.removeEventListener('paste', handler)
  }, [handlePaste])

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 200) + 'px'
  }, [text])

  const handleSubmit = () => {
    const trimmed = text.trim()
    if (!trimmed || isProcessing) return
    onSendText(trimmed)
    setText('')
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const canSend = text.trim().length > 0 && !isProcessing

  return (
    <div className={`border-t bg-background px-4 py-3 ${className || ''}`}>
      <div className="mx-auto max-w-3xl">
        {/* File error */}
        {fileError && (
          <div className="mb-2 text-xs text-destructive flex items-center gap-1">
            <span>{fileError}</span>
          </div>
        )}

        {/* Input container */}
        <div className="flex items-end gap-2 rounded-2xl border bg-background px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-ring">
          {/* Attach button */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={openFilePicker}
            disabled={isProcessing}
            className="h-8 w-8 p-0 flex-shrink-0 text-muted-foreground hover:text-foreground"
          >
            <Paperclip className="h-4 w-4" />
          </Button>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept={ACCEPTED_IMAGE_TYPES.join(',')}
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleFileReady(file)
              if (fileInputRef.current) fileInputRef.current.value = ''
            }}
            className="hidden"
          />

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX_TEXT_LENGTH))}
            onKeyDown={handleKeyDown}
            placeholder="Paste text, upload a file, or paste a screenshot..."
            rows={1}
            disabled={isProcessing}
            className="flex-1 resize-none border-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60 min-h-[36px] max-h-[200px] py-2"
          />

          {/* Character counter (shown near limit) */}
          {text.length > MAX_TEXT_LENGTH * 0.8 && (
            <span className="text-[10px] text-muted-foreground flex-shrink-0 self-end pb-2">
              {text.length}/{MAX_TEXT_LENGTH}
            </span>
          )}

          {/* Send button */}
          <Button
            type="button"
            size="sm"
            onClick={handleSubmit}
            disabled={!canSend}
            className="h-8 w-8 p-0 flex-shrink-0 rounded-full bg-primary"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>

        <p className="mt-1.5 text-center text-[10px] text-muted-foreground/50">
          Free demo: 500 character limit for text. Drag & drop or Ctrl+V to paste images.
        </p>
      </div>
    </div>
  )
}
