import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const pricingTiers = [
    {
        name: "Starter",
        description: "Perfect for small projects and prototypes",
        price: "Free",
        period: "",
        features: [
            "1,000 requests/month",
            "Basic PII detection",
            "Standard support",
            "Community access",
            "Basic audit logs",
        ],
        limitations: [
            "Limited to 2 projects",
            "7-day log retention",
            "No custom rules",
        ],
        ctaText: "Get Started",
        ctaLink: "https://dashboard.reduxy.ai/register",
        popular: false,
    },
    {
        name: "Pro",
        description: "Ideal for growing businesses and production workloads",
        price: "$99",
        period: "/month",
        features: [
            "100,000 requests/month",
            "Advanced PII detection",
            "Custom detection rules",
            "Priority support",
            "SOC 2 report access",
            "30-day log retention",
            "Audit export (CSV/JSON)",
            "Multiple projects",
            "Team collaboration",
        ],
        limitations: [],
        ctaText: "Start Free Trial",
        ctaLink: "https://dashboard.reduxy.ai/register",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "For large organizations with complex compliance needs",
        price: "Custom",
        period: "",
        features: [
            "Unlimited requests",
            "Enterprise-grade PII detection",
            "Custom detection models",
            "24/7 dedicated support",
            "On-premise deployment",
            "VPC peering",
            "Custom SLAs",
            "SAML/SSO integration",
            "BAA/DPA available",
            "Custom log retention",
            "Real-time compliance reporting",
            "Dedicated customer success",
        ],
        limitations: [],
        ctaText: "Contact Sales",
        ctaLink: "/contact",
        popular: false,
    },
]

const features = [
    { name: "Requests per month", starter: "1,000", pro: "100,000", enterprise: "Unlimited" },
    { name: "PII detection types", starter: "Basic (5)", pro: "Advanced (15+)", enterprise: "Custom" },
    { name: "Custom detection rules", starter: false, pro: true, enterprise: true },
    { name: "Log retention", starter: "7 days", pro: "30 days", enterprise: "Custom" },
    { name: "Audit export", starter: false, pro: true, enterprise: true },
    { name: "Team collaboration", starter: false, pro: true, enterprise: true },
    { name: "API rate limits", starter: "10/min", pro: "100/min", enterprise: "Custom" },
    { name: "Support", starter: "Community", pro: "Priority", enterprise: "24/7 Dedicated" },
    { name: "SLA", starter: "None", pro: "99.9%", enterprise: "Custom" },
    { name: "SOC 2 compliance", starter: false, pro: true, enterprise: true },
    { name: "On-premise deployment", starter: false, pro: false, enterprise: true },
    { name: "SAML/SSO", starter: false, pro: false, enterprise: true },
]

export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <div className="section-padding">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">Pricing</div>
                        <h1 className="heading-1">
                            Simple, transparent pricing
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Choose the plan that&apos;s right for your team. Start free and scale as you grow.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="mx-auto mt-12 sm:mt-20 grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-3">
                        {pricingTiers.map((tier) => (
                            <Card
                                key={tier.name}
                                className={`pricing-card hover-lift ${tier.popular ? 'pricing-card-popular' : ''}`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                                    <CardDescription>{tier.description}</CardDescription>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold">{tier.price}</span>
                                        <span className="text-muted-foreground">{tier.period}</span>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        {tier.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2">
                                                <Check className="h-4 w-4 text-green-600" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                        {tier.limitations.map((limitation) => (
                                            <div key={limitation} className="flex items-center gap-2">
                                                <X className="h-4 w-4 text-muted-foreground" />
                                                <span className="text-sm text-muted-foreground">{limitation}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button asChild className="w-full" variant={tier.popular ? "default" : "outline"}>
                                        <Link href={tier.ctaLink}>{tier.ctaText}</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Feature Comparison Table */}
                    <div className="mx-auto mt-24 max-w-6xl">
                        <h2 className="text-2xl font-bold text-center mb-8">Feature Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-4 font-semibold">Feature</th>
                                        <th className="text-center p-4 font-semibold">Starter</th>
                                        <th className="text-center p-4 font-semibold">Pro</th>
                                        <th className="text-center p-4 font-semibold">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((feature) => (
                                        <tr key={feature.name} className="border-b">
                                            <td className="p-4">{feature.name}</td>
                                            <td className="p-4 text-center">
                                                {typeof feature.starter === 'boolean' ? (
                                                    feature.starter ? (
                                                        <Check className="h-4 w-4 text-green-600 mx-auto" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                                                    )
                                                ) : (
                                                    feature.starter
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                {typeof feature.pro === 'boolean' ? (
                                                    feature.pro ? (
                                                        <Check className="h-4 w-4 text-green-600 mx-auto" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                                                    )
                                                ) : (
                                                    feature.pro
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                {typeof feature.enterprise === 'boolean' ? (
                                                    feature.enterprise ? (
                                                        <Check className="h-4 w-4 text-green-600 mx-auto" />
                                                    ) : (
                                                        <X className="h-4 w-4 text-muted-foreground mx-auto" />
                                                    )
                                                ) : (
                                                    feature.enterprise
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mx-auto mt-24 max-w-4xl">
                        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">What happens if I exceed my plan limits?</h3>
                                    <p className="text-muted-foreground">
                                        We&apos;ll notify you when you approach your limits. For the free tier, requests will be throttled.
                                        For paid plans, you can set up auto-scaling or we&apos;ll work with you to upgrade.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
                                    <p className="text-muted-foreground">
                                        Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately
                                        and we&apos;ll prorate billing accordingly.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Do you offer custom detection rules?</h3>
                                    <p className="text-muted-foreground">
                                        Pro plans include configurable detection rules. Enterprise customers can work with our team
                                        to develop custom detection models for their specific use cases.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">What compliance certifications do you have?</h3>
                                    <p className="text-muted-foreground">
                                        We&apos;re SOC 2 Type II certified and GDPR compliant. Enterprise customers can access
                                        additional compliance documentation including BAAs for HIPAA compliance.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Final CTA */}
                    <div className="mx-auto mt-24 max-w-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-muted-foreground mb-6">
                            Start with our free tier and upgrade as your needs grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="https://dashboard.reduxy.ai/register">Start Free</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Contact Sales</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
} 