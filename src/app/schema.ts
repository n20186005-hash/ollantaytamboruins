export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "ollantaytamboruins.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Ollantaytambo"
    : locale === "zh"
    ? "奥扬泰坦博考古遗址"
    : locale === "qu"
    ? "Ollantaytambo"
    : "Ollantaytambo Archaeological Site";

  const description = locale === "es"
    ? "Ollantaytambo en el Valle Sagrado, Perú. Fortaleza inca con piedras megalíticas."
    : locale === "zh"
    ? "秘鲁库斯科圣谷的奥扬泰坦博考古遗址（Ollantaytambo），印加帝国军事防御工事和皇家庄园的杰出代表。"
    : locale === "qu"
    ? "Ollantaytambo, Valle Sagrado, Piruw. Inca fortress."
    : "Ollantaytambo Archaeological Site in the Sacred Valley, Peru. Magnificent Inca fortress with megalithic stones.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "HistoricalLandmark"],
        "name": name,
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/ollantaytambo-archeological-site (1).jpg`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ollantaytambo",
          "addressCountry": "PE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -13.2589799,
          "longitude": -72.2681412
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "07:00",
          "closes": "17:00"
        },
        "priceRange": "$$",
        "isAccessibleForFree": false,
        "telephone": "+51969009906",
        "sameAs": [
          "https://maps.app.goo.gl/kt9zoMAY7M3ShhEC8"
        ]
      },
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-PE" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-PE" : "en-US",
        "isAccessibleForFree": true
      }
    ]
  };
}
