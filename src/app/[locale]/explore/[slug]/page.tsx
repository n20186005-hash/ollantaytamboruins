import type { Metadata } from "next";
import Link from "next/link";
import { DetailLanguageLinks, LocalizedAttraction } from "@/components/LocalizedAttraction";
import { attractionLocales, detailLocales } from "@/i18n/detail-locales";
import { getAttractionCopy } from "@/i18n/attraction-copy";
import { TravelDetailHero } from "@/components/TravelDetailHero";
import { notFound } from "next/navigation";
import { admissionDetails, areas, attractions, municipalContacts, operators } from "@/i18n/nearby";
import { attractionPhotos } from "@/i18n/nearby-photos";
import { confirmedTicketPrices, fieldDetails, machuTickets, openingHours, placeRatings, planningSources, tariffUrl, visitPlans } from "@/i18n/nearby-visit";
import { heritageManagement, heritageVisitorDetails } from "@/i18n/nearby-heritage";
import { siteUrl } from "@/i18n/site-url";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamic = "force-dynamic";

async function getAttraction(params: Props["params"]) {
  const { locale: requested, slug } = await params;
  const locale = detailLocales.find(lang => lang === requested);
  const attraction = attractions.find((item) => item.slug === slug);
  if (!locale || !attraction) notFound();
  if (locale === "en") return { attraction, locale, translation: null } as const;
  const translation = getAttractionCopy(slug, locale);
  if (!translation) notFound();
  return { attraction, locale, translation } as const;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { attraction, locale, translation } = await getAttraction(params);
  const path = `/explore/${attraction.slug}`;
  const url = `${siteUrl}/${locale}${path}`;
  const copy = translation ?? attraction;
  const languages = Object.fromEntries(attractionLocales(attraction.slug).map(lang => [lang, `${siteUrl}/${lang}${path}`]));
  const photo = attractionPhotos[attraction.slug];
  return {
    title: { absolute: `${copy.name} | Ollantaytambo` },
    description: copy.intro,
    alternates: { canonical: url, languages: { ...languages, "x-default": `${siteUrl}/en${path}` } },
    openGraph: { type: "article", title: copy.name, description: copy.intro, url, images: photo ? [photo.path] : [] },
    twitter: { card: photo ? "summary_large_image" : "summary", title: copy.name, description: copy.intro, images: photo ? [photo.path] : [] },
  };
}

const heading = "section-title";

export default async function AttractionPage({ params }: Props) {
  const { attraction, locale, translation } = await getAttraction(params);
  const operator = operators[attraction.operator];
  const management = heritageManagement[attraction.slug];
  const visitor = heritageVisitorDetails[attraction.slug];
  const manager = management?.name ?? municipalContacts[attraction.slug] ?? operator.name;
  const area = areas[attraction.area];
  const visit = visitPlans[attraction.slug];
  const hours = openingHours[attraction.slug];
  const rating = placeRatings[attraction.slug];
  const field = fieldDetails[attraction.slug];
  const source = planningSources[attraction.slug];
  const admission = admissionDetails[attraction.slug];
  const ticket = confirmedTicketPrices[attraction.slug];
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
    community: "Arrange a time with your community host",
    outdoor: "Confirm shore or garden access",
    municipal: "Confirm current municipal visiting hours",
    museum: "Check the museum’s visitor schedule",
    church: "Confirm church visiting hours",
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
    community: "Community visits are arranged with hosts. Check the meeting time and expected length of any booked activity.",
    outdoor: "Use daylight for the outdoor visit. Check access conditions and any operator-managed opening times before departure.",
    municipal: "Confirm the current opening and last admission with the municipal bath operator.",
    museum: "Confirm the museum’s current opening days and last admission. Check holiday schedules separately.",
    church: "Ask about sightseeing access around services. Church and museum hours may differ.",
  }[attraction.operator];
  const photo = attractionPhotos[attraction.slug];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.place + ", Perú")}`;
  if (locale !== "en") {
    return <LocalizedAttraction slug={attraction.slug} locale={locale} area={area[locale]}
      place={`${attraction.place}, Perú`} map={map} source={attraction.source} photo={photo} rating={rating} copy={translation} contact={manager}
      extraSources={[management?.url, source, hours?.source, ticket?.source, pass ? tariffUrl : undefined, operator.url].filter((url): url is string => Boolean(url))} />;
  }
  const areaPlaces = attractions.filter((item) => item.area === attraction.area);
  const currentPosition = areaPlaces.indexOf(attraction);
  const related = [...areaPlaces.slice(currentPosition + 1), ...areaPlaces.slice(0, currentPosition)].slice(0, 4);
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
      <header className="site-nav scrolled travel-detail-nav">
        <Link href="/en" style={{ color: "#fff" }}>Ollantaytambo</Link>
        {attractionLocales(attraction.slug).length > 1 ? <DetailLanguageLinks path={`/explore/${attraction.slug}`} locale="en" available={attractionLocales(attraction.slug)} /> : <Link href="/en#nearby-attractions">Nearby attractions</Link>}
      </header>
      <TravelDetailHero title={attraction.name} label={area.en} subtitle={visit.tagline}
        map={map} mapLabel="Open in Google Maps" photo={photo && { path: photo.path, alt: attraction.name }}>
        <li>{rating ? <a href={rating.url}>{rating.score}/5 · {rating.reviews} Google reviews</a> : <a href={map}>Visitor ratings on Google Maps</a>}</li>
        <li><a href="#opening-hours">{openingSummary}</a></li>
      </TravelDetailHero>
      <article className="section explore-guide travel-detail-body">
        <nav aria-label="Breadcrumb" className="section-label"><Link href="/en#nearby-attractions">Nearby attractions</Link> / {area.en}</nav>
        {photo && <p className="travel-photo-credit"><a href={photo.source}>Photo source</a></p>}
        <section>
          <h2 className={heading}>Discover {attraction.name}</h2>
          <p className="about-text">{attraction.intro}</p>
          <h3>Visit tips</h3>
          <p className="about-text">{visit.advice}</p>
          {visitor && <p className="about-text">{visitor.timing}</p>}
          <h3>Highlights</h3>
          <p className="about-text">{attraction.details}</p>
        </section>
        <section>
          <h2 className={heading}>About {attraction.name}</h2>
          <p className="about-text">
            <strong>{management ? <a href={management.url}>{manager}</a> : manager}.</strong>{" "}
            {management?.details ?? operator.description}
          </p>
        </section>
        <section>
          <h2 className={heading}>Basic information</h2>
          <table className="explore-info">
            <tbody>
              <tr><th scope="row">Place</th><td>{attraction.name}</td></tr>
              <tr><th scope="row">Location</th><td>{attraction.place}, Perú</td></tr>
              <tr><th scope="row">Area</th><td>{area.en}</td></tr>
              {visitor && <tr><th scope="row">Type of attraction</th><td>{visitor.kind}</td></tr>}
              {visitor && <tr><th scope="row">Arrival point</th><td>{visitor.stop}</td></tr>}
              <tr><th scope="row">Management or heritage contact</th><td>{manager}</td></tr>
              <tr><th scope="row">Terrain</th><td>{visit.terrain}</td></tr>
              <tr><th scope="row">Suggested time</th><td>{visit.duration}</td></tr>
              {field && <tr><th scope="row">{field.label}</th><td>{field.value}</td></tr>}
              <tr><th scope="row">Opening information</th><td>{hours ? <a href={hours.source}>{hours.time}</a> : <a href="#opening-hours">{openingSummary}</a>}</td></tr>
              <tr><th scope="row">Admission</th><td>{admission ?? <a href="#admission">See admission arrangements</a>}</td></tr>
              <tr><th scope="row">Visitor ratings</th><td>{rating ? <a href={rating.url}>{rating.score}/5 · {rating.reviews} Google reviews</a> : <a href={map}>Check on Google Maps</a>}</td></tr>
              <tr><th scope="row">Visitor information</th><td><a href={attraction.source}>Check site access and current arrangements</a></td></tr>
            </tbody>
          </table>
        </section>
        <section id="opening-hours">
          <h2 className={heading}>Opening hours</h2>
          {hours && <p className="about-text"><a href={hours.source}>{hours.time}</a>. Check for temporary changes on the day of travel.</p>}
          <p className="about-text">{openingNote}</p>
        </section>
        <section id="admission">
          <h2 className={heading}>Ticket prices and admission</h2>
          {admission && <p className="about-text">{admission}</p>}
          {ticket ? (
            <p className="about-text">{ticket.text} <a href={ticket.source}>Museum ticket information</a></p>
          ) : pass ? (
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
              community: "Agree on the cost of hosted activities and any transport before booking.",
              outdoor: "Confirm separately any access fees, guide costs or activity charges.",
              municipal: "Check municipal prices and any separate equipment or locker charges.",
              museum: "Check venue admission and applicable rates before travelling.",
              church: "Check the venue’s current sightseeing admission and religious-circuit terms.",
            }[attraction.operator]}</p>
          )}
        </section>
        <section>
          <h2 className={heading}>Getting there</h2>
          <p className="about-text">{attraction.transport}</p>
          {visitor && <p className="about-text">{visitor.arrival}</p>}
        </section>
        <section>
          <h2 className={heading}>History, architecture and visitor experience</h2>
          <p className="about-text">{visit.history}</p>
          {visitor?.features.map(({ title, text }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p className="about-text">{text}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className={heading}>Suggested walking route</h2>
          {attraction.route && <p className="about-text">{attraction.route}</p>}
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
          {visitor && <p className="about-text">{visitor.photo}</p>}
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
          {visitor && <p className="about-text"><strong>Arrival point:</strong> {visitor.stop}</p>}
          <p className="about-text"><a href={map}>Find {attraction.name} on Google Maps</a></p>
        </section>
        <section>
          <h2 className={heading}>Frequently asked questions</h2>
          <h3>{attraction.question}</h3>
          <p className="about-text">{attraction.answer}</p>
          {visitor && <>
            <h3>{visitor.question}</h3>
            <p className="about-text">{visitor.answer}</p>
          </>}
        </section>
        <section>
          <h2 className={heading}>Sources</h2>
          <ul>
            <li><a href={attraction.source}>Visitor and heritage information</a></li>
            {visitor && <li><a href={visitor.source.url}>{visitor.source.label}</a></li>}
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
