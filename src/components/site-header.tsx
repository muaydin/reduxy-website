"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, LogIn, UserPlus } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Product", href: "/product" },
    { name: "Demo", href: "/demo", highlight: true },
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
                                    item.highlight
                                        ? "text-blue-600 dark:text-blue-400 font-semibold relative"
                                        : "text-foreground/60"
                                )}
                            >
                                {item.name}
                                {item.highlight && (
                                    <span className="absolute -top-1 -right-2 h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                                )}
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
                    <SheetContent side="left" className="pr-0 w-80 sm:w-96 !bg-white dark:!bg-gray-950 border-r shadow-xl">
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

                        {/* Authentication Buttons */}
                        <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex gap-2">
                            <Link href="https://dashboard.reduxy.ai/login">
                                <LogIn className="h-4 w-4" />
                                Login
                            </Link>
                        </Button>
                        <Button asChild size="sm" className="hidden sm:inline-flex gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                            <Link href="https://dashboard.reduxy.ai/register">
                                <UserPlus className="h-4 w-4" />
                                Get Started
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
        <div className="flex flex-col h-full !bg-white dark:!bg-gray-950 min-h-screen space-y-6 p-6">
            <Link href="/" className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary" />
                <span className="font-bold">Reduxy.ai</span>
            </Link>

            <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "transition-colors hover:text-foreground py-2 relative",
                            item.highlight
                                ? "text-blue-600 dark:text-blue-400 font-semibold"
                                : "text-foreground/70"
                        )}
                    >
                        {item.name}
                        {item.highlight && (
                            <span className="absolute top-2 -right-2 h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
                        )}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button asChild variant="ghost" className="justify-start gap-2">
                    <Link href="https://dashboard.reduxy.ai/login">
                        <LogIn className="h-4 w-4" />
                        Login
                    </Link>
                </Button>
                <Button asChild className="justify-start gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Link href="https://dashboard.reduxy.ai/register">
                        <UserPlus className="h-4 w-4" />
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>
    )
} 