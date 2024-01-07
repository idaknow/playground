import Grid from "@mui/material/Grid";

import ExperienceAccordion from "../components/ExperienceAccordion";
import InlineIconText from "../components/InlineIconText";
import theme from "../components/theme";
import { experiences } from "../cvs/Experiences";
import { skillIcons, skills } from "../cvs/Skills";

import logo from "../img/logo.png";

const Home = () => {
  return (
    <Grid
      container
      spacing={2}
      style={{ backgroundColor: theme.palette.primary.dark, height: "auto" }}
    >
      <Grid item xs={6}>
        <img
          src={logo}
          alt="my cool logo"
          style={{ opacity: 0.5, width: "100%" }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        style={{ color: theme.palette.primary.light, marginBottom: "20px" }}
      >
        <h1>Skills</h1>
        {skills.map(({ icon, text }) => {
          const Icon = skillIcons[icon];
          return (
            <InlineIconText text={text}>
              <Icon />
            </InlineIconText>
          );
        })}

        <h1>Experience</h1>
        {experiences.map((experience) => (
          <ExperienceAccordion experience={experience} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
