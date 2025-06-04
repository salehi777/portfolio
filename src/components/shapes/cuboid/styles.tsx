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
  transform: `rotateX(-26deg) rotateY(${
    theme.direction === 'ltr' ? -45 : 45
  }deg)`,

  '>div': {
    position: 'absolute',
    background: color,
  },

  '[data-front]': {
    width,
    height,
    top: -height / 2,
    insetInlineStart: -width / 2,
    transform: `translateZ(${length / 2}px)`,
    boxShadow: theme.customShadows.overlay(20),
  },
  '[data-left]': {
    width: length,
    height,
    top: -height / 2,
    insetInlineStart: -length / 2,
    transform: `translate(${-width / 2}px, 0px) rotateY(-90deg)`,
    boxShadow: theme.customShadows.overlay(10),
  },
  '[data-right]': {
    width: length,
    height,
    top: -height / 2,
    insetInlineStart: -length / 2,
    transform: `translate(${width / 2}px, 0px) rotateY(90deg)`,
    boxShadow: theme.customShadows.overlay(10),
  },
  '[data-top]': {
    width,
    height: length,
    top: -length / 2,
    insetInlineStart: -width / 2,
    transform: `translate(0px, ${-height / 2}px) rotateX(90deg)`,
    boxShadow: theme.customShadows.overlay(),
  },
}))
