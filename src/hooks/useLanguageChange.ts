import { languages } from '@/i18n'
import useSettingsStore from '@/stores/useSettingsStore'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function useLanguageChange() {
  const { i18n } = useTranslation()
  const setDirection = useSettingsStore((state) => state.setDirection)

  const onLanguageChange = (code: string) => i18n.changeLanguage(code)

  useEffect(() => {
    const dir = languages.find(({ code }) => code === i18n.language)!.dir
    setDirection(dir)
    document.documentElement.lang = i18n.language
    document.documentElement.dir = dir
  }, [i18n.language])

  return onLanguageChange
}
