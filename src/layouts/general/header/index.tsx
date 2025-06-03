import { useThemeStore } from '@/stores/themeStore'
import { StyledLangButton, StyledLogo, StyledThemeButton } from './styles'
import { AnimatePresence, motion } from 'motion/react'
import SvgColor from '@/components/svg-color'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ClickAwayListener } from '@mui/material'

export default function Header() {
  // theme
  const mode = useThemeStore((state) => state.mode)
  const toggleMode = useThemeStore((state) => state.toggleMode)

  const onModeChange = () => {
    if (!document.startViewTransition) {
      toggleMode()
      return
    }
    document.startViewTransition(() => {
      toggleMode()
    })
  }

  // lang
  const { i18n } = useTranslation()
  const [showLang, setShowLang] = useState(false)
  const setDirection = useThemeStore((state) => state.setDirection)

  const onLangChange = (code: string, dir: string) => {
    i18n.changeLanguage(code)
    setShowLang(false)
    document.documentElement.lang = code
    document.documentElement.dir = dir
    setDirection(dir)
  }

  return (
    <>
      <StyledLogo>
        <img src="/images/logo.png" width={60} height={60} alt="رزومه" />
      </StyledLogo>

      <StyledThemeButton onClick={onModeChange}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={mode}
            animate={{ rotate: [-180, 0], opacity: [0, 1] }}
            exit={{ rotate: [0, 180], opacity: [1, 0] }}
          >
            <SvgColor src={`/icons/${mode === 'light' ? 'sun' : 'moon'}.svg`} />
          </motion.span>
        </AnimatePresence>
      </StyledThemeButton>

      <ClickAwayListener onClickAway={() => setShowLang(false)}>
        <StyledLangButton>
          <div onClick={() => setShowLang(!showLang)}>
            <SvgColor src="/icons/globe.svg" />
          </div>
          {[
            { code: 'fa', title: 'Fa', dir: 'rtl' },
            { code: 'en', title: 'En', dir: 'ltr' },
          ].map(({ code, title, dir }, i) => (
            <motion.span
              key={code}
              onClick={() => onLangChange(code, dir)}
              transformTemplate={({ x }) =>
                `rotate(${i * 50 - 25}deg) translateX(${x}) translateY(-6px)`
              }
              style={{ x: 12, opacity: 0, display: 'none' }}
              transition={{ type: 'spring', delay: i * 0.1, duration: 0.4 }}
              animate={
                showLang
                  ? { x: 36, opacity: 1, display: 'block' }
                  : { x: 12, opacity: 0, display: 'none' }
              }
              data-active={i18n.language === code}
            >
              {title}
            </motion.span>
          ))}
        </StyledLangButton>
      </ClickAwayListener>
    </>
  )
}
