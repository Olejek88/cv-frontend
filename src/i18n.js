import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

const options = {
    order: ['cookie'],
    caches: ['cookie'],
    lookupQuerystring: 'lang',
    lookupCookie: 'i18next',
    cookieMinutes: 360000
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        detection: options,
        backend: {
            loadPath: '/assets/i18n/translations/{{lng}}.json'
        },
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        }
    });

export default i18n;
