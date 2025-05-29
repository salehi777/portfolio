import SmallTitle from '@/components/small-title';
import { StyledContent, StyledJob } from './styles';
import { Grid, Typography } from '@mui/material';
import { jobs } from './data';
import SvgColor from '@/components/svg-color';
import MotionUp from '@/components/motion-up';
import { useMediaQuery } from '@mui/material';
import Slider from '@/components/slider';

export default function HomeExperience({ loaded, isInView }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle title="سابقه کار" mb={{ xs: 1, sm: 2.5, md: 5 }} />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        {loaded &&
          (!isMobile ? (
            <Grid container spacing={{ sm: 2, md: 3.5 }}>
              {jobs.map((item) => (
                <Grid key={item.company} size={6}>
                  <Job {...item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Slider>
              {jobs.map((item) => (
                <div
                  key={item.company}
                  style={{ padding: '16px', height: '100%' }}
                >
                  <Job {...item} />
                </div>
              ))}
            </Slider>
          ))}
      </MotionUp>
    </StyledContent>
  );
}

const Job = ({ company, start_date, end_date, note, link }: any) => {
  return (
    <StyledJob>
      <div>
        <SvgColor src="/icons/building.svg" />
        <Typography variant="h6">{company}</Typography>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <SvgColor src="/icons/link.svg" />
          </a>
        )}
      </div>
      <div>
        <SvgColor src="/icons/calendar.svg" />
        <Typography>
          {start_date} - {end_date}
        </Typography>
      </div>
      <div>
        <SvgColor src="/icons/note.svg" />
        <Typography>{note}</Typography>
      </div>
    </StyledJob>
  );
};
