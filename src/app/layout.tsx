import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { defaultSEO } from "../../next-seo.config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: defaultSEO.title || "Reduxy.ai - Privacy Gateway for LLMs",
    template: `%s | Reduxy.ai`,
  },
  description: defaultSEO.description,
  keywords: ["LLM", "Privacy", "PII", "Masking", "OpenAI", "Anthropic", "API Gateway", "Compliance", "GDPR", "HIPAA"],
  authors: [{ name: "Reduxy Team" }],
  creator: "Reduxy Team",
  metadataBase: new URL('https://www.reduxy.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.reduxy.ai',
    siteName: 'Reduxy.ai',
    title: defaultSEO.title || "Reduxy.ai - Privacy Gateway for LLMs",
    description: defaultSEO.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reduxy.ai - Privacy Gateway for LLMs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultSEO.title || "Reduxy.ai - Privacy Gateway for LLMs",
    description: defaultSEO.description,
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
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
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
