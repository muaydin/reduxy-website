'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, PanelLeftClose, PanelLeft, LogIn, LogOut, LayoutDashboard, Coins } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { useAuth } from '@/contexts/auth-context'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface AppHeaderProps {
  sidebarOpen: boolean
  onToggleSidebar: () => void
}

export function AppHeader({ sidebarOpen, onToggleSidebar }: AppHeaderProps) {
  const { theme, setTheme } = useTheme()
  const { user, loading, login, logout } = useAuth()

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

      {/* Right: nav + theme + user */}
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

        {/* Auth Section */}
        {loading ? (
          <div className="h-8 w-20 animate-pulse bg-muted rounded" />
        ) : user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-xs gap-1.5 font-medium"
              >
                <div className="flex items-center gap-1.5">
                  <Coins className="h-3 w-3 text-yellow-600 dark:text-yellow-500" />
                  <span className="text-xs font-semibold">{user.credits_remaining}</span>
                  <span className="text-[10px] text-muted-foreground">/ {user.credits_total}</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {user.plan.charAt(0).toUpperCase() + user.plan.slice(1)} Plan
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://dashboard.reduxy.ai'} className="cursor-pointer">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600 dark:text-red-400">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            onClick={login}
            size="sm"
            className="h-8 text-xs gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
          >
            <LogIn className="h-3 w-3" />
            Login
          </Button>
        )}
      </div>
    </header>
  )
}
