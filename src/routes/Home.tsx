import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import theme from "../components/theme";
import logo from "../img/logo.png";

const stackBlitzUrl =
  "https://stackblitz.com/github/idaknow/playground?title=Idas playground&view=editor";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.dark,
        height: "auto",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} key="logo" id="logo">
          <img
            id="ida-logo"
            key="ida-logo"
            src={logo}
            alt="my cool logo"
            style={{ opacity: 0.5, width: "100%" }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          style={{ color: theme.palette.primary.light, marginBottom: "20px" }}
          key="ida-cv"
          id="ida-cv"
        >
          <Typography variant="h1">Skills</Typography>

          <Typography variant="h1">Experience</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        style={{
          color: theme.palette.primary.light,
        }}
      >
        <Grid item xs={12} style={{ margin: "80px" }}>
          <Typography variant="h1">
            ✨View the code powering this website✨
          </Typography>
          <iframe
            src={stackBlitzUrl}
            title="StackBlitz this website"
            style={{
              height: "auto",
              width: "95%",
              minHeight: "500px",
              marginBottom: "100px",
            }}
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
