import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Homepage/Landing";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Projects from "./components/Pages/Projects";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Pages/Resume";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Show toast after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1000);

    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

        {/* Toast notification */}
        <div
          className={`fixed bottom-4 right-4 z-50 max-w-xs transition-all duration-300 transform ${
            showToast
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="bg-gray-800/90 backdrop-blur-md border border-indigo-500/20 rounded-lg shadow-lg p-4 text-white"
            id="toast-alert"
          >
            <div className="flex">
              <div className="flex-shrink-0 text-indigo-400">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
              </div>
              <div className="ml-3 pr-6">
                <h3 className="text-sm font-medium mb-1">What's New</h3>
                <p className="text-xs text-gray-300 mb-2">
                  Currently working on Revvlane, and crescent launch. Check out
                  our new upcoming{" "}
                  <a
                    href="https://shopcrescent.uk/password"
                    className="font-semibold text-indigo-400 underline hover:text-indigo-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    clothing launch
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowToast(false)}
                aria-label="Close"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed right-4 bottom-24 z-40 w-10 h-10 rounded-full bg-indigo-500 text-white shadow-lg flex items-center justify-center transform transition-all duration-300 hover:bg-indigo-600 hover:scale-110 ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      </Router>
    </>
  );
}

export default App;
