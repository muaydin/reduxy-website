'use client'

import { useState, useCallback, useRef } from 'react'
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '@/lib/constants'

interface UseFileUploadOptions {
  onFileSelected: (file: File) => void
}

export function useFileUpload({ onFileSelected }: UseFileUploadOptions) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dragCountRef = useRef(0)

  const validateFile = useCallback((file: File): string | null => {
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return `Unsupported file type: ${file.type}. Use PNG, JPG, GIF, BMP, or WebP.`
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File too large (${(file.size / 1024 / 1024).toFixed(1)}MB). Maximum is 25MB.`
    }
    return null
  }, [])

  const handleFile = useCallback(
    (file: File) => {
      setError(null)
      const err = validateFile(file)
      if (err) {
        setError(err)
        return
      }
      setPendingFile(file)
      onFileSelected(file)
    },
    [validateFile, onFileSelected]
  )

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCountRef.current++
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCountRef.current--
    if (dragCountRef.current === 0) {
      setIsDragging(false)
    }
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
      dragCountRef.current = 0

      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  const handlePaste = useCallback(
    (e: ClipboardEvent) => {
      const items = e.clipboardData?.items
      if (!items) return

      for (const item of Array.from(items)) {
        if (item.type.startsWith('image/')) {
          e.preventDefault()
          const file = item.getAsFile()
          if (file) {
            // Create a named file from clipboard
            const ext = file.type.split('/')[1] || 'png'
            const named = new File([file], `clipboard.${ext}`, { type: file.type })
            handleFile(named)
          }
          return
        }
      }
    },
    [handleFile]
  )

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
      // Reset input so the same file can be selected again
      if (fileInputRef.current) fileInputRef.current.value = ''
    },
    [handleFile]
  )

  const openFilePicker = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const clearPendingFile = useCallback(() => {
    setPendingFile(null)
    setError(null)
  }, [])

  return {
    isDragging,
    error,
    pendingFile,
    fileInputRef,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handlePaste,
    handleFileSelect,
    openFilePicker,
    clearPendingFile,
  }
}
