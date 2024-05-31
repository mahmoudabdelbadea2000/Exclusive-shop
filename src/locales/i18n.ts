import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN_LANG from "./en/translation.json";
import AR_LANG from "./ar/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { global: EN_LANG },
      ar: { global: AR_LANG },
    },
    // debug: true,
    fallbackLng: "en",
    detection: {
      order: [
        "localStorage",
        "htmlTag",
        "cookie",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage"],
    },
  });

export default i18n;
