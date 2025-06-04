import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import type { Direction } from '@mui/material'

import en from './locales/en.json'
import fa from './locales/fa.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
      convertDetectedLanguage: (lng) => lng.split('-')[0],
    },
    resources: {
      en: { translation: en },
      fa: { translation: fa },
    },
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false,
    },
  })

export const languages: { code: string; title: string; dir: Direction }[] = [
  { code: 'fa', title: 'Fa', dir: 'rtl' },
  { code: 'en', title: 'En', dir: 'ltr' },
]
