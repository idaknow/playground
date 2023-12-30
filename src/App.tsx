import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar';
import Contact from "./routes/Contact";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;