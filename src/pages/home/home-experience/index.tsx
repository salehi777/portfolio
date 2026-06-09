import SmallTitle from '@/components/ui/small-title'
import { StyledContent, StyledJob } from './styles'
import { Grid, Typography } from '@mui/material'
import { jobs } from './data'
import SvgBox from '@/components/ui/svg-box'
import MotionUp from '@/components/ui/motion-up'
import { useMediaQuery } from '@mui/material'
import Slider from '@/components/ui/slider'
import { useTranslation } from 'react-i18next'

interface HomeExperienceProps {
  isInView: boolean
}

export default function HomeExperience({ isInView }: HomeExperienceProps) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { t } = useTranslation()

  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle
          title={t('home.experience.title')}
          sx={{ mb: { xs: 1, sm: 2.5, md: 5 } }}
        />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        {!isMobile ? (
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
        )}
      </MotionUp>
    </StyledContent>
  )
}

const Job = ({ company, info }: any) => {
  const { t } = useTranslation()
  return (
    <StyledJob>
      <div>
        <SvgBox src="/icons/building.svg" />
        <Typography variant="h6">{info.title}</Typography>
        {info.link && (
          <a href={info.link} target="_blank" rel="noopener noreferrer">
            <SvgBox src="/icons/link.svg" />
          </a>
        )}
      </div>
      <div>
        <SvgBox src="/icons/calendar.svg" />
        <Typography>
          {t('home.experience.jobs.' + company + '.start_date')} -{' '}
          {t('home.experience.jobs.' + company + '.end_date')}
        </Typography>
      </div>
      <div>
        <SvgBox src="/icons/note.svg" />
        <Typography>
          {t('home.experience.jobs.' + company + '.note')}
        </Typography>
      </div>
    </StyledJob>
  )
}
