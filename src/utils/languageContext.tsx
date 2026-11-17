import { useEffect, useState, type ReactNode } from "react";
import { translations, type Language } from "./translations";
import { LanguageContext } from "./useLanguage";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("site_lang") as Language;
      if (saved && (saved === "en" || saved === "fr" || saved === "ar")) {
        return saved;
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("site_lang", lang);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      const dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = language;
      if (language === "ar") {
        document.documentElement.classList.add("lang-ar");
      } else {
        document.documentElement.classList.remove("lang-ar");
      }
    }
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === "ar",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
