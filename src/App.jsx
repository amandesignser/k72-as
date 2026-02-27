import Home from "./pages/Home";
import Projects from "./pages/Work";
import Agence from "./pages/Agence";
import { Routes, Route } from "react-router-dom";
import Work from "./pages/Work";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  );
};

export default App;
