'use client'

import { FileText } from 'lucide-react'
import { EXAMPLE_TEXTS } from '@/lib/constants'

interface ExampleChipsProps {
  onSelectText: (text: string) => void
}

export function ExampleChips({ onSelectText }: ExampleChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {EXAMPLE_TEXTS.map((example, i) => (
        <button
          key={i}
          onClick={() => onSelectText(example.text)}
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <FileText className="h-3 w-3" />
          {example.label}
        </button>
      ))}
    </div>
  )
}
