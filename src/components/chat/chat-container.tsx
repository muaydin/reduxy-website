'use client'

import { useState, useCallback, useEffect } from 'react'
import { AppHeader } from '@/components/layout/app-header'
import { HistorySidebar } from '@/components/sidebar/history-sidebar'
import { ChatMessageList } from './chat-message-list'
import { ChatInput } from './chat-input'
import { EmptyState } from './empty-state'
import { ExampleChips } from './example-chips'
import { FileDropZone } from './file-drop-zone'
import { useChatSession } from '@/hooks/use-chat-session'
import { useSessionHistory } from '@/hooks/use-session-history'
import { useFileUpload } from '@/hooks/use-file-upload'

export function ChatContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {
    activeSession,
    activeSessionId,
    setActiveSessionId,
    createSession,
    updateSession,
    deleteSession,
    groupedSessions,
  } = useSessionHistory()

  const handleMessagesChange = useCallback(
    (messages: Parameters<typeof updateSession>[1]) => {
      if (activeSessionId) {
        updateSession(activeSessionId, messages)
      }
    },
    [activeSessionId, updateSession]
  )

  const {
    messages,
    isProcessing,
    sendText,
    sendImage,
    loadMessages,
  } = useChatSession(activeSession?.messages || [], handleMessagesChange)

  // Load messages when switching sessions
  useEffect(() => {
    loadMessages(activeSession?.messages || [])
  }, [activeSessionId]) // eslint-disable-line react-hooks/exhaustive-deps

  const ensureSession = useCallback(() => {
    if (!activeSessionId) {
      return createSession()
    }
    return activeSessionId
  }, [activeSessionId, createSession])

  const handleSendText = useCallback(
    (text: string) => {
      ensureSession()
      sendText(text)
    },
    [ensureSession, sendText]
  )

  const handleSendImage = useCallback(
    (file: File) => {
      ensureSession()
      sendImage(file)
    },
    [ensureSession, sendImage]
  )

  const handleNewChat = useCallback(() => {
    createSession()
  }, [createSession])

  const handleSelectExample = useCallback(
    (text: string) => {
      ensureSession()
      sendText(text)
    },
    [ensureSession, sendText]
  )

  // File drop zone handlers
  const {
    isDragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useFileUpload({ onFileSelected: handleSendImage })

  const isEmpty = messages.length === 0

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <HistorySidebar
        groupedSessions={groupedSessions}
        activeSessionId={activeSessionId}
        onSelectSession={setActiveSessionId}
        onNewChat={handleNewChat}
        onDeleteSession={deleteSession}
        isOpen={sidebarOpen}
      />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0">
        <AppHeader
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <FileDropZone
          isDragging={isDragging}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {isEmpty ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <EmptyState />
              <div className="mt-6 w-full max-w-3xl px-4">
                <ExampleChips onSelectText={handleSelectExample} />
              </div>
            </div>
          ) : (
            <ChatMessageList messages={messages} />
          )}
        </FileDropZone>

        <ChatInput
          onSendText={handleSendText}
          onSendImage={handleSendImage}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  )
}
