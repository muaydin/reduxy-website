import { Hero } from "@/components/hero"
import { CodeTabs, chatCompletionExamples } from "@/components/code-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, ArrowRight, Zap, Globe, Shield } from "lucide-react"

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <Hero />

            {/* Logo Cloud */}
            <section className="container py-8 md:py-12">
                <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        Trusted by developers at leading companies
                    </p>
                    <div className="flex items-center justify-center space-x-8 grayscale opacity-60">
                        {/* Placeholder for company logos */}
                        <div className="h-8 w-24 bg-muted rounded" />
                        <div className="h-8 w-24 bg-muted rounded" />
                        <div className="h-8 w-24 bg-muted rounded" />
                        <div className="h-8 w-24 bg-muted rounded" />
                    </div>
                </div>
            </section>

            <Separator />

            {/* How it works */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                    <Badge variant="outline">How It Works</Badge>
                    <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                        Privacy-first AI gateway
                    </h2>
                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                        Your applications stay exactly the same. Just point your OpenAI API calls to Reduxy, and we handle the rest.
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="mx-auto mt-12 max-w-4xl">
                    <div className="flex items-center justify-between space-x-4">
                        <Card className="flex-1">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-semibold">Your App</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    OpenAI API calls
                                </p>
                            </CardContent>
                        </Card>

                        <ArrowRight className="h-6 w-6 text-muted-foreground" />

                        <Card className="flex-1 border-2 border-primary">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <Shield className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-semibold">Reduxy Gateway</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    PII masking, routing, audit
                                </p>
                            </CardContent>
                        </Card>

                        <ArrowRight className="h-6 w-6 text-muted-foreground" />

                        <Card className="flex-1">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="font-semibold">LLM Providers</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    OpenAI, Anthropic, etc.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Separator />

            {/* Code Examples */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                    <Badge variant="outline">Quick Start</Badge>
                    <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                        OpenAI-compatible API
                    </h2>
                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                        Drop-in replacement for OpenAI&apos;s API. Change one URL and get instant PII protection.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-4xl">
                    <CodeTabs examples={chatCompletionExamples} />
                </div>

                <div className="mx-auto mt-8 max-w-2xl">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-4">Key Features</h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">OpenAI-style API compatibility</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Zero-copy masking with vault</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Configurable detection rules</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">Complete audit trails</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <Separator />

            {/* Features Grid */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                    <Badge variant="outline">Features</Badge>
                    <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                        Enterprise-grade privacy controls
                    </h2>
                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                        Comprehensive data protection, intelligent routing, and compliance features built for modern AI applications.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">PII Detection</h3>
                            <p className="text-sm text-muted-foreground">
                                Detect emails, SSNs, credit cards, phone numbers, IP addresses, and custom patterns with high accuracy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Reversible Masking</h3>
                            <p className="text-sm text-muted-foreground">
                                Vault-based token replacement that allows unmasking for authorized roles and use cases.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Smart Routing</h3>
                            <p className="text-sm text-muted-foreground">
                                Route requests based on content sensitivity, latency requirements, cost optimization, and regional compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Audit Trails</h3>
                            <p className="text-sm text-muted-foreground">
                                Complete request/response logging with PII detection metadata and export capabilities for compliance.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Policy Engine</h3>
                            <p className="text-sm text-muted-foreground">
                                Configurable rules for detection patterns, masking strategies, and routing decisions per tenant.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2">Multi-Provider</h3>
                            <p className="text-sm text-muted-foreground">
                                Support for OpenAI, Anthropic, Azure OpenAI, Google Vertex AI, and custom model endpoints.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Final CTA */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
                    <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                        Ready to secure your AI data?
                    </h2>
                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                        Start with our free tier or talk to our team about enterprise deployment options.
                    </p>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row">
                        <Button asChild size="lg" className="gap-2">
                            <Link href="/docs/getting-started">
                                View Documentation
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/pricing">
                                See Pricing
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
} 