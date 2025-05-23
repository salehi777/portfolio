import SmallTitle from "@/components/small-title";
import { StyledContent, StyledProject } from "./styles";
import { Grid, Typography } from "@mui/material";
import { projects } from "./data";
import MotionUp from "@/components/motion-up";
import Image from "next/image";

export default function HomeLinks({ isInView }) {
  return (
    <StyledContent>
      <MotionUp isActive={isInView}>
        <SmallTitle title="نمونه کار" />
      </MotionUp>

      <MotionUp isActive={isInView} t={{ delay: 0.1 }}>
        <Grid container columnSpacing={3} rowSpacing={4} mt={4}>
          {projects.map(({ title, link, image, note }) => (
            <Grid key={title} size={4}>
              <StyledProject href={link} target="_blank">
                <span style={{ backgroundImage: `url(${image})` }} />
                <div>
                  {note && (
                    <div>
                      <Typography>{note}</Typography>
                    </div>
                  )}
                </div>
              </StyledProject>
            </Grid>
          ))}
        </Grid>
      </MotionUp>
    </StyledContent>
  );
}
