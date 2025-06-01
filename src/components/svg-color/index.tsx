import { StyledSvgColor } from './styles'

export default function SvgColor({ src, component, ...props }: any) {
  return (
    <StyledSvgColor
      component={component || 'span'}
      className="svg-color"
      style={{
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
      }}
      {...props}
    />
  )
}
