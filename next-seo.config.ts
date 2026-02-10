export const defaultSEO = {
    title: 'Reduxy - PII Detection & Redaction for Text and Images',
    description: 'Detect and redact personal information from text and images. 30+ PII types, face detection, document scanning. Fast, private, and secure.',
    canonical: 'https://www.reduxy.ai',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.reduxy.ai',
        siteName: 'Reduxy',
        title: 'Reduxy - PII Detection & Redaction for Text and Images',
        description: 'Detect and redact personal information from text and images. 30+ PII types, face detection, document scanning. Fast, private, and secure.',
        images: [
            {
                url: 'https://www.reduxy.ai/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Reduxy - PII Detection & Redaction',
            },
        ],
    },
    twitter: {
        handle: '@reduxyai',
        site: '@reduxyai',
        cardType: 'summary_large_image',
    },
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
        },
        {
            name: 'robots',
            content: 'index,follow',
        },
        {
            name: 'googlebot',
            content: 'index,follow',
        },
        {
            property: 'dc:creator',
            content: 'Reduxy Team',
        },
        {
            name: 'application-name',
            content: 'Reduxy',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
        },
        {
            rel: 'manifest',
            href: '/site.webmanifest',
        },
    ],
}
