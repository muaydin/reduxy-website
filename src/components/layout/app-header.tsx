'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, PanelLeftClose, PanelLeft, LogIn } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

interface AppHeaderProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function AppHeader({ sidebarOpen, onToggleSidebar }: AppHeaderProps) {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex h-12 items-center justify-between border-b px-3 bg-background/80 backdrop-blur-sm">
      {/* Left: sidebar toggle + brand */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="h-8 w-8 p-0"
        >
          {sidebarOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeft className="h-4 w-4" />
          )}
        </Button>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">R</span>
          </div>
          <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Reduxy
          </span>
        </Link>
      </div>

      {/* Right: nav + theme + login */}
      <div className="flex items-center gap-1">
        <Button asChild variant="ghost" size="sm" className="h-8 text-xs hidden sm:inline-flex">
          <Link href="/docs">Docs</Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="h-8 text-xs hidden sm:inline-flex">
          <Link href="/pricing">Pricing</Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="h-8 w-8 p-0"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Button
          asChild
          size="sm"
          className="h-8 text-xs gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
        >
          <Link href="https://dashboard.reduxy.ai/login">
            <LogIn className="h-3 w-3" />
            Login
          </Link>
        </Button>
      </div>
    </header>
  )
}
