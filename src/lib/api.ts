import type { TextRedactionResponse, ImageAnalyzeResponse } from './types'

const GATEWAY_URL =
  process.env.NEXT_PUBLIC_GATEWAY_URL ||
  process.env.NEXT_PUBLIC_REDUXY_GATEWAY_ADDRESS ||
  'https://reduxy-gateway-269323018133.us-central1.run.app'

export async function redactText(text: string): Promise<TextRedactionResponse> {
  const res = await fetch(`${GATEWAY_URL}/chat/marketing-redact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: text }],
    }),
  })

  if (!res.ok) {
    let msg = `HTTP ${res.status}: ${res.statusText}`
    try {
      const err = await res.json()
      msg = err.detail?.message || err.detail || msg
    } catch { /* ignore parse error */ }
    throw new Error(msg)
  }

  return res.json()
}

export async function analyzeImage(file: File): Promise<ImageAnalyzeResponse> {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${GATEWAY_URL}/documents/analyze`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      throw new Error('AUTH_REQUIRED')
    }
    throw new Error(`Image analysis failed: HTTP ${res.status}`)
  }

  return res.json()
}

export async function redactImage(
  file: File
): Promise<{ blob: Blob; processingTimeMs: number; totalRedactions: number }> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('redaction_type', 'blur')
  formData.append('blur_intensity', '30')
  formData.append('include_faces', 'true')
  formData.append('include_text_pii', 'true')
  formData.append('redaction_scope', 'all')

  const res = await fetch(`${GATEWAY_URL}/documents/ai-redact`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      throw new Error('AUTH_REQUIRED')
    }
    throw new Error(`Image redaction failed: HTTP ${res.status}`)
  }

  const blob = await res.blob()
  return {
    blob,
    processingTimeMs: parseInt(res.headers.get('X-Processing-Time-Ms') || '0', 10),
    totalRedactions: parseInt(res.headers.get('X-Total-Redactions') || '0', 10),
  }
}
