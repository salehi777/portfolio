import { Tooltip, type TooltipProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  '.MuiTooltip-tooltip': {
    background: theme.palette.background.paper,
    color: 'inherit',
    padding: '12px',

    '>div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '>div': {
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'center',
      },
    },
  },

  '.MuiTooltip-arrow': {
    color: theme.palette.background.paper,
  },
}))
