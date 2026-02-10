'use client'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { SessionItem } from './session-item'
import type { GroupedSessions } from '@/lib/types'

interface HistorySidebarProps {
  groupedSessions: GroupedSessions
  activeSessionId: string | null
  onSelectSession: (id: string) => void
  onNewChat: () => void
  onDeleteSession: (id: string) => void
  isOpen: boolean
}

function SessionGroup({ label, sessions, activeSessionId, onSelectSession, onDeleteSession }: {
  label: string
  sessions: GroupedSessions[keyof GroupedSessions]
  activeSessionId: string | null
  onSelectSession: (id: string) => void
  onDeleteSession: (id: string) => void
}) {
  if (sessions.length === 0) return null

  return (
    <div className="mb-3">
      <p className="px-2 mb-1 text-[10px] font-medium text-muted-foreground/60 uppercase tracking-wider">
        {label}
      </p>
      <div className="space-y-0.5">
        {sessions.map((session) => (
          <SessionItem
            key={session.id}
            session={session}
            isActive={session.id === activeSessionId}
            onClick={() => onSelectSession(session.id)}
            onDelete={() => onDeleteSession(session.id)}
          />
        ))}
      </div>
    </div>
  )
}

export function HistorySidebar({
  groupedSessions,
  activeSessionId,
  onSelectSession,
  onNewChat,
  onDeleteSession,
  isOpen,
}: HistorySidebarProps) {
  return (
    <div
      className={`flex-shrink-0 border-r bg-muted/30 flex flex-col transition-all duration-200 overflow-hidden ${
        isOpen ? 'w-[240px]' : 'w-0 border-0'
      }`}
    >
      {/* New chat button */}
      <div className="p-2 border-b">
        <Button
          variant="outline"
          size="sm"
          onClick={onNewChat}
          className="w-full justify-start gap-2 text-xs h-8"
        >
          <Plus className="h-3 w-3" />
          New chat
        </Button>
      </div>

      {/* Session list */}
      <div className="flex-1 overflow-y-auto p-2">
        <SessionGroup
          label="Today"
          sessions={groupedSessions.today}
          activeSessionId={activeSessionId}
          onSelectSession={onSelectSession}
          onDeleteSession={onDeleteSession}
        />
        <SessionGroup
          label="Yesterday"
          sessions={groupedSessions.yesterday}
          activeSessionId={activeSessionId}
          onSelectSession={onSelectSession}
          onDeleteSession={onDeleteSession}
        />
        <SessionGroup
          label="Previous 7 days"
          sessions={groupedSessions.previous7Days}
          activeSessionId={activeSessionId}
          onSelectSession={onSelectSession}
          onDeleteSession={onDeleteSession}
        />
        <SessionGroup
          label="Older"
          sessions={groupedSessions.older}
          activeSessionId={activeSessionId}
          onSelectSession={onSelectSession}
          onDeleteSession={onDeleteSession}
        />
      </div>
    </div>
  )
}
