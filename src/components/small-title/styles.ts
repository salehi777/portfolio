import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledSmallTitle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  '>span': {
    height: 2,
    width: 40,
    marginInlineEnd: 14,
    display: 'block',
    background: theme.palette.primary.main,
  },
}))
