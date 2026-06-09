import { StyledList } from './styles'
import { useMemo } from 'react'
import { motion, type MotionProps } from 'motion/react'

interface ListCircleProps {
  list: ({
    label: string
    value: string | number
  } & MotionProps)[]
  activeValue: string | number
  size?: number
  degree?: [number, number]
  translate?: number
  clockwise?: boolean
}

export default function ListCircle({
  list,
  activeValue,
  size = 12,
  degree = [0, 90],
  translate = 60,
  clockwise = true,
}: ListCircleProps) {
  const deg = useMemo(
    () => (degree[1] - degree[0]) / (list.length - 1),
    [degree, list.length],
  )

  return (
    <StyledList data-clockwise={clockwise}>
      {list.map(({ label, value, ...props }, i) => (
        <div
          key={value}
          style={{
            transform: clockwise
              ? `rotate(${degree[0]}deg) translateX(${translate}px)`
              : `rotate(${degree[0]}deg) translate(${-translate}px)`,
          }}
        >
          <motion.div
            data-active={value === activeValue}
            style={{
              y: '-50%',
              transformOrigin: clockwise
                ? `${-translate}px center`
                : `calc(100% + ${translate}px) center`,
            }}
            animate={{ rotate: clockwise ? i * deg : -i * deg }}
            {...props}
          >
            <span style={{ width: size, height: size }} />
            <p>{label}</p>
          </motion.div>
        </div>
      ))}
    </StyledList>
  )
}
