import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { admissionDetails, areas, attractions, municipalContacts, operators } from "@/i18n/nearby";
import { attractionPhotos } from "@/i18n/nearby-photos";
import { siteUrl } from "@/i18n/site-url";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return attractions.map(({ slug }) => ({ locale: "en", slug }));
}

async function getAttraction(params: Props["params"]) {
  const { locale, slug } = await params;
  const attraction = attractions.find((item) => item.slug === slug);
  if (locale !== "en" || !attraction) notFound();
  return attraction;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const attraction = await getAttraction(params);
  const url = `${siteUrl}/en/explore/${attraction.slug}`;
  const photo = attractionPhotos[attraction.slug];
  return {
    title: { absolute: `${attraction.name} Visitor Guide | Ollantaytambo` },
    description: attraction.intro,
    alternates: { canonical: url, languages: { en: url, "x-default": url } },
    openGraph: { type: "article", title: attraction.name, description: attraction.intro, url, images: photo ? [photo.path] : [] },
    twitter: { card: photo ? "summary_large_image" : "summary", title: attraction.name, description: attraction.intro, images: photo ? [photo.path] : [] },
  };
}

const heading = "section-title";

export default async function AttractionPage({ params }: Props) {
  const attraction = await getAttraction(params);
  const operator = operators[attraction.operator];
  const area = areas[attraction.area];
  const photo = attractionPhotos[attraction.slug];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.place + ", Perú")}`;
  const related = attractions.filter(({ slug, area }) => area === attraction.area && slug !== attraction.slug).slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: attraction.name,
    description: attraction.intro,
    url: `${siteUrl}/en/explore/${attraction.slug}`,
    hasMap: map,
    address: { "@type": "PostalAddress", streetAddress: attraction.place, addressCountry: "PE" },
    ...(photo ? { image: `${siteUrl}${photo.path}` } : {}),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="site-nav scrolled">
        <Link href="/en" style={{ color: "#fff" }}>Ollantaytambo</Link>
        <Link href="/en#nearby-attractions" style={{ color: "#fff" }}>Nearby attractions</Link>
      </header>
      <article className="section explore-guide">
        <nav aria-label="Breadcrumb" className="section-label"><Link href="/en#nearby-attractions">Nearby attractions</Link> / {area.en}</nav>
        <h1 className={heading}>{attraction.name}</h1>
        <p className="about-text">{attraction.intro}</p>
        <a className="highlight-item" href={map}>Open in Google Maps</a>
        {photo && (
          <figure className="explore-photo">
            <Image src={photo.path} alt={attraction.name} width={photo.width} height={photo.height} />
            <figcaption><a href={photo.source}>Photo source</a></figcaption>
          </figure>
        )}
        <section>
          <h2 className={heading}>About {attraction.name}</h2>
          <p className="about-text"><strong>{municipalContacts[attraction.slug] ?? operator.name}.</strong> {operator.description}</p>
        </section>
        <section>
          <h2 className={heading}>Basic information</h2>
          <dl className="explore-facts">
            <dt>Location</dt><dd>{attraction.place}, Perú</dd>
            <dt>Area</dt><dd>{area.en}</dd>
            {admissionDetails[attraction.slug] && <><dt>Admission</dt><dd>{admissionDetails[attraction.slug]}</dd></>}
            <dt>Visitor information</dt><dd><a href={attraction.source}>Check site access and current arrangements</a></dd>
          </dl>
        </section>
        <section>
          <h2 className={heading}>Architecture and features</h2>
          <p className="about-text">{attraction.details}</p>
        </section>
        <section>
          <h2 className={heading}>Getting there</h2>
          <p className="about-text">{attraction.transport}</p>
        </section>
        <section>
          <h2 className={heading}>Suggested walking route</h2>
          <p className="about-text">{attraction.route}</p>
        </section>
        <section>
          <h2 className={heading}>Where to take photos</h2>
          <p className="about-text">{attraction.camera}</p>
        </section>
        <section>
          <h2 className={heading}>Frequently asked questions</h2>
          <h3>{attraction.question}</h3>
          <p className="about-text">{attraction.answer}</p>
        </section>
        <section>
          <h2 className={heading}>Visitor reviews</h2>
          <p className="about-text"><a href={map}>See current ratings and visitor reviews on Google Maps</a></p>
        </section>
        <section>
          <h2 className={heading}>Sources</h2>
          <ul>
            <li><a href={attraction.source}>Visitor and heritage information</a></li>
            {operator.url && operator.url !== attraction.source && <li><a href={operator.url}>{operator.name}</a></li>}
          </ul>
        </section>
        <nav aria-label="Nearby attractions">
          <h2 className={heading}>Explore {area.en}</h2>
          <div className="highlights-grid">{related.map((item) => (
            <Link key={item.slug} className="highlight-item" href={`/en/explore/${item.slug}`}>{item.name}</Link>
          ))}</div>
        </nav>
      </article>
    </main>
  );
}
