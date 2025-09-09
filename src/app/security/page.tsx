import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    Shield,
    Lock,
    FileSearch,
    CheckCircle,
    AlertTriangle,
    Key,
    Database,
    Globe,
    Users,
    Clock,
    Award,
    Eye,
    Server,
    Fingerprint
} from "lucide-react"

const securityFeatures = [
    {
        title: "End-to-End Encryption",
        description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256",
        icon: Lock,
        category: "Data Protection"
    },
    {
        title: "Zero-Copy Masking",
        description: "PII is masked without copying sensitive data, minimizing exposure risk",
        icon: Eye,
        category: "Data Protection"
    },
    {
        title: "Secure Vault",
        description: "Reversible masking tokens stored in hardened, encrypted vault infrastructure",
        icon: Database,
        category: "Data Protection"
    },
    {
        title: "Role-Based Access Control",
        description: "Granular permissions with enterprise SSO and multi-factor authentication",
        icon: Users,
        category: "Access Control"
    },
    {
        title: "API Key Management",
        description: "Secure API key rotation, scoped permissions, and audit trails",
        icon: Key,
        category: "Access Control"
    },
    {
        title: "Network Security",
        description: "VPC isolation, IP whitelisting, and secure network architecture",
        icon: Globe,
        category: "Infrastructure"
    },
    {
        title: "Real-time Monitoring",
        description: "24/7 security monitoring with automated threat detection and alerting",
        icon: AlertTriangle,
        category: "Monitoring"
    },
    {
        title: "Audit Logging",
        description: "Immutable audit logs with cryptographic signatures for all operations",
        icon: FileSearch,
        category: "Monitoring"
    }
]

const compliance = [
    {
        title: "SOC 2 Type II",
        description: "Annual SOC 2 Type II audits covering security, availability, and confidentiality",
        icon: Award,
        status: "Certified"
    },
    {
        title: "GDPR Compliance",
        description: "Full GDPR compliance with data minimization, consent management, and right to erasure",
        icon: Shield,
        status: "Compliant"
    },
    {
        title: "HIPAA Ready",
        description: "HIPAA-compliant infrastructure with BAAs available for healthcare customers",
        icon: FileSearch,
        status: "Available"
    },
    {
        title: "PCI DSS",
        description: "Payment card data protection meeting PCI DSS requirements",
        icon: Lock,
        status: "Compliant"
    },
    {
        title: "ISO 27001",
        description: "Information security management system certified to ISO 27001 standards",
        icon: Award,
        status: "In Progress"
    },
    {
        title: "FedRAMP",
        description: "Federal risk and authorization management program certification",
        icon: Server,
        status: "Planned"
    }
]

const detectionCapabilities = [
    {
        category: "Personal Identifiers",
        items: ["Email addresses", "Phone numbers", "Social Security Numbers", "Driver's licenses", "Passport numbers"]
    },
    {
        category: "Financial Data",
        items: ["Credit card numbers", "Bank account numbers", "IBAN codes", "Routing numbers", "Tax IDs"]
    },
    {
        category: "Health Information",
        items: ["Medical record numbers", "Health plan IDs", "Device identifiers", "Biometric identifiers", "Full face photos"]
    },
    {
        category: "Custom Patterns",
        items: ["Industry-specific IDs", "Internal employee IDs", "Custom regex patterns", "ML-detected entities", "Context-aware detection"]
    }
]

export default function SecurityPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm hero-gradient">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">Security & Compliance</div>
                        <h1 className="heading-1">
                            Enterprise-grade security for{" "}
                            <span className="gradient-text">AI applications</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Built with security-first principles, Reduxy meets the highest standards for data protection,
                            compliance, and privacy across industries.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Button asChild size="lg" className="btn-gradient">
                                <Link href="/contact">Request Security Assessment</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="hover-lift">
                                <Link href="/legal/dpa">View DPA</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Security Features */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Security by Design</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Every component of our infrastructure is designed with security as the top priority.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {securityFeatures.map((feature) => {
                                const FeatureIcon = feature.icon
                                return (
                                    <Card key={feature.title} className="glass-card hover-lift">
                                        <CardHeader>
                                            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                                                <FeatureIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div className="mb-2">
                                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                                    {feature.category}
                                                </span>
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
                </section>

                {/* PII Detection */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Comprehensive PII Detection</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Our detection engine identifies and protects sensitive data across multiple categories and formats.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {detectionCapabilities.map((category) => (
                                <Card key={category.category} className="glass-card">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3">
                                            <Fingerprint className="h-5 w-5 text-primary" />
                                            {category.category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2">
                                            {category.items.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                                    <span className="text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Compliance */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-16">
                            <h2 className="heading-2 mb-6">Compliance & Certifications</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Meet regulatory requirements with our comprehensive compliance framework.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {compliance.map((cert) => {
                                const CertIcon = cert.icon
                                return (
                                    <Card key={cert.title} className="glass-card hover-lift">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                    <CertIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                                                </div>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${cert.status === 'Certified' || cert.status === 'Compliant'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                                    : cert.status === 'Available'
                                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                                                        : cert.status === 'In Progress'
                                                            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200'
                                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200'
                                                    }`}>
                                                    {cert.status}
                                                </span>
                                            </div>
                                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                                            <CardDescription className="leading-relaxed">
                                                {cert.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Security Operations */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div>
                                <h2 className="heading-2 mb-6">24/7 Security Operations</h2>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    Our dedicated security team monitors your infrastructure around the clock,
                                    ensuring immediate response to any security events.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span>Real-time threat detection and response</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span>Automated security incident management</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span>Regular security assessments and penetration testing</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                        <span>Vulnerability management and patching</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <Card className="glass-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Clock className="h-8 w-8 text-blue-600" />
                                            <div>
                                                <h3 className="font-semibold">99.9% Uptime SLA</h3>
                                                <p className="text-sm text-muted-foreground">Enterprise reliability guarantee</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="glass-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <AlertTriangle className="h-8 w-8 text-orange-600" />
                                            <div>
                                                <h3 className="font-semibold">&lt;15min Response Time</h3>
                                                <p className="text-sm text-muted-foreground">Critical security incident response</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="glass-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Shield className="h-8 w-8 text-green-600" />
                                            <div>
                                                <h3 className="font-semibold">Zero Data Breaches</h3>
                                                <p className="text-sm text-muted-foreground">Perfect security track record</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-2 mb-6">Ready to secure your AI infrastructure?</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Talk to our security team about your specific compliance requirements and threat model.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Schedule Security Review</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/legal/privacy">Privacy Policy</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/status">Security Status</Link>
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