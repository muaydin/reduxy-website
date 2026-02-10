'use client'

import { useState, useEffect, useCallback } from 'react'
import type { ChatSession, ChatMessage, GroupedSessions } from '@/lib/types'

const STORAGE_KEY = 'reduxy-sessions'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function loadSessions(): ChatSession[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveSessions(sessions: ChatSession[]) {
  if (typeof window === 'undefined') return
  try {
    // Strip image blob URLs before saving (they won't survive reload)
    const cleaned = sessions.map((s) => ({
      ...s,
      messages: s.messages.map((m) => ({
        ...m,
        originalImageUrl: undefined,
        redactedImageUrl: undefined,
        isLoading: false,
      })),
    }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned))
  } catch {
    // Storage full or unavailable
  }
}

function generateTitle(messages: ChatMessage[]): string {
  const firstUser = messages.find((m) => m.role === 'user')
  if (!firstUser) return 'New chat'
  if (firstUser.mode === 'image') {
    return firstUser.originalFileName || 'Image scan'
  }
  const text = firstUser.content || ''
  return text.length > 30 ? text.slice(0, 30) + '...' : text || 'New chat'
}

function groupSessions(sessions: ChatSession[]): GroupedSessions {
  const now = new Date()
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const yesterdayStart = todayStart - 86400000
  const weekStart = todayStart - 7 * 86400000

  const sorted = [...sessions].sort((a, b) => b.updatedAt - a.updatedAt)

  return {
    today: sorted.filter((s) => s.updatedAt >= todayStart),
    yesterday: sorted.filter((s) => s.updatedAt >= yesterdayStart && s.updatedAt < todayStart),
    previous7Days: sorted.filter((s) => s.updatedAt >= weekStart && s.updatedAt < yesterdayStart),
    older: sorted.filter((s) => s.updatedAt < weekStart),
  }
}

export function useSessionHistory() {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true)
    const loaded = loadSessions()
    setSessions(loaded)
  }, [])

  // Persist on change
  useEffect(() => {
    if (mounted) saveSessions(sessions)
  }, [sessions, mounted])

  const createSession = useCallback((): string => {
    const id = generateId()
    const session: ChatSession = {
      id,
      title: 'New chat',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      messages: [],
    }
    setSessions((prev) => [session, ...prev])
    setActiveSessionId(id)
    return id
  }, [])

  const updateSession = useCallback((sessionId: string, messages: ChatMessage[]) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === sessionId
          ? { ...s, messages, title: generateTitle(messages), updatedAt: Date.now() }
          : s
      )
    )
  }, [])

  const deleteSession = useCallback(
    (sessionId: string) => {
      setSessions((prev) => prev.filter((s) => s.id !== sessionId))
      if (activeSessionId === sessionId) {
        setActiveSessionId(null)
      }
    },
    [activeSessionId]
  )

  const activeSession = sessions.find((s) => s.id === activeSessionId) || null
  const grouped = mounted ? groupSessions(sessions) : { today: [], yesterday: [], previous7Days: [], older: [] }

  return {
    sessions,
    activeSession,
    activeSessionId,
    setActiveSessionId,
    createSession,
    updateSession,
    deleteSession,
    groupedSessions: grouped,
  }
}
