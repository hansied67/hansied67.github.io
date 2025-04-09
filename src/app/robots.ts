import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function robots(): MetadataRoute.Robots {
  const domain = process.env.NEXT_PUBLIC_APP_DOMAIN
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${domain}/sitemap.ts`,
  }
}