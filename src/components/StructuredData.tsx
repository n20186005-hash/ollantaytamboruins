"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";

export function StructuredData() {
  const { t, locale } = useLang();

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "Ollantaytambo",
    "description": t.about.p1,
    "url": "https://ollantaytamboruins.com",
    "image": "https://ollantaytamboruins.com/gallery/1.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "26178"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -13.2589,
      "longitude": -72.2635
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ollantaytambo",
      "addressRegion": "Cusco",
      "addressCountry": "PE"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
