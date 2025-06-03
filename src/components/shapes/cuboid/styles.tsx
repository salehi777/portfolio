import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import type { CuboidProps } from '.'

export const StyledCuboid = styled(
  ({ width, height, length, color, ...props }: CuboidProps) => (
    <Box {...props} />
  )
)(({ theme, width, height, length, color }) => ({
  position: 'absolute',
  transformStyle: 'preserve-3d',
  transform: 'rotateX(-26deg) rotateY(45deg)',

  '>div': {
    position: 'absolute',
    background: color,
  },

  '[data-front]': {
    width,
    height,
    transform: `translate(${width / 2}px, ${-height / 2}px) translateZ(${length / 2}px)`,
    boxShadow: theme.customShadows.overlay(20),
  },
  '[data-left]': {
    width: length,
    height,
    transform: `translate(${length / 2 - width / 2}px, ${-height / 2}px) rotateY(-90deg)`,
    boxShadow: theme.customShadows.overlay(10),
  },
  '[data-top]': {
    width,
    height: length,
    transform: `translate(${width / 2}px, ${-length / 2 - height / 2}px) rotateX(90deg)`,
    boxShadow: theme.customShadows.overlay(),
  },
}))
