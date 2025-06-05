import { useThemeStore } from '@/stores/themeStore'
import { StyledLangButton, StyledLogo, StyledThemeButton } from './styles'
import { AnimatePresence, motion } from 'motion/react'
import SvgColor from '@/components/svg-color'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { ClickAwayListener, type Direction } from '@mui/material'
import { languages } from '@/i18n'

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
  const direction = useThemeStore((state) => state.direction)
  const setDirection = useThemeStore((state) => state.setDirection)

  const onLangChange = (code: string, dir: string) => {
    i18n.changeLanguage(code)
    setShowLang(false)
  }

  useEffect(() => {
    const dir = languages.find(({ code }) => code === i18n.language)?.dir
    setDirection(dir)
    document.documentElement.lang = i18n.language
    document.documentElement.dir = dir
  }, [i18n.language])

  return (
    <>
      <StyledLogo>
        <img
          src="/images/logo.png"
          width={60}
          height={60}
          alt="رزومه"
          loading="lazy"
        />
      </StyledLogo>

      <StyledThemeButton onClick={onModeChange}>
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={mode}
            animate={{ rotate: [-180, 0], opacity: [0, 1] }}
            exit={{ rotate: [0, 180], opacity: [1, 0] }}
          >
            <SvgColor src={`/icons/${mode === 'light' ? 'sun' : 'moon'}.svg`} />
            {/* to make sure other icon loaded */}
            <SvgColor
              src={`/icons/${mode !== 'light' ? 'sun' : 'moon'}.svg`}
              sx={{ width: 0, height: 0 }}
            />
          </motion.span>
        </AnimatePresence>
      </StyledThemeButton>

      <ClickAwayListener onClickAway={() => setShowLang(false)}>
        <StyledLangButton>
          <span onClick={() => setShowLang(!showLang)}>
            <SvgColor src="/icons/globe.svg" />
          </span>
          <motion.div
            initial={false}
            style={{ y: '-50%' }}
            variants={{
              show: {
                x: direction === 'ltr' ? -40 : 40,
                opacity: 1,
                display: 'block',
              },
              hide: {
                x: direction === 'ltr' ? -24 : 24,
                opacity: 0,
                display: 'none',
              },
            }}
            animate={showLang ? 'show' : 'hide'}
          >
            {languages.map(({ code, title, dir }, i) => (
              <span
                key={code}
                onClick={() => onLangChange(code, dir)}
                data-active={i18n.language === code}
              >
                {title}
              </span>
            ))}
          </motion.div>
        </StyledLangButton>
      </ClickAwayListener>
    </>
  )
}
