'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

interface ImageResultProps {
  redactedImageUrl: string
  originalFileName?: string
}

export function ImageResult({ redactedImageUrl, originalFileName }: ImageResultProps) {
  const downloadName = originalFileName
    ? `redacted_${originalFileName}`
    : 'redacted_image.png'

  return (
    <div className="space-y-2">
      <div className="rounded-lg overflow-hidden border bg-muted/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={redactedImageUrl}
          alt="Redacted image"
          className="w-full max-h-[400px] object-contain"
        />
      </div>
      <Button asChild variant="outline" size="sm" className="gap-2 text-xs">
        <a href={redactedImageUrl} download={downloadName}>
          <Download className="h-3 w-3" />
          Download redacted image
        </a>
      </Button>
    </div>
  )
}
