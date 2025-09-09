import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, FileSearch } from "lucide-react"

export function Hero() {
    return (
        <section className="container space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
                <Badge variant="outline" className="mb-4">
                    🎉 Now supporting OpenAI, Anthropic, and more
                </Badge>

                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                    A privacy gateway for{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        LLMs
                    </span>
                </h1>

                <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                    Mask PII, route safely, and audit every token before your data reaches OpenAI, Anthropic, or your own models.
                </p>

                <div className="flex flex-col gap-4 min-[400px]:flex-row mt-8">
                    <Button asChild size="lg" className="gap-2">
                        <Link href="/docs/getting-started">
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/contact">
                            Talk to Sales
                        </Link>
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                    Free tier available • Enterprise ready • SOC 2 Type II
                </p>
            </div>

            {/* Value Props */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3 mt-16">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Masking & Redaction</h3>
                    <p className="text-sm text-muted-foreground">
                        Deterministic & ML-assisted detection of PII, PHI, and sensitive data with reversible masking.
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <ArrowRight className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Smart Routing</h3>
                    <p className="text-sm text-muted-foreground">
                        Route requests by content type, sensitivity, region, latency, and cost optimization.
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                        <FileSearch className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold">Audit & Compliance</h3>
                    <p className="text-sm text-muted-foreground">
                        Complete audit trails, detailed logs, and compliance reporting for GDPR, HIPAA, and more.
                    </p>
                </div>
            </div>
        </section>
    )
} 