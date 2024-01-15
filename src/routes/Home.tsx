import Grid from "@mui/material/Grid";

import ExperienceAccordion from "../components/ExperienceAccordion";
import InlineIconText from "../components/InlineIconText";
import theme from "../components/theme";
import { experiences } from "../cvs/Experiences";
import { skillIcons, skills } from "../cvs/Skills";

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
          <h1>Skills</h1>
          {skills.map(({ icon, text, id }) => {
            const Icon = skillIcons[icon];
            return (
              <InlineIconText text={text} key={id}>
                <Icon />
              </InlineIconText>
            );
          })}

          <h1>Experience</h1>
          {experiences.map((experience) => (
            <ExperienceAccordion
              experience={experience}
              key={experience.company.replace(" ", "-")}
            />
          ))}

          <h1>Education</h1>
          <p>TODO</p>
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
          <h1>✨View the code powering this website✨</h1>
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
