import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar';
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;