import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '@/locales/en.json';
import hiTranslations from '@/locales/hi.json';
import mrTranslations from '@/locales/mr.json';
import knTranslations from '@/locales/kn.json';

const resources = {
    en: { translation: enTranslations },
    hi: { translation: hiTranslations },
    mr: { translation: mrTranslations },
    kn: { translation: knTranslations },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
    });

export default i18n;