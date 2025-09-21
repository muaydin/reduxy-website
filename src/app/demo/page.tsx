'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Shield, Eye, EyeOff, Zap, Clock, CheckCircle, AlertCircle, Copy, Sparkles } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

interface DetectionResult {
    entity_type: string
    start: number
    end: number
    confidence: number
    value: string
}

interface RedactionResponse {
    id: string
    object: string
    created: number
    original_request: {
        messages: Array<{
            role: string
            content: string
        }>
    }
    redacted_request: {
        messages: Array<{
            role: string
            content: string
        }>
    }
    pii_detections: DetectionResult[]
    processing_time_ms: number
    text_length: number
    length_limit: number
}

const EXAMPLE_TEXTS = [
    "Hi! I'm Hiroshi Tanaka and my email is hiroshi.tanaka@example.com. My phone is +81-90-1234-5678.",
    "Contact María González at maria.gonzalez@empresa.com or call her at +34-612-345-678.",
    "Ahmed Hassan (ahmed@company.com) and Priya Sharma (priya@company.com) attended the meeting. Ahmed Hassan will follow up.",
    "My credit card number is 4532-1234-5678-9012 and my SSN is 123-45-6789.",
    "Dr. Oleksandr Petrov works at Kiev Medical Center. Reach him at o.petrov@kmc.ua or call Oleksandr Petrov directly."
]

const ENTITY_TYPE_COLORS: Record<string, string> = {
    'FIRST_NAME': 'bg-blue-100 text-blue-800 border-blue-200',
    'LAST_NAME': 'bg-green-100 text-green-800 border-green-200',
    'PERSON': 'bg-purple-100 text-purple-800 border-purple-200',
    'EMAIL_ADDRESS': 'bg-red-100 text-red-800 border-red-200',
    'PHONE': 'bg-orange-100 text-orange-800 border-orange-200',
    'CREDIT_CARD': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'SSN': 'bg-pink-100 text-pink-800 border-pink-200',
    'DATE': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'ORG': 'bg-teal-100 text-teal-800 border-teal-200',
    'GPE': 'bg-cyan-100 text-cyan-800 border-cyan-200',
}

export default function DemoPage() {
    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState<RedactionResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [showOriginal, setShowOriginal] = useState(true)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputText.trim()) return

        setLoading(true)
        setError(null)
        setResult(null)

        try {
            // Use environment variable for gateway URL (configurable in Vercel)
            const gatewayUrl = process.env.NEXT_PUBLIC_REDUXY_GATEWAY_ADDRESS || 'https://reduxy-gateway-269323018133.us-central1.run.app'
            const response = await fetch(`${gatewayUrl}/chat/marketing-redact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'user',
                            content: inputText
                        }
                    ],
                    detection_options: {
                        enhanced: true,
                        enable_spacy: true,
                        masking_strategy: 'unique_token'
                    }
                })
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.detail?.message || `HTTP ${response.status}: ${response.statusText}`)
            }

            const data: RedactionResponse = await response.json()
            setResult(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

    const getEntityTypeColor = (entityType: string) => {
        return ENTITY_TYPE_COLORS[entityType] || 'bg-gray-100 text-gray-800 border-gray-200'
    }

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
                    <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" />

                    <div className="relative content-width section-padding">
                        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                                <Sparkles className="h-4 w-4" />
                                Live Demo - Marketing Endpoint
                            </div>

                            <h1 className="heading-1">
                                Experience{" "}
                                <span className="gradient-text">
                                    PII Detection
                                </span>{" "}
                                in Action
                            </h1>

                            <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
                                Try our advanced PII detection with unique token masking powered by transformer models.
                                Each entity gets a unique identifier, preserving relationships while protecting privacy.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-green-500" />
                                    <span>500 character limit</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="h-4 w-4 text-blue-500" />
                                    <span>Real-time processing</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-purple-500" />
                                    <span>No authentication required</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* Demo Section */}
                <section className="section-padding">
                    <div className="content-width max-w-6xl">
                        <div className="grid gap-8 lg:grid-cols-2">
                            {/* Input Section */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Shield className="h-5 w-5 text-indigo-500" />
                                            Try PII Detection
                                        </CardTitle>
                                        <CardDescription>
                                            Enter text containing personal information to see how our AI detects and masks sensitive data with unique tokens that preserve relationships.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="input-text" className="text-sm font-medium">
                                                        Your Text
                                                    </label>
                                                    <span className="text-xs text-muted-foreground">
                                                        {inputText.length}/500 characters
                                                    </span>
                                                </div>
                                                <Textarea
                                                    id="input-text"
                                                    placeholder="Enter text with personal information (names, emails, phone numbers, etc.)"
                                                    value={inputText}
                                                    onChange={(e) => setInputText(e.target.value.slice(0, 500))}
                                                    className="min-h-[120px] resize-none"
                                                    maxLength={500}
                                                />
                                                <Progress value={(inputText.length / 500) * 100} className="h-1" />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={!inputText.trim() || loading}
                                                className="w-full btn-gradient gap-2"
                                            >
                                                {loading ? (
                                                    <>
                                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Shield className="h-4 w-4" />
                                                        Detect & Mask PII
                                                        <ArrowRight className="h-4 w-4" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>

                                        {/* Example Texts */}
                                        <div className="space-y-3">
                                            <p className="text-sm font-medium text-muted-foreground">Try these examples:</p>
                                            <div className="grid gap-2">
                                                {EXAMPLE_TEXTS.map((example, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => setInputText(example)}
                                                        className="text-left text-xs p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-border"
                                                    >
                                                        {example}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Results Section */}
                            <div className="space-y-6">
                                {error && (
                                    <Alert variant="destructive">
                                        <AlertCircle className="h-4 w-4" />
                                        <AlertDescription>{error}</AlertDescription>
                                    </Alert>
                                )}

                                {result && (
                                    <div className="space-y-4">
                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4">
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-indigo-600">{result.pii_detections.length}</div>
                                                    <div className="text-xs text-muted-foreground">PII Detected</div>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-green-600">{Math.round(result.processing_time_ms)}ms</div>
                                                    <div className="text-xs text-muted-foreground">Processing Time</div>
                                                </CardContent>
                                            </Card>
                                            <Card>
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-purple-600">{result.text_length}</div>
                                                    <div className="text-xs text-muted-foreground">Characters</div>
                                                </CardContent>
                                            </Card>
                                        </div>

                                        {/* Text Comparison */}
                                        <Card>
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <CardTitle className="text-lg">Results</CardTitle>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => setShowOriginal(!showOriginal)}
                                                        className="gap-2"
                                                    >
                                                        {showOriginal ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        {showOriginal ? 'Hide Original' : 'Show Original'}
                                                    </Button>
                                                </div>
                                            </CardHeader>
                                            <CardContent className="space-y-4">
                                                {showOriginal && (
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <label className="text-sm font-medium text-red-600">Original Text</label>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => copyToClipboard(result.original_request.messages[0].content)}
                                                                className="h-6 w-6 p-0"
                                                            >
                                                                <Copy className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                        <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg text-sm">
                                                            {result.original_request.messages[0].content}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <label className="text-sm font-medium text-green-600">Protected Text</label>
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                            onClick={() => copyToClipboard(result.redacted_request.messages[0].content)}
                                                            className="h-6 w-6 p-0"
                                                        >
                                                            <Copy className="h-3 w-3" />
                                                        </Button>
                                                    </div>
                                                    <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg text-sm">
                                                        {result.redacted_request.messages[0].content}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Detected Entities */}
                                        {result.pii_detections.length > 0 && (
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className="text-lg">Detected PII Entities</CardTitle>
                                                    <CardDescription>
                                                        Personal information found and masked in your text
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-3">
                                                        {result.pii_detections.map((detection, index) => (
                                                            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                                                <div className="flex items-center gap-3">
                                                                    <Badge variant="outline" className={getEntityTypeColor(detection.entity_type)}>
                                                                        {detection.entity_type}
                                                                    </Badge>
                                                                    <span className="font-mono text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded border">
                                                                        {detection.value}
                                                                    </span>
                                                                </div>
                                                                <div className="text-sm text-muted-foreground">
                                                                    {Math.round(detection.confidence * 100)}% confidence
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </div>
                                )}

                                {!result && !error && !loading && (
                                    <Card className="border-dashed">
                                        <CardContent className="p-8 text-center text-muted-foreground">
                                            <Shield className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                            <p>Enter text above to see PII detection in action</p>
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="section-padding bg-muted/30">
                    <div className="content-width">
                        <div className="text-center mb-12">
                            <h2 className="heading-2 mb-4">Powered by Advanced AI</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                Our marketing endpoint showcases enterprise-grade PII detection with unique token masking used by leading companies.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Transformer Models</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Powered by spaCy&apos;s en_core_web_lg model for accurate entity recognition
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                                        <Clock className="h-6 w-6 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Real-time Processing</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sub-second response times with enterprise-grade performance
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                                        <Shield className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Unique Token Masking</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Each entity gets unique identifiers ([PERSON_1], [EMAIL_1]) preserving data relationships
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
} 