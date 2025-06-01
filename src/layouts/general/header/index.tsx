import { useThemeStore } from '@/stores/themeStore'
import { StyledLogo, StyledThemeButton } from './styles'
import { AnimatePresence, motion } from 'motion/react'
import SvgColor from '@/components/svg-color'

export default function Header() {
  const mode = useThemeStore((state) => state.mode)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  const handleModeChange = () => {
    if (!document.startViewTransition) {
      toggleTheme()
      return
    }
    document.startViewTransition(() => {
      toggleTheme()
    })
  }

  return (
    <>
      <StyledLogo>
        <img src="/images/logo.png" width={60} height={60} alt="رزومه" />
      </StyledLogo>

      <StyledThemeButton onClick={handleModeChange}>
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
    </>
  )
}
