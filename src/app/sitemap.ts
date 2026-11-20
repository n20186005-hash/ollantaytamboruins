import type { MetadataRoute } from "next";
import { guideLocales, guideSlugs } from "@/i18n/guides";
import { attractions } from "@/i18n/nearby";
import { attractionLocales, detailLocales } from "@/i18n/detail-locales";
import { legalSlugs } from "@/i18n/legal";
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
    ...attractions.flatMap(({ slug }) => {
      const locales = attractionLocales(slug);
      const path = `/explore/${slug}`;
      return locales.map(locale => ({ url: `${siteUrl}/${locale}${path}`, alternates: alternates(locales, path) }));
    }),
    ...legalSlugs.flatMap(slug => detailLocales.map(locale => ({
      url: `${siteUrl}/${locale}/${slug}`,
      alternates: alternates(detailLocales, `/${slug}`),
    }))),
    ...guideSlugs.flatMap((slug) => guideLocales.map((locale) => ({
      url: `${siteUrl}/${locale}/guide/${slug}`,
      alternates: alternates(guideLocales, `/guide/${slug}`),
    }))),
  ];
}
