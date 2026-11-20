import generated from "./attraction-translations.json";
import { translatedDetails, type AttractionTranslation, type DetailLocale } from "./detail-locales";

type TranslationLocale = Exclude<DetailLocale, "en">;
type GeneratedCopy = Omit<AttractionTranslation, "route" | "faq" | "field"> & {
  route: string[];
  faq: string[];
  field?: string[];
};
const translations: Record<string, Partial<Record<TranslationLocale, GeneratedCopy>>> = generated;

export function getAttractionCopy(slug: string, locale: TranslationLocale): AttractionTranslation | undefined {
  const manual = translatedDetails[slug]?.[locale];
  if (manual) return manual;

  const copy = translations[slug]?.[locale];
  if (!copy) return undefined;

  const [start, stop, finish] = copy.route;
  const [question, answer] = copy.faq;
  const [label, value] = copy.field ?? [];
  if (!start || !stop || !finish || !question || !answer) {
    throw new Error(`Incomplete attraction translation: ${slug}/${locale}`);
  }
  return {
    ...copy,
    route: [start, stop, finish],
    faq: [question, answer],
    field: label && value ? [label, value] : undefined,
  };
}
