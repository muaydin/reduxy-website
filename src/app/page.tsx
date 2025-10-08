import { Hero } from "@/components/hero"
import { CodeTabs, chatCompletionExamples } from "@/components/code-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, ArrowRight, Zap, Globe, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <Hero />

                {/* Logo Cloud */}
                <section className="section-padding-sm border-b border-border/50">
                    <div className="content-width-narrow flex flex-col items-center gap-6 text-center">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Trusted by developers at leading companies
                        </p>
                        <div className="flex items-center justify-center gap-12 flex-wrap grayscale opacity-50 hover:opacity-70 transition-opacity">
                            {/* Placeholder for company logos */}
                            <div className="h-12 w-32 bg-gradient-to-r from-muted/80 to-muted/40 rounded-lg" />
                            <div className="h-12 w-32 bg-gradient-to-r from-muted/80 to-muted/40 rounded-lg" />
                            <div className="h-12 w-32 bg-gradient-to-r from-muted/80 to-muted/40 rounded-lg" />
                            <div className="h-12 w-32 bg-gradient-to-r from-muted/80 to-muted/40 rounded-lg" />
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="section-padding">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
                            How It Works
                        </div>
                        <h2 className="heading-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Privacy-first AI gateway
                        </h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            Your applications stay exactly the same. Just point your OpenAI API calls to Reduxy, and we handle the rest.
                        </p>
                    </div>

                    {/* Architecture Diagram */}
                    <div className="mx-auto mt-12 sm:mt-16 max-w-6xl">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-6 sm:space-y-0 sm:space-x-6">
                            <Card className="flex-1 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardContent className="mobile-card text-center">
                                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                                        <Globe className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg">Your App</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        OpenAI API calls
                                    </p>
                                </CardContent>
                            </Card>

                            <ArrowRight className="h-6 w-6 text-primary mx-auto sm:mx-0 rotate-90 sm:rotate-0 flex-shrink-0" />

                            <Card className="flex-1 hover-lift border-2 border-primary/30 shadow-xl scale-105 bg-gradient-to-br from-card to-primary/5">
                                <CardContent className="mobile-card text-center">
                                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                                        <Shield className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg">Reduxy Gateway</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        PII masking, routing, audit
                                    </p>
                                </CardContent>
                            </Card>

                            <ArrowRight className="h-6 w-6 text-primary mx-auto sm:mx-0 rotate-90 sm:rotate-0 flex-shrink-0" />

                            <Card className="flex-1 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                                <CardContent className="mobile-card text-center">
                                    <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 shadow-lg">
                                        <Zap className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg">LLM Providers</h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        OpenAI, Anthropic, etc.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Code Examples */}
                <section className="section-padding border-y border-border/50 bg-muted/30">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-6 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                            Quick Start
                        </div>
                        <h2 className="heading-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            OpenAI-compatible API
                        </h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            Drop-in replacement for OpenAI&apos;s API. Use our SDK or change one URL to get instant PII protection.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="code-block">
                            <CodeTabs examples={chatCompletionExamples} />
                        </div>
                    </div>

                    <div className="mx-auto mt-12 max-w-3xl">
                        <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover-lift">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4">Key Features</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-medium">OpenAI-style API compatibility</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-medium">Python SDK for easy integration</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-medium">Zero-copy masking with vault</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        </div>
                                        <span className="text-sm font-medium">Complete audit trails</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="section-padding">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-6 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                            Features
                        </div>
                        <h2 className="heading-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            Enterprise-grade privacy controls
                        </h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                            Comprehensive data protection, intelligent routing, and compliance features built for modern AI applications.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">PII Detection</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Detect emails, SSNs, credit cards, phone numbers, IP addresses, and custom patterns with high accuracy.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Reversible Masking</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Vault-based token replacement that allows unmasking for authorized roles and use cases.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <ArrowRight className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Smart Routing</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Route requests based on content sensitivity, latency requirements, cost optimization, and regional compliance.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <CheckCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Audit Trails</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Complete request/response logging with PII detection metadata and export capabilities for compliance.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Shield className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Policy Engine</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Configurable rules for detection patterns, masking strategies, and routing decisions per tenant.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group hover:border-primary/30 transition-all">
                            <CardContent className="p-6">
                                <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Globe className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Multi-Provider</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Support for OpenAI, Anthropic, Azure OpenAI, Google Vertex AI, and custom model endpoints.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
                    <div className="content-width flex flex-col items-center gap-8 text-center">
                        <h2 className="heading-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Ready to secure your AI data?
                        </h2>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
                            Start with our free tier or talk to our team about enterprise deployment options.
                        </p>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row mt-4">
                            <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-8">
                                <Link href="https://dashboard.reduxy.ai/register">
                                    Get Started Free
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-2 hover:bg-accent/50">
                                <Link href="/pricing">
                                    See Pricing
                                </Link>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                            No credit card required • Free tier available • Enterprise support
                        </p>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
} 