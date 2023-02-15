import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEn from "@assets/locales/en/translation.json";
import translationUa from "@assets/locales/ua/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ua: {
    translation: translationUa,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      "ua-UA": ["ua"],
      default: ["en"],
    },
    detection: {
      order: ["localStorage"],
      cache: ["localStorage"],
    },
    resources,
  });

export default i18n;
