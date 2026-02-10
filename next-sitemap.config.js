/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.reduxy.ai',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://www.reduxy.ai/sitemap.xml',
        ],
    },
    exclude: [
        '/server-sitemap-index.xml',
        '/admin',
        '/admin/*',
        '/api/*',
    ],
    transform: async (config, path) => {
        const customPriority = {
            '/': 1.0,
            '/docs': 0.9,
            '/pricing': 0.8,
            '/legal/privacy': 0.5,
        }

        return {
            loc: path,
            changefreq: path === '/' ? 'daily' : 'weekly',
            priority: customPriority[path] || 0.5,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    },
}
