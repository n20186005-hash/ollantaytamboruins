import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "ollantaytamboruins.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: "es", ogLocale: "es_PE" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
  qu: { htmlLang: "qu", ogLocale: "qu_PE" },
};

// 生成绝对 URL 的 hreflang 映射
// Next.js 需要绝对 URL 才能正确输出 <link rel="alternate" hreflang> 标签
function getHreflangAlternates(baseUrl: string) {
  return {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
    "x-default": `${baseUrl}/en`,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "es"
          ? "Ollantaytambo — Valle Sagrado, Perú"
          : locale === "zh"
          ? "奥扬泰坦博考古遗址 — 秘鲁圣谷"
          : locale === "qu"
          ? "Ollantaytambo — Valle Sagrado, Piruw"
          : "Ollantaytambo Archaeological Site — Sacred Valley, Peru",
      template:
        locale === "es"
          ? "%s | Ollantaytambo"
          : locale === "zh"
          ? "%s | 奥扬泰坦博考古遗址"
          : locale === "qu"
          ? "%s | Ollantaytambo"
          : "%s | Ollantaytambo Archaeological Site",
    },
    description:
      locale === "es"
        ? "Guía de viaje a Ollantaytambo en el Valle Sagrado, Perú. Fortaleza inca con piedras megalíticas."
        : locale === "zh"
        ? "奥扬泰坦博考古遗址旅行指南——探索秘鲁圣谷的印加古迹，欣赏印加石工技术的巅峰之作。"
        : locale === "qu"
        ? "Ollantaytambo rikuy, Valle Sagrado, Piruw. Inca rumi."
        : "A travel guide to Ollantaytambo Archaeological Site in the Sacred Valley, Peru. The famous Inca fortress with megalithic stones.",
    keywords: [
      "Ollantaytambo",
      "Ollantaytambo Archaeological Site",
      "Sacred Valley tourism",
      "Inca fortress",
      "Cusco attractions",
      "Peru tourism",
      "Inca architecture",
      "Sacred Valley archaeological site",
      "Machu Picchu gateway",
    ],
    authors: [{ name: "Ollantaytambo Archaeological Site Travel Guide" }],
    creator: "Ollantaytambo Archaeological Site Travel Guide",
    publisher: "Ollantaytambo Archaeological Site Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "en_US",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "en_US")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "es"
          ? "Ollantaytambo — Valle Sagrado, Perú"
          : locale === "zh"
          ? "奥扬泰坦博考古遗址 — 秘鲁圣谷"
          : locale === "qu"
          ? "Ollantaytambo — Valle Sagrado, Piruw"
          : "Ollantaytambo Archaeological Site — Sacred Valley, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a Ollantaytambo en el Valle Sagrado, Perú. Fortaleza inca."
          : locale === "zh"
          ? "奥扬泰坦博考古遗址旅行指南——探索秘鲁圣谷的印加古迹。"
          : locale === "qu"
          ? "Ollantaytambo rikuy, Valle Sagrado, Piruw."
          : "A travel guide to Ollantaytambo Archaeological Site in the Sacred Valley, Peru.",
      siteName:
        locale === "es"
          ? "Ollantaytambo Guía de Viaje"
          : locale === "zh"
          ? "奥扬泰坦博考古遗址旅行指南"
          : locale === "qu"
          ? "Ollantaytambo rikuy"
          : "Ollantaytambo Archaeological Site Travel Guide",
      images: [
        {
          url: "/gallery/ollantaytambo-archeological-site (1).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Ollantaytambo - Valle Sagrado, Perú"
              : locale === "zh"
              ? "奥扬泰坦博考古遗址 - 秘鲁圣谷"
              : locale === "qu"
              ? "Ollantaytambo - Valle Sagrado, Piruw"
              : "Ollantaytambo Archaeological Site - Sacred Valley, Peru",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "es"
          ? "Ollantaytambo — Valle Sagrado, Perú"
          : locale === "zh"
          ? "奥扬泰坦博考古遗址 — 秘鲁圣谷"
          : locale === "qu"
          ? "Ollantaytambo — Valle Sagrado, Piruw"
          : "Ollantaytambo Archaeological Site — Sacred Valley, Peru",
      description:
        locale === "es"
          ? "Guía de viaje a Ollantaytambo en el Valle Sagrado, Perú."
          : locale === "zh"
          ? "奥扬泰坦博考古遗址旅行指南——探索秘鲁圣谷的印加古迹。"
          : locale === "qu"
          ? "Ollantaytambo rikuy, Valle Sagrado, Piruw."
          : "A travel guide to Ollantaytambo Archaeological Site in the Sacred Valley, Peru.",
      images: ["/gallery/ollantaytambo-archeological-site (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "zh" },
    { locale: "qu" },
  ];
}

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "en";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
