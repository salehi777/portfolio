import type { Direction, PaletteMode } from '@mui/material'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  mode: PaletteMode
  toggleMode: () => void
  direction: Direction
  setDirection: (dir: Direction) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: 'light',
      toggleMode: () =>
        set((state) => ({ mode: state.mode === 'light' ? 'dark' : 'light' })),
      direction: 'rtl',
      setDirection: (dir: Direction) => set({ direction: dir }),
    }),
    {
      name: 'theme-storage',
    }
  )
)
