import { MetadataRoute } from 'next'

const baseUrl = 'https://cornersoftware.com'

interface SitemapEntry {
    url: string
    lastModified?: string | Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
}

// Static pages configuration
const staticPages = [
    {
        path: '',
        priority: 1.0,
        changeFrequency: 'daily' as const
    },
    {
        path: '/about',
        priority: 0.8,
        changeFrequency: 'weekly' as const
    },
    {
        path: '/services',
        priority: 0.8,
        changeFrequency: 'weekly' as const
    },
    {
        path: '/contact',
        priority: 0.8,
        changeFrequency: 'weekly' as const
    },
    {
        path: '/portfolio',
        priority: 0.7,
        changeFrequency: 'weekly' as const
    },
    {
        path: '/blog',
        priority: 0.6,
        changeFrequency: 'daily' as const
    },
    {
        path: '/pricing',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    }
] as const

// Service pages configuration
const servicePages = [
    {
        path: '/services/web-development',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/mobile-app-development',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/ui-ux-design',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/ecommerce-development',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/digital-marketing',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/seo-optimization',
        priority: 0.7,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/branding-design',
        priority: 0.6,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/content-management',
        priority: 0.6,
        changeFrequency: 'monthly' as const
    },
    {
        path: '/services/hosting-maintenance',
        priority: 0.6,
        changeFrequency: 'monthly' as const
    }
] as const

// Additional utility pages
const utilityPages = [
    {
        path: '/privacy-policy',
        priority: 0.3,
        changeFrequency: 'yearly' as const
    },
    {
        path: '/terms-of-service',
        priority: 0.3,
        changeFrequency: 'yearly' as const
    },
    {
        path: '/sitemap',
        priority: 0.2,
        changeFrequency: 'yearly' as const
    }
] as const

/**
 * Creates sitemap entries for all pages
 */
function createSitemapEntries(
    pages: readonly { path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }[]
): SitemapEntry[] {
    const entries: SitemapEntry[] = []
    const currentDate = new Date().toISOString()

    for (const page of pages) {
        entries.push({
            url: `${baseUrl}${page.path}`,
            lastModified: currentDate,
            changeFrequency: page.changeFrequency,
            priority: page.priority
        })
    }

    return entries
}

/**
 * Generates additional blog post entries (if blog exists)
 */
function generateBlogEntries(): SitemapEntry[] {
    const entries: SitemapEntry[] = []
    const currentDate = new Date().toISOString()

    // Example blog posts - in a real application, this would fetch from CMS or database
    const blogPosts = [
        'web-development-trends-2024',
        'mobile-app-design-best-practices',
        'seo-optimization-guide',
        'ecommerce-development-tips',
        'ui-ux-design-principles'
    ]

    for (const post of blogPosts) {
        entries.push({
            url: `${baseUrl}/blog/${post}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5
        })
    }

    return entries
}

/**
 * Generates portfolio project entries
 */
function generatePortfolioEntries(): SitemapEntry[] {
    const entries: SitemapEntry[] = []
    const currentDate = new Date().toISOString()

    // Example portfolio projects - in a real application, this would fetch from CMS or database
    const portfolioProjects = [
        'ecommerce-platform-redesign',
        'mobile-banking-app',
        'restaurant-management-system',
        'real-estate-portal',
        'healthcare-appointment-system'
    ]

    for (const project of portfolioProjects) {
        entries.push({
            url: `${baseUrl}/portfolio/${project}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6
        })
    }

    return entries
}

/**
 * Main sitemap generation function for Next.js 15
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: SitemapEntry[] = []

    // Add static pages
    sitemapEntries.push(...createSitemapEntries(staticPages))

    // Add service pages
    sitemapEntries.push(...createSitemapEntries(servicePages))

    // Add utility pages
    sitemapEntries.push(...createSitemapEntries(utilityPages))

    // Add blog entries
    sitemapEntries.push(...generateBlogEntries())

    // Add portfolio entries
    sitemapEntries.push(...generatePortfolioEntries())

    // Sort entries by priority (highest first) and then alphabetically by URL
    sitemapEntries.sort((a, b) => {
        if (a.priority !== b.priority) {
            return (b.priority || 0) - (a.priority || 0)
        }
        return a.url.localeCompare(b.url)
    })

    return sitemapEntries
}

/**
 * Alternative function for generating XML sitemap manually (if needed)
 */
export function generateXMLSitemap(): string {
    const entries = sitemap()

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

    for (const entry of entries) {
        xml += `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`
    }

    xml += '</urlset>'
    return xml
}

/**
 * Function to get sitemap statistics
 */
export function getSitemapStats() {
    const entries = sitemap()

    const stats = {
        total: entries.length,
        byPriority: {} as Record<string, number>,
        byChangeFrequency: {} as Record<string, number>
    }

    // Count entries by various criteria
    for (const entry of entries) {
        // Count by priority
        const priority = entry.priority?.toString() || '0'
        stats.byPriority[priority] = (stats.byPriority[priority] || 0) + 1

        // Count by change frequency
        const freq = entry.changeFrequency || 'never'
        stats.byChangeFrequency[freq] = (stats.byChangeFrequency[freq] || 0) + 1
    }

    return stats
}