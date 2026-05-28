import { styled } from '@mui/material/styles'

export const StyledInput = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',

  label: {
    marginBottom: 4,
  },

  input: {
    height: 'unset',
    padding: '14px 14px',
  },
}))
