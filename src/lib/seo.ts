export function getWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Reduxy',
    url: 'https://www.reduxy.ai',
    description: 'Detect and redact PII from text and images. 30+ PII types, face detection, document scanning.',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function getOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reduxy',
    url: 'https://www.reduxy.ai',
    logo: 'https://www.reduxy.ai/og-image.png',
    sameAs: ['https://twitter.com/reduxyai'],
  }
}
