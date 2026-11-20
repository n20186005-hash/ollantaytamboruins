import Link from "next/link";
import { legalCopy, legalSlugs } from "@/i18n/legal";
import { translations, type Locale } from "@/i18n/translations";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const legal = legalCopy[locale].titles;
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <p className="footer-links-title">{t.footer.linksTitle}</p>
        <div className="footer-links-grid">
          {t.footer.links.map((link: { name: string; url: string }) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-legal" style={{ maxWidth: "1100px", margin: "0 auto", padding: "1rem 2rem 0", textAlign: "center" }}>
        {legalSlugs.map(slug => (
          <Link key={slug} href={`/${locale}/${slug}`} hrefLang={locale} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.8rem", marginInline: ".75rem" }}>
            {legal[slug]}
          </Link>
        ))}
      </div>
      <p className="footer-text" style={{ marginTop: "2rem", fontSize: "0.9rem", fontWeight: 600, color: "var(--color-gold)" }}>
        {t.footer.callToAction}
      </p>
      <p className="footer-text" style={{ marginTop: "1rem", whiteSpace: "pre-line" }}>{t.footer.text}</p>
    </footer>
  );
}
