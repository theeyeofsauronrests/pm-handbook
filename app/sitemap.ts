import type { MetadataRoute } from 'next';

import { source } from '@/lib/source';

const siteUrl = 'https://product-management-handbook.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...source.getPages().map((page) => ({
      url: `${siteUrl}${page.url}`,
      lastModified: new Date(),
    })),
  ];
}
