import SmallTitle from '@/components/small-title'
import { StyledContent, StyledShapes, StyledSkill } from './styles'
import { Grid, useMediaQuery } from '@mui/material'
import Cuboid from '@/components/shapes/cuboid'
import { cuboids, skills } from './data'
import MotionUp from '@/components/motion-up'
import { motion } from 'motion/react'
import Slider from '@/components/slider'
import { useTranslation } from 'react-i18next'
import useHasRendered from '../useHasRendered'

export default function HomeSkills({ loaded, isInView }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const { t } = useTranslation()
  const { hasRendered } = useHasRendered(isInView)

  if (!hasRendered) return null

  return (
    <>
      <StyledShapes>
        <div data-shapes>
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
        </div>
      </StyledShapes>

      <StyledContent>
        <MotionUp isActive={isInView}>
          <SmallTitle
            title={t('home.skills.title')}
            mb={{ xs: 14, sm: 18, md: 3, lg: 6 }}
          />
        </MotionUp>

        <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
          {loaded &&
            (!isMobile ? (
              <Grid container spacing={{ md: 1, lg: 2.5 }}>
                {skills.map(({ title, percent }) => (
                  <Grid key={title}>
                    <Skill
                      title={title}
                      percent={percent}
                      isInView={isInView}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Slider
                perViews={[
                  { breakpoint: 'xs', perView: 2 },
                  { breakpoint: 'sm', perView: 4 },
                ]}
              >
                {skills.map(({ title, percent }) => (
                  <div key={title}>
                    <Skill
                      title={title}
                      percent={percent}
                      isInView={isInView}
                    />
                  </div>
                ))}
              </Slider>
            ))}
        </MotionUp>
      </StyledContent>
    </>
  )
}

const Skill = ({ title, percent, isInView }) => {
  return (
    <div style={{ padding: '5px', display: 'flex', justifyContent: 'center' }}>
      <StyledSkill>
        <svg viewBox="0 0 36 36" fill="none">
          <motion.path
            d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
            animate={
              isInView ? { strokeDasharray: ['0 100', `${percent} 100`] } : {}
            }
            transition={{ duration: 1 }}
          />
        </svg>

        <div>{title}</div>
        <motion.span
          animate={isInView ? { rotate: [0, (percent * 360) / 100] } : {}}
          transformTemplate={(_, generated) =>
            `translateY(-50%) translateX(50%) ${generated}`
          }
          transition={{ duration: 1 }}
        >
          {percent}%
        </motion.span>
      </StyledSkill>
    </div>
  )
}
