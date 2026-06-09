import { Dialog } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledDialog = styled(Dialog)(({ theme }) => ({
  '.MuiDialogTitle-root': {
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid',
    borderColor: theme.palette.divider,
    fontWeight: 500,
    fontSize: 20,
  },

  '.MuiDialogContent-root': {
    padding: '20px 20px !important',
    position: 'relative',
  },

  '.MuiDialogActions-root': {
    padding: '8px 20px',
  },
}))
