import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeTabs, chatCompletionExamples } from "@/components/code-tabs"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowRight, Book, Code, Zap, Shield } from "lucide-react"

const quickStartGuides = [
    {
        title: "API Quick Start",
        description: "Get started with the Reduxy API in minutes using cURL, JavaScript, or Python requests",
        icon: Zap,
        href: "#api-quickstart",
        time: "5 min"
    },
    {
        title: "Python SDK",
        description: "Use our Python SDK for seamless integration with your existing OpenAI code",
        icon: Code,
        href: "#sdk-guide",
        time: "10 min"
    },
    {
        title: "Security Guide",
        description: "Learn about PII detection, masking strategies, and compliance features",
        icon: Shield,
        href: "#security",
        time: "15 min"
    },
    {
        title: "Advanced Features",
        description: "Explore routing, policies, audit trails, and enterprise features",
        icon: Book,
        href: "#advanced",
        time: "20 min"
    }
]

export default function DocsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Header */}
                <section className="section-padding-sm bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <Badge variant="outline">Documentation</Badge>
                        <h1 className="heading-1">
                            Get started with Reduxy.ai
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Everything you need to integrate privacy-first AI into your applications. From quick API calls to advanced enterprise features.
                        </p>
                    </div>
                </section>

                {/* Quick Start Options */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {quickStartGuides.map((guide) => {
                                const Icon = guide.icon
                                return (
                                    <Card key={guide.title} className="hover-lift glass-card">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="rounded-lg bg-primary/10 p-2">
                                                    <Icon className="h-5 w-5 text-primary" />
                                                </div>
                                                <Badge variant="secondary" className="text-xs">
                                                    {guide.time}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-lg">{guide.title}</CardTitle>
                                            <CardDescription>{guide.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <Button asChild variant="outline" className="w-full">
                                                <Link href={guide.href}>
                                                    Get Started
                                                    <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* API Quick Start */}
                <section id="api-quickstart" className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="mx-auto max-w-4xl text-center mb-12">
                            <h2 className="heading-2 mb-6">API Quick Start</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Replace your OpenAI API calls with Reduxy to get instant PII protection. Choose your preferred method:
                            </p>
                        </div>

                        <div className="code-block">
                            <CodeTabs examples={chatCompletionExamples} />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-muted-foreground mb-4">
                                That&apos;s it! Your requests now have automatic PII detection and masking.
                            </p>
                            <Button asChild variant="outline">
                                <Link href="/contact">Get Your API Key</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* SDK Guide */}
                <section id="sdk-guide" className="section-padding">
                    <div className="content-width">
                        <div className="mx-auto max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="heading-2 mb-6">Python SDK</h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Our Python SDK provides a drop-in replacement for the OpenAI client with automatic PII protection.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <Card className="glass-card">
                                    <CardHeader>
                                        <CardTitle>Installation</CardTitle>
                                        <CardDescription>Install the Reduxy Python SDK</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-lg bg-muted p-4">
                                            <code className="text-sm">
                                                pip install reduxy-ai
                                            </code>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">
                                            * SDK is currently in development. Contact us for early access.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="glass-card">
                                    <CardHeader>
                                        <CardTitle>Basic Usage</CardTitle>
                                        <CardDescription>Replace your OpenAI client with Reduxy</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-lg bg-muted p-4">
                                            <pre className="text-sm overflow-x-auto">
                                                <code>{`# Instead of OpenAI client
from openai import OpenAI
client = OpenAI(api_key="your-openai-key")

# Use Reduxy client
from reduxy import Client
client = Client(api_key="your-reduxy-key")

# Same API, automatic PII protection
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Hello!"}],
    model="gpt-4o"
)`}</code>
                                            </pre>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="glass-card">
                                    <CardHeader>
                                        <CardTitle>PII Detection</CardTitle>
                                        <CardDescription>Automatic detection and masking</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="rounded-lg bg-muted p-4">
                                            <pre className="text-sm overflow-x-auto">
                                                <code>{`# This request contains PII
response = client.chat.completions.create(
    messages=[{
        "role": "user", 
        "content": "My email is john@company.com"
    }],
    model="gpt-4o"
)

# Reduxy automatically masks PII before sending to OpenAI:
# "My email is [EMAIL_1]"`}</code>
                                            </pre>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width text-center">
                        <h2 className="heading-2 mb-6">Ready to dive deeper?</h2>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Explore advanced features, security options, and enterprise capabilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link href="/contact">Get API Access</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/security">View Security Guide</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/pricing">See Pricing</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
} 