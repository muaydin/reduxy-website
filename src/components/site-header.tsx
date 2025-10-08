"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, LogIn, UserPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

const navigation = [
    { name: "Product", href: "/product" },
    { name: "Demo", href: "/demo", highlight: true },
    { name: "Docs", href: "/docs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Security", href: "/security" },
    { name: "Blog", href: "/blog" },
]

export function SiteHeader() {
    const { theme, setTheme } = useTheme()

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
            <div className="content-width flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2 group">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-md group-hover:shadow-lg transition-all duration-200 group-hover:scale-105" />
                        <span className="hidden font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:inline-block">
                            Reduxy.ai
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "transition-all duration-200 hover:text-foreground hover:scale-105 relative",
                                    item.highlight
                                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                                        : "text-foreground/70"
                                )}
                            >
                                {item.name}
                                {item.highlight && (
                                    <span className="absolute -top-1 -right-2 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
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
                            className="mr-2 px-0 text-base hover:bg-accent/50 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0 w-80 sm:w-96 bg-background border-border/50 shadow-2xl">
                        <MobileNav />
                    </SheetContent>
                </Sheet>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Link href="/" className="flex items-center space-x-2 md:hidden group">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-md group-hover:shadow-lg transition-all duration-200" />
                            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reduxy.ai</span>
                        </Link>
                    </div>
                    <nav className="flex items-center space-x-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleDarkMode}
                            className="h-9 w-9 px-0 hover:bg-accent/50 transition-all duration-200"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>

                        {/* Authentication Buttons */}
                        <Button asChild size="sm" variant="ghost" className="hidden sm:inline-flex gap-2 hover:bg-accent/50">
                            <Link href="https://dashboard.reduxy.ai/login">
                                <LogIn className="h-4 w-4" />
                                Login
                            </Link>
                        </Button>
                        <Button asChild size="sm" className="hidden sm:inline-flex gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
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
        <div className="flex flex-col h-full bg-background min-h-screen space-y-6 p-6">
            <Link href="/" className="flex items-center space-x-2 group">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 shadow-md group-hover:shadow-lg transition-all duration-200" />
                <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reduxy.ai</span>
            </Link>

            <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "transition-all duration-200 hover:text-foreground py-2 relative rounded-lg px-3 hover:bg-accent/50",
                            item.highlight
                                ? "text-blue-600 dark:text-blue-400 font-semibold"
                                : "text-foreground/70"
                        )}
                    >
                        {item.name}
                        {item.highlight && (
                            <span className="absolute top-2 right-2 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                        )}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col space-y-3 pt-4 border-t border-border/50">
                <Button asChild variant="ghost" className="justify-start gap-2 hover:bg-accent/50">
                    <Link href="https://dashboard.reduxy.ai/login">
                        <LogIn className="h-4 w-4" />
                        Login
                    </Link>
                </Button>
                <Button asChild className="justify-start gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-200">
                    <Link href="https://dashboard.reduxy.ai/register">
                        <UserPlus className="h-4 w-4" />
                        Get Started
                    </Link>
                </Button>
            </div>
        </div>
    )
} 