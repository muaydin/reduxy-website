"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { Menu, Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Product", href: "/product" },
    { name: "Docs", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
    { name: "Blog", href: "/blog" },
]

export function SiteHeader() {
    const [isDark, setIsDark] = useState(false)

    const toggleDarkMode = () => {
        setIsDark(!isDark)
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full nav-blur">
            <div className="content-width flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <div className="h-6 w-6 rounded bg-primary" />
                        <span className="hidden font-bold sm:inline-block">
                            Reduxy.ai
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    "text-foreground/60"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0 w-80 sm:w-96">
                        <SheetHeader className="sr-only">
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <MobileNav />
                    </SheetContent>
                </Sheet>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Link href="/" className="flex items-center space-x-2 md:hidden">
                            <div className="h-6 w-6 rounded bg-primary" />
                            <span className="font-bold">Reduxy.ai</span>
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            className="h-8 w-8 px-0"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex">
                            <Link href="/docs/getting-started">
                                Get Started
                            </Link>
                        </Button>
                        <Button asChild size="sm" className="hidden sm:inline-flex">
                            <Link href="/contact">
                                Talk to Sales
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function MobileNav() {
    return (
        <div className="flex flex-col h-full bg-background">
            {/* Logo */}
            <div className="flex items-center space-x-2 px-2 py-4 border-b border-border">
                <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-primary/80" />
                <span className="font-bold text-lg">Reduxy.ai</span>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-1 p-4 flex-1">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Navigation
                </div>
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Action Buttons - Only visible on mobile */}
            <div className="p-4 border-t border-border space-y-3 md:hidden">
                <Button asChild variant="ghost" className="w-full justify-start" size="lg">
                    <Link href="/docs/getting-started">
                        Get Started
                    </Link>
                </Button>
                <Button asChild className="w-full justify-start btn-gradient" size="lg">
                    <Link href="/contact">
                        Talk to Sales
                    </Link>
                </Button>
            </div>
        </div>
    )
} 