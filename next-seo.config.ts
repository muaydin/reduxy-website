import { DefaultSeoProps } from 'next-seo'

export const defaultSEO: DefaultSeoProps = {
    title: 'Reduxy.ai - Privacy Gateway for LLMs',
    description: 'Mask PII, route safely, and audit every token before your data reaches OpenAI, Anthropic, or your own models.',
    canonical: 'https://www.reduxy.ai',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.reduxy.ai',
        siteName: 'Reduxy.ai',
        title: 'Reduxy.ai - Privacy Gateway for LLMs',
        description: 'Mask PII, route safely, and audit every token before your data reaches OpenAI, Anthropic, or your own models.',
        images: [
            {
                url: 'https://www.reduxy.ai/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Reduxy.ai - Privacy Gateway for LLMs',
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
            content: 'Reduxy.ai',
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