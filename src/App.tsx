import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Homepage/Landing";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Projects from "./components/Pages/Projects";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
