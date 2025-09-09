import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    Zap,
    Shield,
    Bug,
    Plus,
    ArrowUpRight,
    Calendar
} from "lucide-react"

const releases = [
    {
        version: "v1.0.0",
        date: "2025-01-01",
        title: "Initial Release",
        description: "The first public release of Reduxy with core PII detection and OpenAI-compatible API.",
        type: "major",
        changes: [
            {
                type: "feature",
                title: "OpenAI-Compatible API",
                description: "Full compatibility with OpenAI's chat completions API"
            },
            {
                type: "feature",
                title: "PII Detection Engine",
                description: "Deterministic and ML-powered detection for emails, SSNs, credit cards, and more"
            },
            {
                type: "feature",
                title: "Reversible Masking",
                description: "Zero-copy masking with secure vault for data recovery"
            },
            {
                type: "feature",
                title: "Audit Logging",
                description: "Complete request/response logging with PostgreSQL backend"
            }
        ]
    },
    {
        version: "v0.9.0",
        date: "2024-12-15",
        title: "Beta Release",
        description: "Feature-complete beta with enterprise customers and extensive testing.",
        type: "minor",
        changes: [
            {
                type: "feature",
                title: "Smart Routing",
                description: "Route requests based on content sensitivity and cost optimization"
            },
            {
                type: "feature",
                title: "Dashboard UI",
                description: "Web-based management interface for monitoring and configuration"
            },
            {
                type: "improvement",
                title: "Performance Optimization",
                description: "50% improvement in detection latency through engine optimizations"
            },
            {
                type: "security",
                title: "SOC 2 Type II",
                description: "Completed SOC 2 Type II certification process"
            }
        ]
    },
    {
        version: "v0.8.0",
        date: "2024-11-30",
        title: "Alpha Release",
        description: "Initial alpha release for early adopters and testing partners.",
        type: "minor",
        changes: [
            {
                type: "feature",
                title: "Core API Gateway",
                description: "Basic API gateway with request/response handling"
            },
            {
                type: "feature",
                title: "Basic PII Detection",
                description: "Regex-based detection for common PII patterns"
            },
            {
                type: "feature",
                title: "PostgreSQL Integration",
                description: "Database backend for logging and audit trails"
            }
        ]
    }
]

const changeTypeIcons = {
    feature: Plus,
    improvement: Zap,
    security: Shield,
    bugfix: Bug
}

const changeTypeColors = {
    feature: "text-green-600 bg-green-100 dark:bg-green-900/30",
    improvement: "text-blue-600 bg-blue-100 dark:bg-blue-900/30",
    security: "text-purple-600 bg-purple-100 dark:bg-purple-900/30",
    bugfix: "text-orange-600 bg-orange-100 dark:bg-orange-900/30"
}

const releaseTypeColors = {
    major: "border-green-500 bg-green-50 dark:bg-green-950/20",
    minor: "border-blue-500 bg-blue-50 dark:bg-blue-950/20",
    patch: "border-orange-500 bg-orange-50 dark:bg-orange-950/20"
}

export default function ChangelogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm hero-gradient">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">Changelog</div>
                        <h1 className="heading-1">
                            Product updates &{" "}
                            <span className="gradient-text">release notes</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Stay up-to-date with the latest features, improvements, and security updates to Reduxy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild variant="outline" size="lg" className="hover-lift">
                                <Link href="/contact">
                                    Subscribe to Updates
                                    <ArrowUpRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Releases */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-12">
                                {releases.map((release, index) => (
                                    <div key={release.version} className="relative">
                                        {index > 0 && (
                                            <div className="absolute left-6 -top-6 h-6 w-0.5 bg-border"></div>
                                        )}

                                        <Card className={`glass-card hover-lift border-l-4 ${releaseTypeColors[release.type as keyof typeof releaseTypeColors]}`}>
                                            <CardHeader>
                                                <div className="flex items-start justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                                            <span className="text-white font-bold text-sm">
                                                                {release.version.replace('v', '')}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <CardTitle className="text-2xl">{release.title}</CardTitle>
                                                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                                                    {release.version}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                                <Calendar className="h-4 w-4" />
                                                                <span>{new Date(release.date).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <CardDescription className="text-base leading-relaxed">
                                                    {release.description}
                                                </CardDescription>
                                            </CardHeader>

                                            <CardContent>
                                                <div className="space-y-4">
                                                    {release.changes.map((change, changeIndex) => {
                                                        const ChangeIcon = changeTypeIcons[change.type as keyof typeof changeTypeIcons]
                                                        return (
                                                            <div key={changeIndex} className="flex gap-3">
                                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${changeTypeColors[change.type as keyof typeof changeTypeColors]}`}>
                                                                    <ChangeIcon className="h-4 w-4" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <h4 className="font-medium mb-1">{change.title}</h4>
                                                                    <p className="text-sm text-muted-foreground">{change.description}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Roadmap Preview */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-2 mb-6">What&apos;s Next?</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                We&apos;re constantly improving Reduxy based on customer feedback and emerging privacy requirements.
                            </p>

                            <div className="grid gap-6 md:grid-cols-3 mb-8">
                                <Card className="glass-card">
                                    <CardContent className="p-6 text-center">
                                        <Zap className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                                        <h3 className="font-semibold mb-2">Multi-Region</h3>
                                        <p className="text-sm text-muted-foreground">EU and APAC deployments for data residency</p>
                                    </CardContent>
                                </Card>
                                <Card className="glass-card">
                                    <CardContent className="p-6 text-center">
                                        <Shield className="h-8 w-8 text-green-600 mx-auto mb-4" />
                                        <h3 className="font-semibold mb-2">Advanced ML Models</h3>
                                        <p className="text-sm text-muted-foreground">Context-aware PII detection with custom training</p>
                                    </CardContent>
                                </Card>
                                <Card className="glass-card">
                                    <CardContent className="p-6 text-center">
                                        <Plus className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                                        <h3 className="font-semibold mb-2">More Integrations</h3>
                                        <p className="text-sm text-muted-foreground">Native SDKs for JavaScript, Go, and Java</p>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Request a Feature</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/docs">View Documentation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
} 