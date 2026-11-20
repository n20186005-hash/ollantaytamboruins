import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { admissionDetails, areas, attractions, municipalContacts, operators } from "@/i18n/nearby";
import { attractionPhotos } from "@/i18n/nearby-photos";
import { fieldDetails, machuTickets, openingHours, placeRatings, planningSources, tariffUrl, visitPlans } from "@/i18n/nearby-visit";
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
  const visit = visitPlans[attraction.slug];
  const hours = openingHours[attraction.slug];
  const rating = placeRatings[attraction.slug];
  const field = fieldDetails[attraction.slug];
  const source = planningSources[attraction.slug];
  const admission = admissionDetails[attraction.slug];
  const pass = admission?.includes("Cusco Tourist Ticket");
  const circuitOne = pass && admission.includes("Circuit I or");
  const openingSummary = hours?.time ?? {
    town: "Visit public streets in daylight",
    market: "Vendor hours vary",
    rail: "Check your booked departure",
    trail: "Timed or itinerary-based access",
    park: "Check site access before leaving",
    salt: "Check with the salt pans operator",
    dominicans: "Check convent visiting hours",
    archdiocese: "Check sightseeing hours around worship",
  }[attraction.operator];
  const openingNote = {
    town: "Streets and squares are public spaces. Check separate hours for churches, shops and any market stalls you plan to visit.",
    market: "Stall schedules vary. Confirm vendor hours if arriving near the end of the trading day.",
    rail: "Use the boarding time and check-in instructions printed on your individual ticket.",
    trail: "Use the entry time on the citadel ticket or the checkpoint instructions from the authorised trail operator. Confirm any route notices before travel.",
    park: "Ask the local site staff which access and visitor paths are open on your travel day.",
    salt: "Confirm opening and last admission directly with the salt pans operator before traveling from Maras.",
    dominicans: "Check opening and last admission separately for the convent and site museum.",
    archdiocese: "Confirm sightseeing access at the cathedral entrance, especially around worship and religious events.",
  }[attraction.operator];
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
        <header className="explore-hero">
          <h1 className={heading}>{attraction.name}</h1>
          <p className="about-text">{visit.tagline}</p>
          <ul className="explore-hero-meta">
            <li>{rating ? <a href={rating.url}>{rating.score}/5 · {rating.reviews} Google reviews</a> : <a href={map}>Visitor ratings on Google Maps</a>}</li>
            <li><a href="#opening-hours">{openingSummary}</a></li>
            <li><a href={map}>Open in Google Maps</a></li>
          </ul>
          {photo && (
            <figure className="explore-photo">
              <Image src={photo.path} alt={attraction.name} width={photo.width} height={photo.height} />
              <figcaption><a href={photo.source}>Photo source</a></figcaption>
            </figure>
          )}
        </header>
        <section>
          <h2 className={heading}>Discover {attraction.name}</h2>
          <p className="about-text">{attraction.intro}</p>
          <h3>Visit tips</h3>
          <p className="about-text">{visit.advice}</p>
          <h3>Highlights</h3>
          <p className="about-text">{attraction.details}</p>
        </section>
        <section>
          <h2 className={heading}>About {attraction.name}</h2>
          <p className="about-text"><strong>{municipalContacts[attraction.slug] ?? operator.name}.</strong> {operator.description}</p>
        </section>
        <section>
          <h2 className={heading}>Basic information</h2>
          <table className="explore-info">
            <tbody>
              <tr><th scope="row">Place</th><td>{attraction.name}</td></tr>
              <tr><th scope="row">Location</th><td>{attraction.place}, Perú</td></tr>
              <tr><th scope="row">Area</th><td>{area.en}</td></tr>
              <tr><th scope="row">Terrain</th><td>{visit.terrain}</td></tr>
              <tr><th scope="row">Suggested time</th><td>{visit.duration}</td></tr>
              {field && <tr><th scope="row">{field.label}</th><td>{field.value}</td></tr>}
              {admission && <tr><th scope="row">Admission</th><td>{admission}</td></tr>}
              <tr><th scope="row">Visitor information</th><td><a href={attraction.source}>Check site access and current arrangements</a></td></tr>
            </tbody>
          </table>
        </section>
        <section id="opening-hours">
          <h2 className={heading}>Opening hours</h2>
          {hours && <p className="about-text"><a href={hours.source}>{hours.time}</a>. Check for temporary changes on the day of travel.</p>}
          <p className="about-text">{openingNote}</p>
        </section>
        <section>
          <h2 className={heading}>Ticket prices and admission</h2>
          {admission && <p className="about-text">{admission}</p>}
          {pass ? (
            <p className="about-text"><a href={tariffUrl}>COSITUC lists S/70 for the foreign visitor partial pass</a> ({circuitOne ? "one day" : "two days"}) or S/130 for the ten-day full pass. Check eligibility and current rates before buying.</p>
          ) : attraction.operator === "trail" ? (
            <p className="about-text">Check the <a href={machuTickets}>official Machu Picchu booking portal</a> for route-specific citadel prices. For a guided trail visit, confirm what the operator’s quote covers, including trail entry and onward travel.</p>
          ) : attraction.slug === "qorikancha" ? (
            <p className="about-text">The <a href={source}>MINCETUR inventory</a> lists S/20 for adults and S/10 for students at the convent. Verify on arrival and check the separate site museum admission if visiting both.</p>
          ) : (
            <p className="about-text">{{
              town: "There is no ticket for the public walk. Individual venues and activities set their own prices.",
              market: "No sightseeing ticket is needed to enter the market. Food and other purchases are priced by vendors.",
              rail: "The fare depends on the service, date and operator shown at booking.",
              park: attraction.slug === "naupa-iglesia" ? "The MINCETUR inventory lists free entry. Check local access conditions before departing." : "Ask site staff about entry arrangements before the hike. Verify any admission charge locally.",
              salt: "Check the current rate with the salt pans operator before traveling.",
              archdiocese: "Ask the cathedral ticket desk for the current price and what the religious circuit includes.",
              dominicans: "Check current admission at the venue.",
            }[attraction.operator]}</p>
          )}
        </section>
        <section>
          <h2 className={heading}>Getting there</h2>
          <p className="about-text">{attraction.transport}</p>
        </section>
        <section>
          <h2 className={heading}>History, architecture and visitor experience</h2>
          <p className="about-text">{visit.history}</p>
        </section>
        <section>
          <h2 className={heading}>Suggested walking route</h2>
          <p className="about-text">{attraction.route}</p>
          <ol className="explore-steps">
            {visit.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
        <section>
          <h2 className={heading}>Before you visit</h2>
          <p className="about-text">{visit.precautions}</p>
        </section>
        <section>
          <h2 className={heading}>Where to take photos</h2>
          <p className="about-text">{attraction.camera}</p>
        </section>
        <section>
          <h2 className={heading}>Where to stay</h2>
          <p className="about-text">{visit.stay}</p>
        </section>
        <section>
          <h2 className={heading}>Visitor reviews</h2>
          {rating && <p className="about-text"><a href={rating.url}>Google Travel</a> showed {rating.score}/5 from {rating.reviews} Google reviews in the listing checked on November 20, 2026.</p>}
          <p className="about-text"><a href={map}>See current ratings and visitor reviews on Google Maps</a></p>
        </section>
        <section>
          <h2 className={heading}>Location and directions</h2>
          <p className="about-text">{attraction.place}, Perú</p>
          <p className="about-text"><a href={map}>Find {attraction.name} on Google Maps</a></p>
        </section>
        <section>
          <h2 className={heading}>Frequently asked questions</h2>
          <h3>{attraction.question}</h3>
          <p className="about-text">{attraction.answer}</p>
        </section>
        <section>
          <h2 className={heading}>Sources</h2>
          <ul>
            <li><a href={attraction.source}>Visitor and heritage information</a></li>
            {source && source !== attraction.source && <li><a href={source}>Additional visitor information</a></li>}
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
