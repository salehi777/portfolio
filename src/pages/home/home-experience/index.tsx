import SmallTitle from '@/components/small-title'
import { StyledContent, StyledJob } from './styles'
import { Grid, Typography } from '@mui/material'
import { jobs } from './data'
import SvgColor from '@/components/svg-color'
import MotionUp from '@/components/motion-up'
import { useMediaQuery } from '@mui/material'
import Slider from '@/components/slider'
import { useTranslation } from 'react-i18next'
import useHasRendered from '../useHasRendered'

export default function HomeExperience({ loaded, isInView }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { t } = useTranslation()
  const { hasRendered } = useHasRendered(isInView)

  if (!hasRendered) return null

  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle
          title={t('home.experience.title')}
          mb={{ xs: 1, sm: 2.5, md: 5 }}
        />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        {loaded &&
          (!isMobile ? (
            <Grid container spacing={{ sm: 2, md: 3.5 }}>
              {Object.entries(jobs).map(([company, info]) => (
                <Grid key={company} size={6}>
                  <Job company={company} info={info} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Slider>
              {Object.entries(jobs).map(([company, info]) => (
                <div key={company} style={{ padding: '16px', height: '100%' }}>
                  <Job company={company} info={info} />
                </div>
              ))}
            </Slider>
          ))}
      </MotionUp>
    </StyledContent>
  )
}

const Job = ({ company, info }: any) => {
  const { t } = useTranslation()
  return (
    <StyledJob>
      <div>
        <SvgColor src="/icons/building.svg" />
        <Typography variant="h6">{info.title}</Typography>
        {info.link && (
          <a href={info.link} target="_blank" rel="noopener noreferrer">
            <SvgColor src="/icons/link.svg" />
          </a>
        )}
      </div>
      <div>
        <SvgColor src="/icons/calendar.svg" />
        <Typography>
          {t('home.experience.jobs.' + company + '.start_date')} -{' '}
          {t('home.experience.jobs.' + company + '.end_date')}
        </Typography>
      </div>
      <div>
        <SvgColor src="/icons/note.svg" />
        <Typography>
          {t('home.experience.jobs.' + company + '.note')}
        </Typography>
      </div>
    </StyledJob>
  )
}
