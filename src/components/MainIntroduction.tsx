import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Grid from "@mui/material/Grid";
import { animated, useSpring } from "@react-spring/web";

import { palette } from "../components/palette";
// import background from "../img/background-1.png";
import { TypewriterColorTypography } from "./ColorTypography";

const MainIntroduction = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000, tension: 220, friction: 110 },
  });

  const header = [
    {
      text: "Hello, my name is",
    },
    {
      text: "Ida",
      color: palette.secondary,
    },
    {
      text: "and I am a",
    },
    {
      text: "Full Stack Engineer",
      color: palette.secondary,
    },
  ];

  return (
    <div
      style={{
        height: "800px",
        backgroundRepeat: "no-repeat",
        backgroundColor: palette.dark,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <animated.div
            style={{
              width: 80,
              height: 80,
              borderRadius: 8,
              marginLeft: "100px",
              marginTop: "200px",
              ...springs,
            }}
          >
            <AutoAwesomeIcon sx={{ color: palette.secondary }} />
          </animated.div>
        </Grid>
        <Grid item xs={8} sx={{ marginTop: "100px" }}>
          <TypewriterColorTypography
            coloredText={header}
            addEnterAfterEach={true}
          />
          <animated.div
            style={{
              width: 80,
              height: 80,
              borderRadius: 8,
              marginLeft: "500px",
              marginTop: "200px",
              ...springs,
            }}
          >
            <AutoAwesomeIcon sx={{ color: palette.secondary }} />
          </animated.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainIntroduction;
