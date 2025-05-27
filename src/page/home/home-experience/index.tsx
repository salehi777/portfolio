import SmallTitle from '@/components/small-title';
import { StyledContent, StyledJob } from './styles';
import { Grid, Typography } from '@mui/material';
import { jobs } from './data';
import SvgColor from '@/components/svg-color';
import MotionUp from '@/components/motion-up';

export default function HomeExperience({ isInView }) {
  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle title="سابقه کار" />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        <Grid container columnSpacing={3} rowSpacing={4} mt={4}>
          {jobs.map(({ company, start_date, end_date, note, link }) => (
            <Grid key={company} size={6}>
              <StyledJob>
                <div>
                  <SvgColor src="/icons/building.svg" />
                  <Typography variant="h6">{company}</Typography>
                  {link && (
                    <a href={link} target="_blank">
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
            </Grid>
          ))}
        </Grid>
      </MotionUp>
    </StyledContent>
  );
}
