import { Shield } from 'lucide-react'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* Logo */}
      <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg mb-4">
        <span className="text-white font-bold text-2xl">R</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold tracking-tight mb-2">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Reduxy
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-muted-foreground text-sm max-w-sm mb-8">
        Detect and redact personal information from text and images instantly.
      </p>

      {/* Trust indicators */}
      <div className="flex items-center gap-3 text-[11px] text-muted-foreground/60">
        <span className="flex items-center gap-1">
          <Shield className="h-3 w-3" />
          30+ PII types
        </span>
        <span>·</span>
        <span>Face detection</span>
        <span>·</span>
        <span>Documents</span>
      </div>
    </div>
  )
}
