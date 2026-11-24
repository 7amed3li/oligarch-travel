import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api/', '/design-board'] }],
    sitemap: 'https://www.byzist.com/sitemap.xml',
    host: 'https://www.byzist.com',
  };
}
