import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import {
    CheckCircle,
    Clock,
    AlertTriangle,
    Activity,
    Globe,
    Database,
    Shield,
    Zap
} from "lucide-react"

const services = [
    {
        name: "API Gateway",
        status: "operational",
        description: "Core API endpoint for chat completions and redaction",
        uptime: "99.99%",
        responseTime: "95ms"
    },
    {
        name: "PII Detection Engine",
        status: "operational",
        description: "Real-time PII detection and masking service",
        uptime: "99.98%",
        responseTime: "12ms"
    },
    {
        name: "Audit Logging",
        status: "operational",
        description: "Request logging and audit trail generation",
        uptime: "99.97%",
        responseTime: "8ms"
    },
    {
        name: "Dashboard & Console",
        status: "operational",
        description: "Web-based management interface",
        uptime: "99.95%",
        responseTime: "150ms"
    }
]

const incidents = [
    {
        date: "No incidents reported",
        description: "All systems have been operational since launch.",
        status: "resolved",
        duration: "0 minutes"
    }
]

const regions = [
    {
        name: "US East (Virginia)",
        status: "operational",
        endpoint: "us-east-1.api.reduxy.ai"
    },
    {
        name: "US West (Oregon)",
        status: "operational",
        endpoint: "us-west-2.api.reduxy.ai"
    },
    {
        name: "Europe (Ireland)",
        status: "coming-soon",
        endpoint: "eu-west-1.api.reduxy.ai"
    }
]

const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
        case 'operational':
            return <CheckCircle className="h-5 w-5 text-green-600" />
        case 'degraded':
            return <AlertTriangle className="h-5 w-5 text-orange-600" />
        case 'outage':
            return <AlertTriangle className="h-5 w-5 text-red-600" />
        case 'coming-soon':
            return <Clock className="h-5 w-5 text-blue-600" />
        default:
            return <CheckCircle className="h-5 w-5 text-green-600" />
    }
}

const StatusBadge = ({ status }: { status: string }) => {
    const colors = {
        operational: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
        degraded: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200',
        outage: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200',
        'coming-soon': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
    }

    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${colors[status as keyof typeof colors] || colors.operational}`}>
            {status === 'coming-soon' ? 'Coming Soon' : status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
    )
}

export default function StatusPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="section-padding-sm">
                    <div className="content-width flex flex-col items-center gap-6 text-center">
                        <div className="badge-section">System Status</div>
                        <h1 className="heading-1">
                            All systems{" "}
                            <span className="gradient-text">operational</span>
                        </h1>
                        <p className="max-w-[750px] text-xl text-muted-foreground sm:text-2xl leading-relaxed">
                            Real-time status and performance metrics for Reduxy infrastructure and services.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <span className="text-lg font-medium text-green-600">All Services Operational</span>
                        </div>
                    </div>
                </section>

                {/* Overall Metrics */}
                <section className="section-padding-sm bg-muted/20">
                    <div className="content-width">
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="glass-card">
                                <CardContent className="p-6 text-center">
                                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-blue-600 mb-2">99.99%</div>
                                    <div className="text-sm text-muted-foreground">30-day uptime</div>
                                </CardContent>
                            </Card>
                            <Card className="glass-card">
                                <CardContent className="p-6 text-center">
                                    <Zap className="h-8 w-8 text-green-600 mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-green-600 mb-2">89ms</div>
                                    <div className="text-sm text-muted-foreground">Avg response time</div>
                                </CardContent>
                            </Card>
                            <Card className="glass-card">
                                <CardContent className="p-6 text-center">
                                    <Shield className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                                    <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                                    <div className="text-sm text-muted-foreground">Security incidents</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Service Status */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-12">
                            <h2 className="heading-2 mb-6">Service Status</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Current operational status of all Reduxy services and components.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {services.map((service) => (
                                <Card key={service.name} className="glass-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <StatusIcon status={service.status} />
                                                <div>
                                                    <h3 className="font-semibold">{service.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{service.description}</p>
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <StatusBadge status={service.status} />
                                                <div className="text-xs text-muted-foreground">
                                                    {service.uptime} uptime • {service.responseTime} avg
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Regional Status */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width">
                        <div className="text-center mb-12">
                            <h2 className="heading-2 mb-6">Regional Availability</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Reduxy is deployed across multiple regions for optimal performance and reliability.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {regions.map((region) => (
                                <Card key={region.name} className="glass-card hover-lift">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <Globe className="h-6 w-6 text-primary" />
                                            <StatusBadge status={region.status} />
                                        </div>
                                        <CardTitle className="text-lg">{region.name}</CardTitle>
                                        <CardDescription className="font-mono text-xs">
                                            {region.endpoint}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recent Incidents */}
                <section className="section-padding">
                    <div className="content-width">
                        <div className="text-center mb-12">
                            <h2 className="heading-2 mb-6">Incident History</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Transparency report of any service disruptions or incidents.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {incidents.map((incident, index) => (
                                <Card key={index} className="glass-card">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-2">{incident.date}</h3>
                                                <p className="text-muted-foreground">{incident.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Subscribe to Updates */}
                <section className="section-padding bg-muted/20">
                    <div className="content-width text-center">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="heading-2 mb-6">Stay Informed</h2>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Get notified about planned maintenance, incidents, and status updates.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-gradient">
                                    <Link href="/contact">Subscribe to Status Updates</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/docs">API Documentation</Link>
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