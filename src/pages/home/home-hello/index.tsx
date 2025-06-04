import SmallTitle from '@/components/small-title'
import { StyledContent, StyledShapes } from './styles'
import { Typography } from '@mui/material'
import SvgColor from '@/components/svg-color'
import Cuboid from '@/components/shapes/cuboid'
import { cuboids, spheres } from './data'
import Sphere from '@/components/shapes/sphere'
import MotionUp from '@/components/motion-up'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

export default function HomeHello({ isInView }) {
  const { t } = useTranslation()

  return (
    <>
      <StyledShapes>
        <div data-shapes-1>
          <div />
          <div>
            <div />
          </div>
        </div>

        <div data-shapes-2>
          {cuboids.map(({ id, variants, ...cuboid }) => (
            <Cuboid
              key={id}
              data-id={id}
              {...(variants
                ? { variants, animate: isInView ? 'enter' : 'exit' }
                : {})}
              {...cuboid}
            />
          ))}
          {spheres.map(({ id, variants, ...sphere }) => (
            <Sphere
              key={id}
              data-id={id}
              {...(variants
                ? { variants, animate: isInView ? 'enter' : 'exit' }
                : {})}
              {...sphere}
            />
          ))}
        </div>
      </StyledShapes>

      <StyledContent>
        <MotionUp isActive={isInView}>
          <SmallTitle title={t('home.hello.title')} />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
          <Typography variant="h4" mt={2}>
            {t('home.hello.description')}
          </Typography>
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.2 }}>
          <div data-scroll>
            <div>
              <SvgColor src="/icons/arrows-down.svg" />
            </div>
            <span>{t('home.hello.scroll')}</span>
            <span>{t('home.hello.drag')}</span>
          </div>
        </MotionUp>
      </StyledContent>
    </>
  )
}
