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
    // Check current session with auth service
    checkSession()
  }, [])

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
    // Clear local state
    setUser(null)

    // Redirect to auth service logout page, which will clear cookie and redirect back
    const returnUrl = encodeURIComponent(window.location.origin)
    window.location.href = `${AUTH_URL}/logout?redirect_uri=${returnUrl}`
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
