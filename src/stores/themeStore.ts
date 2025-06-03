import type { PaletteMode } from '@mui/material'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  mode: PaletteMode
  toggleMode: () => void
  direction: string
  setDirection: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      toggleMode: () =>
        set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
      direction: 'rtl',
      setDirection: (dir: string) => set({ direction: dir }),
    }),
    {
      name: 'theme-storage',
    }
  )
)
