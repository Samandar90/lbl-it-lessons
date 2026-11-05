import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
export type Lang = "ru" | "uz";
export type Text = Record<Lang, string>;
// Shared with the course site, which lives on the same origin.
const storageKey = "lbl-language";
function readLanguage(): Lang {
  try {
    const value =
      new URLSearchParams(window.location.search).get("lang") ??
      localStorage.getItem(storageKey);
    return value === "uz" ? "uz" : "ru";
  } catch {
    return "ru";
  }
}
const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
} | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readLanguage);
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(storageKey, lang);
    } catch {
      /* Switching still works through React state. */
    }
  }, [lang]);
  const value = useMemo(() => ({ lang, setLang }), [lang]);
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage needs LanguageProvider");
  const { lang, setLang } = context;
  return { lang, setLang, t: (text: Text) => text[lang] };
}
