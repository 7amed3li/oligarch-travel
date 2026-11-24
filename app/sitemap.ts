import type { MetadataRoute } from 'next';
import { LOCALES, TOURS } from '@/data/tours';

const BASE = 'https://www.byzist.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/guide', ...Object.keys(TOURS).map((id) => `/tours/${id}`)];
  const out: MetadataRoute.Sitemap = [];
  for (const p of paths) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) languages[l] = `${BASE}/${l}${p}`;
    languages['x-default'] = `${BASE}/en${p}`;
    for (const l of LOCALES) {
      out.push({
        url: `${BASE}/${l}${p}`,
        lastModified: new Date(),
        changeFrequency: p === '' ? 'weekly' : 'monthly',
        priority: p === '' ? 1 : p === '/guide' ? 0.7 : 0.8,
        alternates: { languages },
      });
    }
  }
  return out;
}
