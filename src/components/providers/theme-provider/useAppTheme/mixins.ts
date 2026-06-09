import type { CSSObject, MixinsOptions } from '@mui/material/styles'
import { gray } from './colors'

const mixins: MixinsOptions = {
  scrollbar: {
    overflow: 'auto',
    '&::-webkit-scrollbar': { width: 7, height: 7 },
    '&::-webkit-scrollbar-track': { borderRadius: 10 },
    '&::-webkit-scrollbar-thumb': { background: gray[400], borderRadius: 10 },
    '&::-webkit-scrollbar-thumb:hover': { background: gray[500] },
  },
}

export default mixins

declare module '@mui/material/styles' {
  interface Mixins {
    scrollbar: CSSObject
  }
}
