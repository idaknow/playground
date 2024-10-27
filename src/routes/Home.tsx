import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import CodeSource from "../components/CodeSource";
import Experience from "../components/Experience";
import MainIntroduction from "../components/MainIntroduction";
import Proficiency from "../components/Proficiency";
import { palette } from "../components/palette";

const logoUrl = `${process.env.REACT_APP_EXTRAS_URL}/img/logo-without-text.png`;

const Home = () => {
  return (
    <>
      <MainIntroduction />
      <Experience />
      <Proficiency />
      <CodeSource />
      <BottomNavigation
        showLabels
        sx={{
          backgroundColor: palette.dark,
          paddingBottom: "50px",
        }}
      >
        <BottomNavigationAction
          label="Ida De Smet"
          icon={
            <img
              src={logoUrl}
              alt=""
              style={{ height: "1.4rem", width: "1.4rem" }}
            />
          }
          sx={{ color: palette.secondary }}
          href="#"
        />
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedInIcon />}
          sx={{ color: palette.secondary }}
          href="https://www.linkedin.com/in/idakdesmet/"
        />
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHubIcon />}
          sx={{ color: palette.secondary }}
          href="https://github.com/idaknow"
        />
        <BottomNavigationAction
          label="North Vancouver"
          icon={<LocationOnIcon />}
          sx={{ color: palette.secondary }}
          disabled
        />
      </BottomNavigation>
    </>
  );
};

export default Home;
