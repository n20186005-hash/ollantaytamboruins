import { siteUrl as baseUrl } from "@/i18n/site-url";
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/gallery/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
