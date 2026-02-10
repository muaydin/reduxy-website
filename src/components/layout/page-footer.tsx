import Link from 'next/link'

export function PageFooter() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-[10px]">R</span>
          </div>
          <span className="text-xs">&copy; {new Date().getFullYear()} Reduxy. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <Link href="/legal/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Docs
          </Link>
          <Link href="/pricing" className="hover:text-foreground transition-colors">
            Pricing
          </Link>
          <a href="mailto:support@reduxy.ai" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
