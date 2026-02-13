'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  plan: string
  credits_remaining: number
  credits_total: number
  credits_reset_at: string | null
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: () => void
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL || 'https://auth.reduxy.ai'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for authorization code in URL
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    if (code) {
      console.log('Authorization code received, exchanging for session')
      exchangeCodeForSession(code)
    } else {
      // Check current session with auth service
      checkSession()
    }
  }, [])

  async function exchangeCodeForSession(code: string) {
    try {
      setLoading(true)

      // Exchange code - this will set the auth cookie
      const response = await fetch(`${AUTH_URL}/api/auth/exchange`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // Important: include cookies
        body: JSON.stringify({ code }),
      })

      // Remove code from URL
      const url = new URL(window.location.href)
      url.searchParams.delete('code')
      window.history.replaceState({}, '', url.pathname + url.search)

      if (response.ok) {
        // Now check session to get user info
        await checkSession()
      } else {
        console.error('Failed to exchange authorization code')
        setUser(null)
        setLoading(false)
      }
    } catch (error) {
      console.error('Auth exchange failed:', error)
      setUser(null)
      setLoading(false)
    }
  }

  async function checkSession() {
    try {
      setLoading(true)

      // Ask auth service if user is logged in
      const response = await fetch(`${AUTH_URL}/api/auth/me`, {
        method: 'GET',
        credentials: 'include', // Important: send cookies
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        console.log('User session verified:', data.user.email)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Session check failed:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function refreshUser() {
    await checkSession()
  }

  function login() {
    // Redirect to auth service login with return URL
    const returnUrl = encodeURIComponent(window.location.href)
    window.location.href = `${AUTH_URL}/login?redirect_uri=${returnUrl}`
  }

  async function logout() {
    try {
      // Call auth service to clear shared cookie
      await fetch(`${AUTH_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    } catch (error) {
      console.error('Logout error:', error)
    }

    // Clear local state
    setUser(null)

    // Redirect to auth service login page
    const returnUrl = encodeURIComponent(window.location.origin)
    window.location.href = `${AUTH_URL}/login?redirect_uri=${returnUrl}`
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
