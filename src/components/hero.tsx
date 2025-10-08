import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileSearch } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden hero-gradient">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[size:50px_50px] opacity-30" style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground) / 0.1) 1px, transparent 1px)'
            }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

            {/* Enhanced animated gradient overlays */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-40" style={{
                    background: 'radial-gradient(600px circle at 30% 20%, rgba(59, 130, 246, 0.2), transparent 70%)',
                    animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }} />
                <div className="absolute inset-0 opacity-30" style={{
                    background: 'radial-gradient(800px circle at 70% 80%, rgba(147, 51, 234, 0.2), transparent 70%)',
                    animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    animationDelay: '1s'
                }} />
                <div className="absolute inset-0 opacity-25" style={{
                    background: 'radial-gradient(700px circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)',
                    animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    animationDelay: '2s'
                }} />
            </div>

            {/* Dynamic light beams */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-1/2 left-1/4 h-[150vh] w-[2px] bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent rotate-12 animate-pulse" />
                <div className="absolute -top-1/2 right-1/3 h-[150vh] w-[2px] bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-transparent -rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute -top-1/2 left-2/3 h-[150vh] w-[2px] bg-gradient-to-b from-indigo-500/40 via-blue-500/20 to-transparent rotate-6 animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            {/* Floating colorful orbs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-500/28 to-blue-500/28 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative content-width section-padding">
                <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:gap-6 text-center">
                    <div className="badge-premium mb-6">
                        ✨ Now supporting OpenAI, Anthropic, and more
                    </div>

                    <h1 className="heading-1">
                        A privacy gateway for{" "}
                        <span className="gradient-text">
                            LLMs
                        </span>
                    </h1>

                    <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed px-2">
                        Mask PII, route safely, and audit every token before your data reaches OpenAI, Anthropic, or your own models.
                    </p>

                    <div className="flex flex-col gap-3 sm:gap-4 min-[400px]:flex-row mt-6 sm:mt-8 w-full max-w-md sm:max-w-none justify-center items-center">
                        <Button asChild size="lg" className="btn-gradient gap-2 hover-lift">
                            <Link href="https://dashboard.reduxy.ai/register">
                                Get Started Free
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="hover-lift gap-2">
                            <Link href="/demo">
                                <FileSearch className="h-4 w-4" />
                                Try Live Demo
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 mt-4 justify-center items-center">
                        <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            <Link href="https://dashboard.reduxy.ai/login">
                                Sign In
                            </Link>
                        </Button>
                    </div>

                    <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4 px-2">
                        Free tier available • Enterprise ready • SOC 2 Type II
                    </p>
                </div>

                {/* Value Props */}
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-3 mt-12 sm:mt-20">
                    <div className="flex flex-col items-center space-y-4 text-center group">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                            <Shield className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Masking & Redaction</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Deterministic & ML-assisted detection of PII, PHI, and sensitive data with reversible masking.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 text-center group">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                            <ArrowRight className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Smart Routing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Route requests by content type, sensitivity, region, latency, and cost optimization.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 text-center group">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 shadow-lg">
                            <FileSearch className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold">Audit & Compliance</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Complete audit trails, detailed logs, and compliance reporting for GDPR, HIPAA, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 