import RainbowIcon from "@mui/icons-material/Looks";
import RocketIcon from "@mui/icons-material/RocketLaunch";
import Grid from "@mui/material/Grid";

import background from "../img/background-2.png";
import ColorTypography from "./ColorTypography";
import { ExperienceContent, ExperienceContentProps } from "./ExperienceContent";
import { palette } from "./palette";

const iconStyle = {
  color: palette.secondary,
};

const Experience = () => {
  const coloredText = [
    {
      text: "I have over ",
    },
    {
      text: "4 years",
      color: palette.secondary,
    },
    {
      text: " experience",
    },
  ];

  const experiences: Omit<ExperienceContentProps, "children">[] = [
    {
      company: "Joyous",
      startYear: "2022",
      endYear: "2023",
      standouts: [
        "⭐️ Worked in crews of 4 people to develop new insights in the employee feedback product",
        "⭐️ Re-architected the sending and logging infrastructure to scale",
        "⭐️ Successfully deployed new integrations with third party applications, such as Microsoft Teams",
        "⭐️ Independently wrote the Business Continuity Plan",
      ],
    },
    {
      company: "Rocket Lab",
      startYear: "2018",
      endYear: "2022",
      standouts: [
        "🔥 Built a stable suite of products to process 1000+ engine hotfires",
        "🔥 Developed a general-purpose Python ETL Library used by over 5 teams across the business",
        "🔥 On-hand support for NASA's Mission to the Moon",
        "🔥 Reduced the time of post rocket launch data analysis from hours to minutes",
      ],
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0,
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: palette.dark,
      }}
    >
      <ColorTypography
        coloredText={coloredText}
        sx={{ textAlign: "center" }}
      ></ColorTypography>
      <Grid container sx={{ marginTop: "100px" }}>
        {experiences.map(({ company, startYear, endYear, standouts }) => (
          <ExperienceContent
            company={company}
            startYear={startYear}
            endYear={endYear}
            standouts={standouts}
          >
            {company === "Joyous" ? (
              <RainbowIcon sx={iconStyle} />
            ) : (
              <RocketIcon sx={iconStyle} />
            )}
          </ExperienceContent>
        ))}
      </Grid>
    </div>
  );
};

export default Experience;
