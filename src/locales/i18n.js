import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { deutsch } from '@locales/de'
import { english } from '@locales/en'
import { french } from '@locales/fr'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: english
            },
            de: {
                translation: deutsch
            },
            fr: {
                translation: french
            }
        }
    });
 
    i18n.changeLanguage("fr");