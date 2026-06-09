import { Box, type BoxProps } from '@mui/material'
import clsx from 'clsx'

interface SvgBoxProps extends BoxProps {
  src: string
  alt?: string
}

export default function SvgBox({
  src,
  component,
  sx,
  className,
  ...props
}: SvgBoxProps) {
  return (
    <Box
      component={component || 'span'}
      className={clsx('svg-box', className)}
      {...(component === 'img' ? { src } : {})}
      sx={{
        width: 20,
        height: 20,
        flexShrink: 0,
        display: 'inline-flex',
        ...(component !== 'img'
          ? {
              mask: `url(${src}) no-repeat center / contain`,
              WebkitMask: `url(${src}) no-repeat center / contain`,
              backgroundColor: 'currentColor',
            }
          : {}),
        ...sx,
      }}
      {...props}
    />
  )
}
