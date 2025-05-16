// src/i18n/i18n.ts
import { useSelector } from "react-redux";
import en from "./langs/en";
import fa from "./langs/fa";
import type { RootState } from "../stores";

export const resources = {
  en,
  fa,
};

type Locale = keyof typeof resources;
type TranslationKeys = keyof typeof en;

function t(
  locale: Locale,
  key: TranslationKeys,
  vars?: Record<string, string>
) {
  let text = resources[locale][key];
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(`{{${k}}}`, v);
    });
  }
  return text;
}
export const useTranslation = () => {
  const localization = useSelector((state: RootState) => state.locale.localization);
  return { t: (word: TranslationKeys) => t(localization, word) };
};
