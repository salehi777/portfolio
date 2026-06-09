import type { Direction, PaletteMode } from '@mui/material'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type SettingsMode = PaletteMode | 'system'

interface SettingsState {
  mode: SettingsMode
  setMode: (mode: SettingsMode, e?: React.MouseEvent) => void
  direction: Direction
  setDirection: (direction: Direction) => void
}

const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        mode: 'system',
        setMode: (mode, e) => changeThemeWithTransition(() => set({ mode }), e),

        direction: 'ltr',
        setDirection: (direction) => set({ direction }),
      }),
      { name: 'settings-store' },
    ),
    { name: 'settings-store' },
  ),
)

export default useSettingsStore

const changeThemeWithTransition = (fn: () => void, e?: React.MouseEvent) => {
  if (!document.startViewTransition) {
    fn()
    return
  }

  let [x, y] = [innerWidth, 0]
  if (e) [x, y] = [e.clientX, e.clientY]

  const r =
    Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) * 1.15

  document.documentElement.style.setProperty('--switch-x', `${x}px`)
  document.documentElement.style.setProperty('--switch-y', `${y + scrollY}px`)
  document.documentElement.style.setProperty('--switch-r', `${r}px`)

  document.startViewTransition(() => fn())
}
