import type { MetadataRoute } from "next";
import { guideLocales, guideSlugs } from "@/i18n/guides";
import { attractions } from "@/i18n/nearby";
import { siteUrl } from "@/i18n/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLocales = ["en", "es", "zh", "qu"];
  const alternates = (locales: readonly string[], path = "") => ({
    languages: {
      ...Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}/${locale}${path}`])),
      "x-default": `${siteUrl}/en${path}`,
    },
  });

  return [
    ...homeLocales.map((locale) => ({
      url: `${siteUrl}/${locale}`,
      alternates: alternates(homeLocales),
    })),
    ...attractions.map(({ slug }) => ({ url: `${siteUrl}/en/explore/${slug}` })),
    ...guideSlugs.flatMap((slug) => guideLocales.map((locale) => ({
      url: `${siteUrl}/${locale}/guide/${slug}`,
      alternates: alternates(guideLocales, `/guide/${slug}`),
    }))),
  ];
}
