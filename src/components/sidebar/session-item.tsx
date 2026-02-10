'use client'

import { Trash2, MessageSquare, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ChatSession } from '@/lib/types'
import { cn } from '@/lib/utils'

interface SessionItemProps {
  session: ChatSession
  isActive: boolean
  onClick: () => void
  onDelete: () => void
}

export function SessionItem({ session, isActive, onClick, onDelete }: SessionItemProps) {
  const hasImages = session.messages.some((m) => m.mode === 'image')
  return (
    <button
      onClick={onClick}
      className={cn(
        'group w-full flex items-center gap-2 rounded-lg px-2 py-2 text-left text-sm transition-colors',
        isActive
          ? 'bg-muted'
          : 'hover:bg-muted/50'
      )}
    >
      {hasImages ? (
        <ImageIcon className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
      ) : (
        <MessageSquare className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
      )}
      <div className="flex-1 min-w-0">
        <p className="truncate text-xs">{session.title}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
      >
        <Trash2 className="h-3 w-3 text-muted-foreground" />
      </Button>
    </button>
  )
}
