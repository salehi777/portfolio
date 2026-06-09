import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledInput = styled(TextField)(({ theme }) => ({
  '.MuiInputBase-root': {
    '&.MuiInputBase-adornedEnd': {
      paddingRight: 'unset',
      paddingInlineEnd: 9,
    },
    '&.MuiInputBase-multiline': { padding: 0 },
    '.MuiInputBase-input': { padding: '14px 14px' },
    'input.MuiInputBase-input': { height: 'unset' },
    'textarea.MuiInputBase-input': { ...theme.mixins.scrollbar },
  },
}))
