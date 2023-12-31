import { createTheme } from '@mui/material/styles';

const palette = {
    dark: "#30362F",
    main: "#F3EAF4",
    secondary: "#E5CEDC",
    white: "#EADDE1",
    contrast: "#BCA3AC"
}

const theme = createTheme({
  palette: {
    primary: {
      main: palette.main,
      light: palette.white,
      dark: palette.dark,
      contrastText: palette.white
    },
    secondary: {
        main: palette.contrast,
        light: palette.white,
        dark: palette.dark,
        contrastText: palette.white
    },
  },
});

export default theme;