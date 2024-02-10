import { createTheme } from "@mui/material/styles";

const palette = {
  dark: "#2E282A",
  main: "#FFFFFF",
  secondary: "#0BBA5B",
};

const theme = createTheme({
  palette: {
    primary: {
      main: palette.main,
      light: palette.main,
      dark: palette.dark,
      contrastText: palette.main,
    },
    secondary: {
      main: palette.secondary,
      light: palette.main,
      dark: palette.dark,
      contrastText: palette.main,
    },
  },
  typography: {
    fontFamily: "monospace",
  },
});

export default theme;
