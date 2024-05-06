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
        <div
          id="alert-1"
          className="flex justify-center p-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className="ms-3 text-sm font-medium">
            Currently working on Revvlane, and crescent launch. Check out our
            new upcoming{" "}
            <a
              href="https://shopcrescent.uk/password"
              className="font-semibold underline hover:no-underline"
            >
              clothing launch
            </a>
            .
          </div>
        </div>
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
