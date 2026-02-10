'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronRight, Clock, Shield } from 'lucide-react'
import { getEntityColor } from '@/lib/constants'
import type { PiiDetection } from '@/lib/types'

interface DetectionDetailsProps {
  detections: PiiDetection[]
  processingTimeMs?: number
}

export function DetectionDetails({ detections, processingTimeMs }: DetectionDetailsProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (detections.length === 0) return null

  // Group detections by type
  const grouped: Record<string, PiiDetection[]> = {}
  for (const d of detections) {
    if (!grouped[d.type]) grouped[d.type] = []
    grouped[d.type].push(d)
  }

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
      >
        {isOpen ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
        <Shield className="h-3 w-3" />
        <span>{detections.length} PII detected</span>
        {processingTimeMs != null && (
          <>
            <span className="text-muted-foreground/50">·</span>
            <Clock className="h-3 w-3" />
            <span>
              {processingTimeMs >= 1000
                ? `${(processingTimeMs / 1000).toFixed(1)}s`
                : `${Math.round(processingTimeMs)}ms`}
            </span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 space-y-1.5 pl-5">
          {Object.entries(grouped).map(([type, items]) => (
            <div key={type} className="flex items-center gap-2 text-xs">
              <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${getEntityColor(type)}`}>
                {type}
              </Badge>
              <span className="text-muted-foreground">
                {items.length}x
              </span>
              {items[0].value && (
                <span className="font-mono text-muted-foreground truncate max-w-[200px]">
                  {items[0].value}
                  {items.length > 1 && `, ...`}
                </span>
              )}
              <span className="text-muted-foreground/60 ml-auto">
                {Math.round(items[0].confidence * 100)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
