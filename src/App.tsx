import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import "@mui/styles";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import theme from "./components/theme";
import Home from "./routes/Home";
declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default App;
