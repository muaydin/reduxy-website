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
  logout: () => void
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.reduxy.ai'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const res = await fetch(`${DASHBOARD_URL}/api/auth/me`, {
        credentials: 'include', // Send cookies (JWT)
        headers: {
          'Accept': 'application/json',
        },
      })

      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function refreshUser() {
    await checkAuth()
  }

  function login() {
    // Redirect to dashboard login with return URL
    const returnUrl = encodeURIComponent(window.location.href)
    window.location.href = `${DASHBOARD_URL}/login?redirect=${returnUrl}`
  }

  async function logout() {
    try {
      await fetch(`${DASHBOARD_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      })
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setUser(null)
      window.location.reload()
    }
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
