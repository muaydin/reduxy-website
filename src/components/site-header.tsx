"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
                    <SheetContent side="left" className="pr-0">
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
        <div className="flex flex-col space-y-3">
            <Link href="/" className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary" />
                <span className="font-bold">Reduxy.ai</span>
            </Link>
            <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-foreground/70 transition-colors hover:text-foreground"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col space-y-2 pt-4">
                <Button asChild variant="ghost" className="justify-start">
                    <Link href="/docs/getting-started">
                        Get Started
                    </Link>
                </Button>
                <Button asChild className="justify-start">
                    <Link href="/contact">
                        Talk to Sales
                    </Link>
                </Button>
            </div>
        </div>
    )
} 