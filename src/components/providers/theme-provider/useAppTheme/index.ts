import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react'
import useSystemMode from '../useSystemMode'
import mixins from './mixins'
import components from './components'
import palette from './palette'
import typography from './typography'
import useSettingsStore from '@/stores/useSettingsStore'

export default function useAppTheme() {
  const direction = useSettingsStore((s) => s.direction)
  const storeMode = useSettingsStore((s) => s.mode)
  const systemMode = useSystemMode()

  const mode = useMemo(
    () => (storeMode !== 'system' ? storeMode : systemMode),
    [storeMode, systemMode],
  )

  const theme = useMemo(
    () =>
      createTheme({
        direction,
        mixins,
        components,
        typography,
        palette: palette(mode),
        shape: { borderRadius: 8 },
        customShadows: {
          common:
            mode === 'light'
              ? '#b5b5b5 0px 3px 8px'
              : '#434343 0px 3px 15px -3px',
          overlay: (init) =>
            mode === 'light'
              ? init
                ? `inset 0 0 0 1000px rgb(0 0 0 / ${init}%)`
                : 'none'
              : init
                ? `inset 0 0 0 1000px rgb(0 0 0 / ${init + 10}%)`
                : `inset 0 0 0 1000px rgb(0 0 0 / 10%)`,
        },
      }),
    [direction, mode],
  )

  return theme
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      common: string
      overlay: (init?: number) => string
    }
  }
  interface ThemeOptions {
    customShadows: {
      common: string
      overlay: (init?: number) => string
    }
  }
}
