import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    BookOpen,
    Clock,
    ArrowRight,
    Rss
} from "lucide-react"

const upcomingPosts = [
    {
        title: "Building Privacy-First AI: Lessons Learned",
        description: "Our journey building enterprise-grade PII detection and the challenges we've overcome.",
        category: "Engineering",
        estimatedDate: "Coming Soon",
        readTime: "8 min read"
    },
    {
        title: "GDPR Compliance in the Age of AI",
        description: "How to maintain regulatory compliance while leveraging the power of large language models.",
        category: "Compliance",
        estimatedDate: "Coming Soon",
        readTime: "12 min read"
    },
    {
        title: "The Economics of AI Privacy",
        description: "Why investing in privacy infrastructure actually reduces costs and improves business outcomes.",
        category: "Business",
        estimatedDate: "Coming Soon",
        readTime: "6 min read"
    },
    {
        title: "Technical Deep Dive: Zero-Copy Masking",
        description: "How we achieve reversible PII masking without compromising performance or security.",
        category: "Technical",
        estimatedDate: "Coming Soon",
        readTime: "15 min read"
    }
]

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm hero-gradient">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">Blog</div>
                        <h1 className="heading-1">
                            Insights on{" "}
                            <span className="gradient-text">AI privacy & security</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Deep dives into privacy-preserving AI, compliance strategies, and the latest developments
                            in secure AI infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild variant="outline" size="lg" className="hover-lift">
                                <Link href="/contact">
                                    <Rss className="h-4 w-4 mr-2" />
                                    Subscribe for Updates
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Coming Soon Posts */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Coming Soon</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                We&apos;re preparing in-depth articles about AI privacy, security best practices,
                                and technical insights from building Reduxy.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {upcomingPosts.map((post) => (
                                <Card key={post.title} className="glass-card hover-lift">
                                    <CardHeader>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-muted-foreground">•</span>
                                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                        </div>
                                        <CardTitle className="text-xl">{post.title}</CardTitle>
                                        <CardDescription className="leading-relaxed">
                                            {post.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                <span>{post.estimatedDate}</span>
                                            </div>
                                            <Button variant="ghost" size="sm" disabled>
                                                <ArrowRight className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Signup */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="heading-2 mb-6">Stay updated</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Be the first to read our articles on AI privacy, security best practices,
                                and technical deep dives into our platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Subscribe to Newsletter</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/docs">Read Documentation</Link>
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