import { useThemeStore } from '@/stores/themeStore'
import { StyledHeader } from './styles'

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
    <StyledHeader>
      <img src="/images/logo.png" width={60} height={60} alt="رزومه" />

      <button
        onClick={handleModeChange}
        style={{
          position: 'fixed',
          top: 16,
          left: 16,
          zIndex: 3000,
          viewTransitionName: 'fixed-header',
        }}
      >
        تغییر تم
      </button>
    </StyledHeader>
  )
}
