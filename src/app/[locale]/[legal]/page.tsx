import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DetailLanguageLinks } from "@/components/LocalizedAttraction";
import CookiesClient from "@/app/cookies/CookiesClient";
import { detailLocales } from "@/i18n/detail-locales";
import { legalCopy, legalSlugs } from "@/i18n/legal";
import { siteUrl } from "@/i18n/site-url";

type Props = { params: Promise<{ locale: string; legal: string }> };

export const dynamic = "force-dynamic";

async function resolvePage(params: Props["params"]) {
  const { locale: requestedLocale, legal: requestedPage } = await params;
  const locale = detailLocales.find(item => item === requestedLocale);
  const page = legalSlugs.find(item => item === requestedPage);
  if (!locale || !page) notFound();
  return { locale, page, copy: legalCopy[locale] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page, copy } = await resolvePage(params);
  const languages = Object.fromEntries(detailLocales.map(lang => [lang, `${siteUrl}/${lang}/${page}`]));
  return {
    title: { absolute: `${copy.titles[page]} | Ollantaytambo` },
    description: copy.titles[page],
    alternates: { canonical: languages[locale], languages: { ...languages, "x-default": languages.en } },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale, page, copy } = await resolvePage(params);
  const sections = page === "privacy" ? copy.privacy : copy.terms;
  return (
    <main lang={locale}>
      <header className="site-nav scrolled travel-detail-nav">
        <Link href={`/${locale}`}>Ollantaytambo</Link>
        <DetailLanguageLinks path={`/${page}`} locale={locale} />
      </header>
      <article className="section explore-guide">
        <h1 className="section-title">{copy.titles[page]}</h1>
        <p className="about-text">{copy.updated}</p>
        {page === "cookies" ? <CookiesClient copy={copy.cookies} /> : sections.map(([title, body, items]) => (
          <section key={title}>
            <h2 className="section-title">{title}</h2>
            <p className="about-text">{body}</p>
            {items && <ul className="legal-list">{items.map(item => <li key={item}>{item}</li>)}</ul>}
          </section>
        ))}
        <nav aria-label={copy.home}><Link href={`/${locale}`}>← {copy.home}</Link></nav>
      </article>
    </main>
  );
}
