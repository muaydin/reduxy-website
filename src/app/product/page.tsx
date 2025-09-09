import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    Shield,
    ArrowRight,
    Zap,
    FileSearch,
    Lock,
    Globe,
    BarChart3,
    Settings,
    CheckCircle,
    AlertTriangle,
    Users,
    Clock,
    Database,
    Code,
    Building2
} from "lucide-react"

const features = [
    {
        category: "PII Detection & Masking",
        icon: Shield,
        color: "blue",
        items: [
            {
                title: "Deterministic Detection",
                description: "Regex-based detection for emails, phone numbers, SSNs, credit cards, and more",
                icon: CheckCircle
            },
            {
                title: "ML-Assisted Detection",
                description: "Advanced ML models for context-aware PII detection and classification",
                icon: CheckCircle
            },
            {
                title: "Reversible Masking",
                description: "Zero-copy masking with secure vault for data recovery when needed",
                icon: Lock
            },
            {
                title: "Custom Patterns",
                description: "Define your own regex patterns and detection rules for industry-specific data",
                icon: Settings
            }
        ]
    },
    {
        category: "Smart Routing",
        icon: ArrowRight,
        color: "green",
        items: [
            {
                title: "Multi-Provider Support",
                description: "Route to OpenAI, Anthropic, Cohere, and your own models seamlessly",
                icon: Globe
            },
            {
                title: "Content-Based Routing",
                description: "Route based on content sensitivity, type, and compliance requirements",
                icon: AlertTriangle
            },
            {
                title: "Cost Optimization",
                description: "Automatically route to the most cost-effective provider for each request",
                icon: BarChart3
            },
            {
                title: "Latency Optimization",
                description: "Route to the fastest available provider based on real-time metrics",
                icon: Zap
            }
        ]
    },
    {
        category: "Audit & Compliance",
        icon: FileSearch,
        color: "purple",
        items: [
            {
                title: "Complete Audit Trails",
                description: "Every request, response, and decision is logged with full traceability",
                icon: Database
            },
            {
                title: "Real-time Monitoring",
                description: "Live dashboard with request metrics, PII detection stats, and alerts",
                icon: BarChart3
            },
            {
                title: "Compliance Reporting",
                description: "GDPR, HIPAA, SOC 2 compliance reports generated automatically",
                icon: FileSearch
            },
            {
                title: "Data Retention Policies",
                description: "Configurable data retention with automatic purging and compliance",
                icon: Clock
            }
        ]
    },
    {
        category: "Developer Experience",
        icon: Code,
        color: "orange",
        items: [
            {
                title: "OpenAI-Compatible API",
                description: "Drop-in replacement for OpenAI API - change one URL and you're protected",
                icon: Code
            },
            {
                title: "Python SDK",
                description: "Native Python SDK with automatic PII detection and error handling",
                icon: Code
            },
            {
                title: "Enterprise SSO",
                description: "SAML, OIDC, and enterprise authentication with role-based access",
                icon: Users
            },
            {
                title: "Webhook Integration",
                description: "Real-time notifications for policy violations and security events",
                icon: Zap
            }
        ]
    }
]

const useCases = [
    {
        title: "Healthcare & HIPAA",
        description: "Protect patient data while leveraging AI for medical insights and documentation",
        icon: Shield,
        features: ["PHI detection", "HIPAA compliance", "Audit trails", "Secure masking"]
    },
    {
        title: "Financial Services",
        description: "Mask PII and financial data while using AI for fraud detection and customer service",
        icon: Lock,
        features: ["PCI compliance", "Credit card masking", "Real-time monitoring", "Risk assessment"]
    },
    {
        title: "Customer Support",
        description: "Use AI for customer support while protecting personal information automatically",
        icon: Users,
        features: ["Email masking", "Phone protection", "GDPR compliance", "Context preservation"]
    },
    {
        title: "Enterprise AI",
        description: "Enable AI across your organization with enterprise-grade security and governance",
        icon: Building2,
        features: ["SSO integration", "Policy management", "Multi-tenant", "Cost optimization"]
    }
]

export default function ProductPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm hero-gradient">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">Product Features</div>
                        <h1 className="heading-1">
                            Privacy-first AI infrastructure for{" "}
                            <span className="gradient-text">modern applications</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Comprehensive PII protection, smart routing, and compliance tools that scale with your business.
                            From startup to enterprise, we&apos;ve got you covered.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild size="lg" className="btn-gradient">
                                <Link href="/contact">Start Free Trial</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="hover-lift">
                                <Link href="/docs">View Documentation</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Feature Categories */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Complete AI Privacy Stack</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Everything you need to use AI safely, from PII detection to compliance reporting.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {features.map((category) => {
                                const CategoryIcon = category.icon
                                return (
                                    <div key={category.category} className="relative">
                                        <div className="text-center mb-12">
                                            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-${category.color}-100 dark:bg-${category.color}-900/30 mb-4`}>
                                                <CategoryIcon className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                                                <h3 className={`text-xl font-semibold text-${category.color}-800 dark:text-${category.color}-200`}>
                                                    {category.category}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                            {category.items.map((feature) => {
                                                const FeatureIcon = feature.icon
                                                return (
                                                    <Card key={feature.title} className="glass-card hover-lift">
                                                        <CardHeader>
                                                            <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30 flex items-center justify-center mb-4`}>
                                                                <FeatureIcon className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                                                            </div>
                                                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                                                            <CardDescription className="leading-relaxed">
                                                                {feature.description}
                                                            </CardDescription>
                                                        </CardHeader>
                                                    </Card>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Built for Every Industry</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                From healthcare to finance, our privacy infrastructure adapts to your industry&apos;s specific requirements.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {useCases.map((useCase) => {
                                const UseCaseIcon = useCase.icon
                                return (
                                    <Card key={useCase.title} className="glass-card hover-lift">
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                                    <UseCaseIcon className="h-6 w-6 text-primary" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                                                </div>
                                            </div>
                                            <CardDescription className="text-base leading-relaxed">
                                                {useCase.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 gap-2">
                                                {useCase.features.map((feature) => (
                                                    <div key={feature} className="flex items-center gap-2">
                                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-2 mb-6">Ready to secure your AI infrastructure?</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Join leading companies using Reduxy to protect sensitive data while leveraging the power of AI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Get Started Free</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/pricing">View Pricing</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/security">Security Details</Link>
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