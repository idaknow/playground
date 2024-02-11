import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import InlineIconText from "./InlineIconText";
import { palette } from "./palette";

export type ExperienceContentProps = {
  company: string;
  startYear: string;
  endYear: string;
  standouts: string[];
  children: ReactNode;
};

export const ExperienceContent = ({
  company,
  startYear,
  endYear,
  standouts,
  children,
}: ExperienceContentProps) => {
  return (
    <>
      <Grid item xs={6}>
        <div
          style={{
            border: `4px solid ${palette.secondary}`,
            borderRadius: "10px",
            margin: "20px",
          }}
        >
          <div style={{ margin: "20px" }}>
            <Grid container sx={{ marginBottom: "20px" }}>
              <Grid item xs={9}>
                <Typography variant="body1">
                  <InlineIconText text={`${company}`}>
                    {children}
                  </InlineIconText>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" color={palette.main}>
                  {startYear} - {endYear}
                </Typography>
              </Grid>
            </Grid>
            {standouts.map((standout) => (
              <Typography variant="body1" color={palette.main}>
                {standout}
              </Typography>
            ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={6} />
    </>
  );
};
