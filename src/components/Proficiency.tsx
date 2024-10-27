import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { palette } from "./palette";

const backgroundUrl = `${process.env.REACT_APP_EXTRAS_URL}/img/background-1.png`;

const MainText = ({ text }: { text: string }) => {
  return (
    <Typography variant="h5" color={palette.main}>
      {text}
    </Typography>
  );
};

const ColorText = ({ text }: { text: string }) => {
  return (
    <Typography variant="h5" color={palette.secondary}>
      {text}
    </Typography>
  );
};

const Proficiency = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: palette.dark,
      }}
    >
      <Typography
        variant="h2"
        color={palette.main}
        sx={{ textAlign: "center", paddingTop: "100px" }}
      >
        I am proficient at
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ paddingTop: "100px", paddingBottom: "200px" }}
      >
        <Grid item xs={8} />
        <Grid item xs={4}>
          <ColorText text="* Python" />
          <ColorText text="* Typescript / Javascript" />
          <ColorText text="* React" />
        </Grid>

        <Grid item xs={6} />
        <Grid item xs={6}>
          <MainText text="and" />
        </Grid>

        <Grid item xs={8} />
        <Grid item xs={4}>
          <MainText text="* C# .NET" />
          <MainText text="* Postgres" />
          <MainText text="* MongoDB" />
          <MainText text="* AWS" />
          <MainText text="* Pulumi" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Proficiency;
