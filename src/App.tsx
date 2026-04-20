import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Homepage/Landing";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Projects from "./components/Pages/Projects";
import Footer from "./components/Footer/Footer";

const PATHS_WITH_FOOTER = new Set(["/", "/about", "/projects"]);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const showFooter = PATHS_WITH_FOOTER.has(pathname);

  const [showToast, setShowToast] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter ? <Footer /> : null}

      <div
        className={`fixed bottom-[4.75rem] left-5 right-5 z-50 mx-auto max-w-sm transition-all duration-300 ease-out sm:left-auto sm:right-6 sm:mx-0 sm:max-w-[20rem] sm:bottom-[5.25rem] ${
          showToast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div
          className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 pr-10 text-slate-900 shadow-[0_12px_40px_-16px_rgba(15,23,42,0.2)] backdrop-blur-md dark:border-white/10 dark:!bg-[#070A10] dark:text-slate-100 dark:shadow-[0_16px_48px_-20px_rgba(0,0,0,0.65)]"
          id="toast-alert"
          role="status"
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-500/[0.12] dark:bg-sky-400/15"
            aria-hidden
          />
          <p className="font-mono text-[0.65rem] font-medium tracking-wide text-sky-600 dark:text-sky-400">
            /status
          </p>
          <h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            In progress
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
            Working on{" "}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              WeTogether
            </span>
            ,{" "}
            <a
              href="https://shopcrescent.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-800 underline decoration-slate-300 underline-offset-2 transition hover:text-sky-700 dark:text-slate-100 dark:decoration-white/30 dark:hover:text-sky-300"
            >
              Crescent
            </a>
            ,{" "}
            <Link
              to="/projects"
              className="font-medium text-slate-800 underline decoration-slate-300 underline-offset-2 transition hover:text-sky-700 dark:text-slate-100 dark:decoration-white/30 dark:hover:text-sky-300"
            >
              SheetGen
            </Link>
            , and{" "}
            <span className="font-medium text-slate-800 dark:text-slate-100">
              AI assistance
            </span>
            .
          </p>
          <button
            type="button"
            className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-50"
            onClick={() => setShowToast(false)}
            aria-label="Dismiss status"
          >
            <svg
              className="h-4 w-4"
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

      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 shadow-[0_8px_28px_-12px_rgba(15,23,42,0.2)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg dark:border-white/10 dark:bg-[#070A10] dark:text-slate-100 dark:shadow-[0_12px_36px_-16px_rgba(0,0,0,0.55)] dark:hover:border-white/20 dark:hover:bg-[#0a1018] sm:right-6 sm:bottom-6 ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19V5m0 0l-6 6m6-6 6 6"
          />
        </svg>
      </button>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
