'use client'

import { useEffect, useRef } from 'react'
import type { ChatMessage } from '@/lib/types'
import { ChatMessageBubble } from './chat-message'

interface ChatMessageListProps {
  messages: ChatMessage[]
}

export function ChatMessageList({ messages }: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const lastMessage = messages[messages.length - 1]
  const lastMessageLoading = lastMessage?.isLoading
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages.length, lastMessageLoading])

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="mx-auto max-w-3xl">
        {messages.map((msg) => (
          <ChatMessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
