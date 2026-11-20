import Link from "next/link";
import type { ReactNode } from "react";
import { TravelDetailHero } from "./TravelDetailHero";
import { attractionLocales, detailLocales, detailText, localeNames, type AttractionTranslation, type DetailLocale } from "@/i18n/detail-locales";

export function DetailLanguageLinks({ path, locale, available = detailLocales }: { path: string; locale: DetailLocale; available?: readonly DetailLocale[] }) {
  return (
    <nav className="travel-language-links" aria-label={{ en: "Languages", es: "Idiomas", zh: "语言", qu: "Rimaykuna" }[locale]}>
      {available.map((lang) => (
        <Link key={lang} href={`/${lang}${path}`} hrefLang={lang} lang={lang}
          aria-current={lang === locale ? "page" : undefined}>{localeNames[lang]}</Link>
      ))}
    </nav>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section><h2 className="section-title">{title}</h2>{children}</section>;
}

export function LocalizedAttraction({ slug, locale, area, place, map, source, photo, rating, copy, contact, extraSources }: {
  slug: string;
  copy: AttractionTranslation;
  contact: string;
  extraSources?: string[];
  locale: Exclude<DetailLocale, "en">;
  area: string;
  place: string;
  map: string;
  source: string;
  photo?: { path: string; source: string };
  rating?: { score: string; reviews: string; url: string };
}) {
  const [nearby, mapLabel, discover, tips, highlights, about, basic, hours, admission, transport, history, route, precautions, photos, stay, reviews, directions, faq, sources, photoSource, location, manager, duration] = detailText[locale];
  const genericContacts: Record<string, Record<typeof locale, string>> = {
    "Church and visitor administration": { es: "Administración del templo y de las visitas", zh: "教堂及参观管理方", qu: "Iglesiapa watukuqkunapa kamachiqnin" },
    "Local access managers": { es: "Responsables locales del acceso", zh: "当地通行管理方", qu: "Llaqtapi yaykunata qhawaqkuna" },
    "Lucre–Huacarpay Ramsar site contacts": { es: "Contactos del sitio Ramsar Lucre–Huacarpay", zh: "卢克雷—瓦卡尔派湿地管理联系人", qu: "Lucre–Huacarpay Ramsar kitipa qhawaqnin" },
    "Rail service operators": { es: "Operadores ferroviarios", zh: "铁路运营方", qu: "Trenpa llamk’achiq empresakuna" },
    "DDC Cusco and SERNANP": { es: "DDC Cusco y SERNANP", zh: "库斯科文化主管部门与 SERNANP", qu: "DDC Cusco, SERNANP ima" },
  };
  const reviewCount = { es: "opiniones", zh: "条评价", qu: "yuyaykuna" }[locale];
  const ratingText = rating && `${rating.score}/5 · ${rating.reviews} ${reviewCount}`;
  const summary = [[location, place], [manager, genericContacts[contact]?.[locale] ?? contact], [duration, copy.duration], [hours, copy.hours], [admission, copy.admission]];
  if (copy.terrain) summary.push([{ es: "Terreno", zh: "地形", qu: "Allpapa rikch’aynin" }[locale], copy.terrain]);
  if (copy.field) summary.push(copy.field);
  return (
    <main lang={locale}>
      <header className="site-nav scrolled travel-detail-nav">
        <Link href={`/${locale}#nearby-attractions`}>{nearby}</Link>
        <DetailLanguageLinks path={`/explore/${slug}`} locale={locale} available={attractionLocales(slug)} />
      </header>
      <TravelDetailHero title={copy.name} label={area} subtitle={copy.tagline} map={map} mapLabel={mapLabel}
        photo={photo && { path: photo.path, alt: copy.name }}>
        <li>{copy.hours}</li>
        <li><a href={rating?.url ?? map}>{ratingText ?? reviews}</a></li>
      </TravelDetailHero>
      <article className="section explore-guide travel-detail-body">
        {photo && <p className="travel-photo-credit"><a href={photo.source}>{photoSource}</a></p>}
        <Section title={discover}>
          <p className="about-text">{copy.intro}</p>
          <h3>{tips}</h3><p className="about-text">{copy.tips}</p>
          <h3>{highlights}</h3><p className="about-text">{copy.highlights}</p>
        </Section>
        <Section title={about}><p className="about-text">{copy.about}</p></Section>
        <Section title={basic}>
          <table className="explore-info"><tbody>{summary.map(([label, value]) => (
            <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
          ))}</tbody></table>
        </Section>
        <Section title={hours}><p className="about-text">{copy.hours}</p></Section>
        <Section title={admission}><p className="about-text">{copy.admission}</p></Section>
        <Section title={transport}><p className="about-text">{copy.transport}</p></Section>
        <Section title={history}><p className="about-text">{copy.history}</p></Section>
        <Section title={route}>{copy.previousRoute && <p className="about-text">{copy.previousRoute}</p>}<ol className="explore-steps">{copy.route.map((step, index) => <li key={index}>{step}</li>)}</ol></Section>
        <Section title={precautions}><p className="about-text">{copy.precautions}</p></Section>
        <Section title={photos}><p className="about-text">{copy.photo}</p></Section>
        <Section title={stay}><p className="about-text">{copy.stay}</p></Section>
        <Section title={reviews}>
          {rating && <p className="about-text"><a href={rating.url}>Google Travel · {ratingText}</a></p>}
          <p className="about-text"><a href={map}>{mapLabel}</a></p>
        </Section>
        <Section title={directions}><p className="about-text">{place}</p><a href={map}>{mapLabel}</a></Section>
        <Section title={faq}><h3>{copy.faq[0]}</h3><p className="about-text">{copy.faq[1]}</p></Section>
        <Section title={sources}>
          <ul className="legal-list">
            {[...new Set([source, ...(extraSources ?? [])])].map(url => (
              <li key={url}><a href={url}>{new URL(url).hostname}</a></li>
            ))}
          </ul>
        </Section>
      </article>
    </main>
  );
}
