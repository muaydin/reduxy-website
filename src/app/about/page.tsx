import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    Shield,
    Lightbulb,
    Users,
    Globe,
    Heart,
    Zap
} from "lucide-react"

const values = [
    {
        title: "Privacy First",
        description: "We believe privacy is a fundamental right, not a luxury. Every feature we build puts user privacy at the center.",
        icon: Shield
    },
    {
        title: "Developer Experience",
        description: "Complex security shouldn't mean complex integration. We make enterprise-grade security as easy as changing a URL.",
        icon: Zap
    },
    {
        title: "Transparency",
        description: "No black boxes. Our customers understand exactly how their data is protected and processed.",
        icon: Lightbulb
    },
    {
        title: "Global Impact",
        description: "Enabling AI innovation worldwide while protecting the privacy of billions of users.",
        icon: Globe
    }
]

const milestones = [
    {
        year: "2024",
        title: "Company Founded",
        description: "Reduxy was founded with the mission to make AI safe and privacy-preserving for everyone."
    },
    {
        year: "2024",
        title: "First Customers",
        description: "Leading healthcare and fintech companies begin using Reduxy to protect sensitive data in AI workflows."
    },
    {
        year: "2025",
        title: "Enterprise Ready",
        description: "SOC 2 Type II certification and enterprise features for large-scale AI deployments."
    },
    {
        year: "2025",
        title: "Global Expansion",
        description: "Multi-region deployment with data residency compliance for international customers."
    }
]

const team = [
    {
        name: "Muzaffer Aydin",
        role: "Founder & CEO",
        bio: "Former AI researcher with deep expertise in privacy-preserving machine learning and enterprise security.",
        image: "/team/muzaffer.jpg" // Placeholder
    },
    // Add more team members as they join
]

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm hero-gradient">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">About Reduxy</div>
                        <h1 className="heading-1">
                            Building the future of{" "}
                            <span className="gradient-text">privacy-preserving AI</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            We&apos;re on a mission to make AI safe, compliant, and accessible for every organization
                            while protecting the privacy of users worldwide.
                        </p>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="heading-2 mb-8">Our Mission</h2>
                            <div className="prose prose-lg prose-gray dark:prose-invert mx-auto">
                                <p className="text-xl leading-relaxed text-muted-foreground">
                                    In an AI-first world, sensitive data protection shouldn&apos;t be an afterthought.
                                    We believe organizations should be able to harness the full power of AI without
                                    compromising on privacy, security, or compliance.
                                </p>
                                <p className="text-xl leading-relaxed text-muted-foreground">
                                    Reduxy was founded to solve this fundamental challenge by providing enterprise-grade
                                    privacy infrastructure that scales with your AI ambitions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Our Values</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                These principles guide everything we do, from product decisions to customer relationships.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value) => {
                                const ValueIcon = value.icon
                                return (
                                    <Card key={value.title} className="glass-card hover-lift">
                                        <CardHeader className="text-center">
                                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                <ValueIcon className="h-8 w-8 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{value.title}</CardTitle>
                                            <CardDescription className="leading-relaxed">
                                                {value.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Our Journey</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                From idea to enterprise-ready platform, here&apos;s how we&apos;re building the future of AI privacy.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

                                <div className="space-y-12">
                                    {milestones.map((milestone) => (
                                        <div key={milestone.year} className="relative flex gap-6 group">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center relative z-10">
                                                <div className="w-3 h-3 rounded-full bg-white"></div>
                                            </div>
                                            <div className="flex-1 pb-8">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                                                    <h3 className="text-xl font-semibold">{milestone.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {milestone.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Meet the Team</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                We&apos;re a passionate team of engineers, researchers, and privacy advocates
                                building the tools that will define the next era of AI.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                            {team.map((member) => (
                                <Card key={member.name} className="glass-card hover-lift">
                                    <CardHeader className="text-center">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 mx-auto mb-4 flex items-center justify-center">
                                            <Users className="h-12 w-12 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{member.name}</CardTitle>
                                        <CardDescription className="font-medium text-primary">
                                            {member.role}
                                        </CardDescription>
                                        <CardDescription className="leading-relaxed mt-2">
                                            {member.bio}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}

                            {/* Hiring Card */}
                            <Card className="glass-card hover-lift border-dashed border-2 border-primary/30">
                                <CardHeader className="text-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 mx-auto mb-4 flex items-center justify-center">
                                        <Heart className="h-12 w-12 text-green-600" />
                                    </div>
                                    <CardTitle className="text-xl">Join Our Team</CardTitle>
                                    <CardDescription className="leading-relaxed">
                                        We&apos;re looking for passionate engineers and researchers who want to build
                                        the future of privacy-preserving AI.
                                    </CardDescription>
                                    <div className="pt-4">
                                        <Button asChild variant="outline" className="hover-lift">
                                            <Link href="/contact">View Open Positions</Link>
                                        </Button>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Investors & Partners */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Backed by Leading Investors</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                We&apos;re proud to be supported by investors who share our vision for a privacy-first AI future.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-muted-foreground mb-4">
                                    Investment and partnership announcements coming soon.
                                </p>
                                <Button asChild variant="outline">
                                    <Link href="/contact">Partner With Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-2 mb-6">Ready to join our mission?</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Whether you&apos;re a developer, researcher, or organization looking to use AI responsibly,
                                we&apos;d love to hear from you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Get in Touch</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/docs">Start Building</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/blog">Read Our Blog</Link>
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