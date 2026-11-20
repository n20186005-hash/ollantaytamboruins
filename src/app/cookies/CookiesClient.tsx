"use client";

import { useSyncExternalStore, useState } from "react";
import type { DetailLocale } from "@/i18n/detail-locales";
import type { legalCopy } from "@/i18n/legal";

const storageKey = "ollantaytambo-cookie-preferences";
const defaults = "1010";
const changeEvent = "ollantaytambo-cookie-preferences-changed";

function storedPreferences() {
  try {
    const value = localStorage.getItem(storageKey);
    return value && /^1[01]{3}$/.test(value) ? value : defaults;
  } catch {
    return defaults;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export default function CookiesClient({ copy }: { copy: (typeof legalCopy)[DetailLocale]["cookies"] }) {
  const stored = useSyncExternalStore(subscribe, storedPreferences, () => defaults);
  const [draft, setDraft] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const selected = draft ?? stored;

  function save(value: string) {
    try {
      localStorage.setItem(storageKey, value);
      window.dispatchEvent(new Event(changeEvent));
      setDraft(null);
      setStatus(copy.saved);
    } catch {
      setStatus(copy.failed);
    }
  }

  return (
    <>
      <p className="about-text">{copy.intro}</p>
      {copy.categories.map(([name, description, provider], index) => (
        <section className="info-card legal-cookie-card" key={name}>
          <h2>{name}</h2>
          <p className="about-text">{description}</p>
          <p>{copy.provider} · {provider}</p>
          <label className="legal-cookie-toggle">
            <input type="checkbox" checked={selected[index] === "1"} disabled={index === 0} aria-label={name}
              onChange={e => {
                setDraft(selected.slice(0, index) + (e.target.checked ? "1" : "0") + selected.slice(index + 1));
                setStatus("");
              }} />
            {selected[index] === "1" ? copy.active : copy.inactive}
          </label>
        </section>
      ))}
      <section>
        <h2 className="section-title">{copy.title}</h2>
        <p className="about-text">{copy.notice}</p>
        <div className="legal-cookie-actions">
          <button type="button" className="highlight-item" onClick={() => save(selected)}>{copy.save}</button>
          <button type="button" className="highlight-item" onClick={() => save("1000")}>{copy.reject}</button>
        </div>
        <p role="status">{status}</p>
      </section>
    </>
  );
}
