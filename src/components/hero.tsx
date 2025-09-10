import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileSearch } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden hero-gradient dark:hero-gradient-dark">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-white/[0.02]" />

            {/* Enhanced animated gradient overlays */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)] dark:bg-[radial-gradient(600px_circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)] animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_70%_80%,rgba(147,51,234,0.12),transparent_60%)] dark:bg-[radial-gradient(800px_circle_at_70%_80%,rgba(147,51,234,0.06),transparent_60%)] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_50%,rgba(236,72,153,0.08),transparent_50%)] dark:bg-[radial-gradient(700px_circle_at_50%_50%,rgba(236,72,153,0.04),transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Dynamic light beams */}
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 left-1/4 h-[150vh] w-[1px] bg-gradient-to-b from-indigo-500/20 via-purple-500/30 to-transparent rotate-12 animate-pulse opacity-60" />
                <div className="absolute -top-1/2 right-1/3 h-[150vh] w-[1px] bg-gradient-to-b from-pink-500/20 via-indigo-500/30 to-transparent -rotate-12 animate-pulse opacity-40" style={{ animationDelay: '1.5s' }} />
                <div className="absolute -top-1/2 left-2/3 h-[150vh] w-[1px] bg-gradient-to-b from-emerald-500/20 via-blue-500/30 to-transparent rotate-6 animate-pulse opacity-50" style={{ animationDelay: '3s' }} />
            </div>

            {/* Floating colorful orbs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute top-1/3 right-1/5 w-40 h-40 bg-gradient-to-r from-pink-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-r from-emerald-500/18 to-blue-500/18 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-1/4 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
            </div>

            {/* Enhanced floating geometric shapes with gradient backgrounds */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse shadow-glow" />
            <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000 shadow-glow-purple" />
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-2000" />
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 rounded-full blur-xl animate-pulse delay-500" />

            {/* Additional accent shapes */}
            <div className="absolute top-1/2 left-5 w-6 h-6 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full animate-pulse delay-1500" />
            <div className="absolute top-3/4 right-8 w-8 h-8 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full animate-pulse delay-2500" />

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
                        <Button asChild variant="outline" size="lg" className="hover-lift">
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
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Masking & Redaction</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Deterministic & ML-assisted detection of PII, PHI, and sensitive data with reversible masking.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                            <ArrowRight className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Smart Routing</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Route requests by content type, sensitivity, region, latency, and cost optimization.
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 text-center group">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900 group-hover:scale-110 transition-transform duration-300 shadow-glow-purple">
                            <FileSearch className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-semibold">Audit & Compliance</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Complete audit trails, detailed logs, and compliance reporting for GDPR, HIPAA, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
} 