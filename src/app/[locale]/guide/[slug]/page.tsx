import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideLabels, guideLocales, guidePlaces, guideSlugs, guideSources, guides, guidePractical, practicalLabels, guideRatings } from "@/i18n/guides";
import { siteUrl } from "@/i18n/site-url";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return guideLocales.flatMap((locale) => guideSlugs.map((slug) => ({ locale, slug })));
}

async function resolveGuide(params: Props["params"]) {
  const { locale: requestedLocale, slug: requestedSlug } = await params;
  const locale = guideLocales.find((item) => item === requestedLocale);
  const slug = guideSlugs.find((item) => item === requestedSlug);
  if (!locale || !slug) notFound();
  return { locale, slug, guide: guides[locale][slug] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, guide } = await resolveGuide(params);
  const canonical = `${siteUrl}/${locale}/guide/${slug}`;
  return {
    title: { absolute: guide.title },
    description: guide.intro,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(guideLocales.map((lang) => [lang, `${siteUrl}/${lang}/guide/${slug}`])),
        "x-default": `${siteUrl}/en/guide/${slug}`,
      },
    },
    openGraph: { type: "article", title: guide.title, description: guide.intro, url: canonical },
    twitter: { card: "summary", title: guide.title, description: guide.intro },
  };
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug, guide } = await resolveGuide(params);
  const labels = guideLabels[locale];
  const practical = practicalLabels[locale];
  const info = guidePractical[locale][slug];
  const rating = guideRatings[slug];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(guidePlaces[slug])}`;
  return (
    <main>
      <header className="site-nav scrolled">
        <Link href={`/${locale}`} style={{ color: "#fff" }}>Ollantaytambo</Link>
        <div style={{ display: "flex", gap: "1rem" }}>
          {guideLocales.map((lang) => (
            <Link key={lang} href={`/${lang}/guide/${slug}`} hrefLang={lang} lang={lang}
              aria-current={lang === locale ? "page" : undefined} style={{ color: "#fff" }}>
              {{ en: "EN", es: "ES", zh: "中文" }[lang]}
            </Link>
          ))}
        </div>
      </header>
      <article className="section explore-guide">
        <nav aria-label={labels.home}><Link href={`/${locale}`}>{labels.home}</Link></nav>
        <h1 className="section-title">{guide.title}</h1>
        <p className="about-text">{guide.intro}</p>
        <p><a href={map}>{labels.map}</a></p>
        <section>
          <h2 className="section-title">{practical.about}</h2>
          <p className="about-text">{info.about}</p>
        </section>
        <section>
          <h2 className="section-title">{practical.basic}</h2>
          <dl className="explore-facts">
            <dt>{practical.location}</dt><dd>{guidePlaces[slug]}</dd>
            <dt>{practical.check}</dt><dd><a href={guideSources[slug][0][1]}>{guideSources[slug][0][0]}</a></dd>
          </dl>
        </section>
        <section>
          <h2 className="section-title">{practical.transport}</h2>
          <p className="about-text">{info.transport}</p>
        </section>
        {guide.sections.map(([heading, body]) => (
          <section key={heading} style={{ marginTop: "2rem" }}>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>{heading}</h2>
            <p className="about-text">{body}</p>
          </section>
        ))}
        <section style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem" }}>{labels.faq}</h2>
          {guide.faq.map(([question, answer]) => (
            <div key={question} style={{ marginBottom: "1rem" }}>
              <h3>{question}</h3>
              <p className="about-text">{answer}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="section-title">{practical.reviews}</h2>
          {rating && (
            <p className="about-text">
              <strong>{rating.score.toLocaleString(locale)} / 5</strong>
              {" · "}{rating.count.toLocaleString(locale)} {({ en: "reviews", es: "opiniones", zh: "条评价" })[locale]}
              <br /><a href={rating.source}>Google Travel</a>{" · "}{labels.checked}
            </p>
          )}
          <p className="about-text"><a href={map}>{practical.current}</a></p>
        </section>
        <section style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem" }}>{labels.sources}</h2>
          <p>{labels.checked}</p>
          <ul>{guideSources[slug].map(([name, url]) => <li key={url}><a href={url}>{name}</a></li>)}</ul>
        </section>
        <nav aria-label={labels.heading} style={{ marginTop: "2rem" }}>
          <h2 className="section-title" style={{ fontSize: "1.8rem" }}>{labels.heading}</h2>
          <ul>{guideSlugs.filter((item) => item !== slug).map((item) => (
            <li key={item}><Link href={`/${locale}/guide/${item}`}>{guides[locale][item].title}</Link></li>
          ))}</ul>
        </nav>
      </article>
    </main>
  );
}
