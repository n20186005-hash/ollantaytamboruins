import Image from "next/image";
import type { ReactNode } from "react";

export function TravelDetailHero({
  title,
  label,
  subtitle,
  map,
  mapLabel,
  photo,
  children,
}: {
  title: string;
  label: string;
  subtitle?: string;
  map: string;
  mapLabel: string;
  photo?: { path: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <header className="hero travel-detail-hero">
      <div className={photo ? "hero-bg travel-detail-image" : "hero-bg"}>
        {photo && <Image src={photo.path} alt={photo.alt} fill sizes="100vw" loading="eager" />}
      </div>
      <div className="hero-texture" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-tagline">{label}</p>
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <a href={map} className="hero-cta">{mapLabel}</a>
        {children && <ul className="explore-hero-meta">{children}</ul>}
      </div>
    </header>
  );
}
