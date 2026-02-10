// Input modes
export type InputMode = 'text' | 'image'

// A single message in the conversation
export interface ChatMessage {
  id: string
  role: 'user' | 'reduxy'
  mode: InputMode
  timestamp: number
  // For text messages
  content?: string
  redactedContent?: string
  // For image messages
  originalImageUrl?: string      // Object URL for the original
  redactedImageUrl?: string      // Object URL for the redacted version
  originalFileName?: string
  // Detection results
  detections: PiiDetection[]
  processingTimeMs?: number
  totalRedactions?: number
  // State
  isLoading?: boolean
  error?: string
}

// PII detection (unified for text and image)
export interface PiiDetection {
  type: string
  value?: string
  confidence: number
  start?: number
  end?: number
  boundingBox?: BoundingBox
}

export interface BoundingBox {
  xMin: number
  yMin: number
  xMax: number
  yMax: number
}

// Session for history
export interface ChatSession {
  id: string
  title: string
  createdAt: number
  updatedAt: number
  messages: ChatMessage[]
}

// Grouped sessions for sidebar
export interface GroupedSessions {
  today: ChatSession[]
  yesterday: ChatSession[]
  previous7Days: ChatSession[]
  older: ChatSession[]
}

// --- API Response Types ---

export interface TextRedactionResponse {
  id: string
  object: string
  created: number
  original_request: {
    messages: Array<{ role: string; content: string }>
  }
  redacted_request: {
    messages: Array<{ role: string; content: string }>
  }
  pii_detections: Array<{
    entity_type: string
    value: string
    confidence: number
    start: number
    end: number
  }>
  processing_time_ms: number
  text_length: number
  length_limit: number
}

export interface ImageAnalyzeResponse {
  detections: Array<{
    pii_type: string
    confidence: number
    bounding_box?: {
      x_min: number
      y_min: number
      x_max: number
      y_max: number
    }
    text?: string
  }>
  processing_time_ms: number
  total_detections: number
  summary?: {
    face_count?: number
    text_pii_count?: number
    detection_types?: Record<string, number>
  }
}
