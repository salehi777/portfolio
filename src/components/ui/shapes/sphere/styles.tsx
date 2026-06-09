import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { SphereProps } from '.'

export const StyledSphere = styled(
  ({ radius, color, ...props }: SphereProps) => <Box {...props} />
)(({ theme, radius, color }) => ({
  position: 'absolute',
  width: radius,
  height: radius,
  borderRadius: '50%',
  background: color,
  boxShadow: `inset -${radius / 20}px -${radius / 15}px ${radius / 10}px ${
    radius / 50
  }px rgba(0,0,0,.2)${
    theme.palette.mode === 'dark' ? ',' + theme.customShadows.overlay() : ''
  }`,
}))
