import type { PaletteMode } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'

export default function useSystemMode() {
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => setTrigger((prev) => !prev))
  }, [])

  const systemMode: PaletteMode = useMemo(
    () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    [trigger],
  )

  return systemMode
}
