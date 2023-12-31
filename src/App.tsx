import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar';
import theme from "./components/theme";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;