import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CuboidProps } from '.';

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
    transform: `translateY(${-height / 2}px) translateX(${
      width / 2
    }px) translateZ(${length / 2}px)`,
    boxShadow: 'inset 0 0 0 1000px rgb(0 0 0 / 20%)',
  },
  '[data-left]': {
    width: length,
    height,
    transform: `translateY(${-height / 2}px) translateX(${
      length / 2 - width / 2
    }px) rotateY(-90deg)`,
    boxShadow: 'inset 0 0 0 1000px rgb(0 0 0 / 10%)',
  },
  '[data-top]': {
    width,
    height: length,
    transform: `translateY(${-length / 2 - height / 2}px) translateX(${
      width / 2
    }px) rotateX(90deg)`,
  },
}));
