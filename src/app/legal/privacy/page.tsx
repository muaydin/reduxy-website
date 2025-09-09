import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <section className="section-padding">
                    <div className="content-width-narrow">
                        <div className="text-center mb-12">
                            <h1 className="heading-1 mb-6">Privacy Policy</h1>
                            <p className="text-lg text-muted-foreground">
                                Last updated: January 8, 2025
                            </p>
                        </div>

                        <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
                            <h2>1. Introduction</h2>
                            <p>
                                Reduxy.ai (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you use our privacy
                                gateway service.
                            </p>

                            <h2>2. Information We Collect</h2>
                            <h3>2.1 Account Information</h3>
                            <p>
                                When you create an account, we collect your email address, name, and company information
                                for account management and billing purposes.
                            </p>

                            <h3>2.2 API Usage Data</h3>
                            <p>
                                We collect metadata about your API requests, including timestamps, request/response sizes,
                                detected PII categories, and routing decisions. We do not store the actual content of your
                                requests unless explicitly configured for audit purposes.
                            </p>

                            <h3>2.3 Automatically Collected Information</h3>
                            <p>
                                We automatically collect certain technical information, including IP addresses, browser type,
                                operating system, and usage patterns to improve our service and ensure security.
                            </p>

                            <h2>3. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Provide and maintain our privacy gateway service</li>
                                <li>Process and route your API requests securely</li>
                                <li>Detect and mask PII in your data streams</li>
                                <li>Generate audit logs and compliance reports</li>
                                <li>Improve our service quality and security</li>
                                <li>Communicate with you about your account and our services</li>
                            </ul>

                            <h2>4. PII Processing</h2>
                            <h3>4.1 Detection and Masking</h3>
                            <p>
                                Our core service involves detecting PII in your data. When PII is detected, it is immediately
                                masked using reversible tokenization. The original PII is stored in an encrypted vault with
                                strong access controls.
                            </p>

                            <h3>4.2 Data Minimization</h3>
                            <p>
                                We implement data minimization principles. PII is only processed to the extent necessary
                                to provide our masking service and is not used for any other purposes.
                            </p>

                            <h2>5. Data Sharing and Disclosure</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer your personal information to third parties except:
                            </p>
                            <ul>
                                <li>With your explicit consent</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and safety</li>
                                <li>To service providers under strict confidentiality agreements</li>
                            </ul>

                            <h2>6. Data Security</h2>
                            <p>
                                We implement industry-standard security measures including:
                            </p>
                            <ul>
                                <li>End-to-end encryption for all data in transit</li>
                                <li>AES-256 encryption for data at rest</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>SOC 2 Type II compliance</li>
                                <li>Role-based access controls</li>
                            </ul>

                            <h2>7. Data Retention</h2>
                            <p>
                                We retain your data only as long as necessary to provide our services and meet legal
                                obligations. You can configure retention policies for your audit logs and request
                                deletion of your data at any time.
                            </p>

                            <h2>8. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access your personal information</li>
                                <li>Correct inaccurate data</li>
                                <li>Delete your personal information</li>
                                <li>Object to processing</li>
                                <li>Data portability</li>
                                <li>Withdraw consent</li>
                            </ul>

                            <h2>9. International Transfers</h2>
                            <p>
                                Your data may be transferred to and processed in countries other than your own.
                                We ensure appropriate safeguards are in place for such transfers.
                            </p>

                            <h2>10. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <ul>
                                <li>Email: privacy@reduxy.ai</li>
                                <li>Address: [Company Address]</li>
                            </ul>

                            <h2>11. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any
                                material changes by posting the new policy on this page and updating the
                                &quot;Last updated&quot; date.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
} 