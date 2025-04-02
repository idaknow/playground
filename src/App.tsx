import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import theme from "./components/theme";
import Home from "./routes/Home";

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
