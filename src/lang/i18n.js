import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import langEn from './lang.en';
import langFr from './lang.fr';
import myData from '../db.json';

const resources = {
  English: {
    translation: langEn,
  },
  Français: {
    translation: langFr,
  },
};
const { defaultLanguage } = myData.meta;

i18n.use(initReactI18next).init({
  resources: resources,
  lng: defaultLanguage,
  fallbackLng: {
    English: ['English'],
    default: ['Français'],
  },
  debug: true,
  defaultNS: 'translation',
  ns: 'translation',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
