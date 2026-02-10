'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, LogIn } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Docs', href: '/docs' },
  { name: 'Pricing', href: '/pricing' },
]

export function PageHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl flex h-14 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Reduxy
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-8 w-8 p-0"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild size="sm" className="h-8 text-xs gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Link href="https://dashboard.reduxy.ai/login">
              <LogIn className="h-3 w-3" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
