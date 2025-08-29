import { Link, Route, Routes } from "react-router-dom";

import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Agence from "./pages/Agence";

const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
