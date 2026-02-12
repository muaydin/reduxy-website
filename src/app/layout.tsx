import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from "@/components/theme-provider"
import { getWebsiteJsonLd, getOrganizationJsonLd } from "@/lib/seo"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Reduxy - PII Detection & Redaction for Text and Images",
    template: `%s | Reduxy`,
  },
  description: "Detect and redact personal information from text and images. 30+ PII types, face detection, document scanning. Free to try.",
  keywords: [
    "PII detection", "PII redaction", "personal data", "face detection",
    "document scanning", "GDPR", "HIPAA", "privacy", "data protection",
    "text redaction", "image redaction", "OCR", "compliance",
  ],
  authors: [{ name: "Reduxy Team" }],
  creator: "Reduxy Team",
  metadataBase: new URL('https://www.reduxy.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.reduxy.ai',
    siteName: 'Reduxy',
    title: "Reduxy - PII Detection & Redaction for Text and Images",
    description: "Detect and redact personal information from text and images. 30+ PII types, face detection, document scanning.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reduxy - PII Detection & Redaction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reduxy - PII Detection & Redaction",
    description: "Detect and redact personal information from text and images instantly.",
    creator: '@reduxyai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebsiteJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getOrganizationJsonLd()) }}
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
