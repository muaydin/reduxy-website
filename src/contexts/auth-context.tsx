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
    // Check for authorization code or logout flag in URL
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const logoutFlag = urlParams.get('logout')

    if (logoutFlag === 'true') {
      // Coming back from dashboard logout - ensure everything is cleared
      console.log('Logout flag detected, clearing session')
      setUser(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('reduxy_user')
      }

      // Remove logout flag from URL
      const url = new URL(window.location.href)
      url.searchParams.delete('logout')
      window.history.replaceState({}, '', url.pathname + url.search)

      setLoading(false)
    } else if (code) {
      console.log('Authorization code received, exchanging for user info')
      exchangeCodeForUser(code)
    } else {
      // Check if user is already logged in (from localStorage)
      checkStoredUser()
    }
  }, [])

  async function exchangeCodeForUser(code: string) {
    try {
      setLoading(true)

      // Exchange code for user info
      const response = await fetch(`${DASHBOARD_URL}/api/auth/exchange`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)

        // Store user in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('reduxy_user', JSON.stringify(data.user))
        }

        // Remove code from URL
        const url = new URL(window.location.href)
        url.searchParams.delete('code')
        window.history.replaceState({}, '', url.pathname + url.search)

        console.log('User authenticated via SSO:', data.user.email)
      } else {
        console.error('Failed to exchange authorization code')
        setUser(null)
      }
    } catch (error) {
      console.error('Auth exchange failed:', error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  function checkStoredUser() {
    try {
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('reduxy_user')
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser)
          console.log('Loaded user from storage:', parsedUser.email)
          setUser(parsedUser)
        }
      }
    } catch (error) {
      console.error('Failed to load stored user:', error)
    } finally {
      setLoading(false)
    }
  }

  async function refreshUser() {
    // For now, just re-validate the stored user
    // Could implement a refresh endpoint in the future
    checkStoredUser()
  }

  function login() {
    // Redirect to dashboard login with return URL
    const returnUrl = encodeURIComponent(window.location.href)
    window.location.href = `${DASHBOARD_URL}/login?redirect=${returnUrl}`
  }

  function logout() {
    // Clear local state
    setUser(null)

    if (typeof window !== 'undefined') {
      localStorage.removeItem('reduxy_user')
    }

    // Optionally redirect to dashboard logout to clear their session too
    const returnUrl = encodeURIComponent(window.location.href)
    window.location.href = `${DASHBOARD_URL}/logout?redirect=${returnUrl}`
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
