import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Clock } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <div className="container py-8 md:py-12 lg:py-24">
                    <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
                        <Badge variant="outline">Contact</Badge>
                        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
                            Get in touch
                        </h1>
                        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
                            Have questions about Reduxy.ai? We&apos;re here to help. Reach out to our team for support, demos, or enterprise inquiries.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Send us a message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <form className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name</Label>
                                            <Input id="firstName" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input id="lastName" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@company.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" placeholder="Acme Corp" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="inquiryType">Inquiry type</Label>
                                        <select
                                            id="inquiryType"
                                            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="">Select an option</option>
                                            <option value="sales">Sales inquiry</option>
                                            <option value="support">Technical support</option>
                                            <option value="demo">Request a demo</option>
                                            <option value="enterprise">Enterprise deployment</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your use case, questions, or requirements..."
                                            rows={4}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>

                                    <p className="text-sm text-muted-foreground">
                                        {/* TODO: Add actual privacy policy link */}
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5" />
                                        Email Support
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-2">
                                        For general inquiries and support:
                                    </p>
                                    <p className="font-medium">support@reduxy.ai</p>
                                    <p className="text-muted-foreground mb-4">
                                        We typically respond within 24 hours during business days.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageCircle className="h-5 w-5" />
                                        Sales Inquiries
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-2">
                                        For pricing, demos, and enterprise sales:
                                    </p>
                                    <p className="font-medium">sales@reduxy.ai</p>
                                    <p className="text-muted-foreground mb-4">
                                        Schedule a personalized demo to see Reduxy.ai in action.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Clock className="h-5 w-5" />
                                        Business Hours
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span>9:00 AM - 6:00 PM PST</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span>10:00 AM - 2:00 PM PST</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span>Closed</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        Enterprise customers have access to 24/7 support.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Emergency Support</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-2">
                                        For critical production issues (Enterprise customers only):
                                    </p>
                                    <p className="font-medium">emergency@reduxy.ai</p>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Response time: Within 4 hours
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mx-auto mt-24 max-w-4xl">
                        <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">How quickly can I get started?</h3>
                                    <p className="text-muted-foreground">
                                        You can start using Reduxy.ai in minutes! Sign up for a free account, get your API key,
                                        and update your application to use our gateway URL. No complex integration required.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Do you offer on-premise deployment?</h3>
                                    <p className="text-muted-foreground">
                                        Yes! Enterprise customers can deploy Reduxy.ai in their own infrastructure,
                                        including VPC peering and air-gapped environments. Contact our sales team to learn more.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">What compliance standards do you support?</h3>
                                    <p className="text-muted-foreground">
                                        We&apos;re SOC 2 Type II certified and support GDPR, HIPAA (with BAA), PCI DSS, and other
                                        compliance frameworks. We can provide detailed compliance documentation upon request.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-2">Can I customize PII detection rules?</h3>
                                    <p className="text-muted-foreground">
                                        Absolutely! Pro and Enterprise plans support custom detection rules, including regex patterns,
                                        custom entity types, and ML-based detection models tailored to your specific use cases.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Alternative Contact Methods */}
                    <div className="mx-auto mt-24 max-w-2xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Prefer other ways to connect?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild variant="outline">
                                <a href="https://calendly.com/reduxy-demo" target="_blank" rel="noopener noreferrer">
                                    Schedule a Demo
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="https://github.com/reduxy/discussions" target="_blank" rel="noopener noreferrer">
                                    GitHub Discussions
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a href="https://discord.gg/reduxy" target="_blank" rel="noopener noreferrer">
                                    Join Discord
                                </a>
                            </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            {/* TODO: Update links with actual URLs */}
                            Links will be updated with actual URLs once available.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
} 