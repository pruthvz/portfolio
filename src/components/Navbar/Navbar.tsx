import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const SCROLL_THRESHOLD = 28;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const syncScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => window.removeEventListener("scroll", syncScroll);
  }, [syncScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const desktopNavItem = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        to={path}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
          active
            ? "bg-sky-500/15 text-sky-800 ring-1 ring-sky-500/30 dark:bg-sky-400/15 dark:text-sky-100 dark:ring-sky-400/35"
            : "text-slate-600 hover:bg-sky-500/10 hover:text-sky-900 dark:text-slate-300 dark:hover:bg-sky-400/10 dark:hover:text-sky-100"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className={`border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${
          isScrolled
            ? "border-slate-200/90 bg-white/95 text-slate-900 shadow-[0_8px_32px_-14px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/[0.08] dark:!bg-[#070A10] dark:text-slate-100 dark:shadow-[0_16px_48px_-22px_rgba(0,0,0,0.85)] dark:backdrop-blur-xl"
            : "border-transparent bg-transparent text-inherit shadow-none backdrop-blur-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-300 sm:px-6 ${
            isScrolled ? "h-14" : "h-16"
          }`}
        >
          <Link
            to="/"
            className={`shrink-0 text-[0.95rem] font-semibold tracking-tight transition-colors hover:text-sky-700 dark:hover:text-sky-300 sm:text-base ${
              isScrolled
                ? "text-slate-900 dark:text-slate-100"
                : "text-slate-900 dark:text-white"
            }`}
          >
            Pruthvi Mohanlal
          </Link>

          <div
            className={`hidden items-center gap-1 rounded-full p-1 md:flex ${
              isScrolled
                ? "bg-white/75 ring-1 ring-slate-200/80 dark:bg-[#070A10] dark:ring-white/12"
                : "bg-white/35 ring-1 ring-slate-200/45 dark:bg-white/[0.03] dark:ring-white/[0.08]"
            }`}
          >
            {desktopNavItem("/", "Home")}
            {desktopNavItem("/about", "About")}
            {desktopNavItem("/projects", "Projects")}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-1.5 md:flex">
              <a
                href="https://github.com/pruthvz"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:border-white/25 dark:hover:text-white ${
                  isScrolled
                    ? "border-slate-200/90 bg-white/90 hover:border-slate-300 dark:border-white/10 dark:bg-[#070A10] dark:hover:bg-white/[0.06]"
                    : "border-slate-200/90 bg-white/80 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.05]"
                }`}
                aria-label="GitHub"
              >
                <i className="fab fa-github text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-9 w-9 items-center justify-center rounded-full border text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:border-white/25 dark:hover:text-white ${
                  isScrolled
                    ? "border-slate-200/90 bg-white/90 hover:border-slate-300 dark:border-white/10 dark:bg-[#070A10] dark:hover:bg-white/[0.06]"
                    : "border-slate-200/90 bg-white/80 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.05]"
                }`}
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm" />
              </a>
            </div>

            <a
              href="mailto:pruthvimohanlal10@gmail.com"
              className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Get in touch
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/[0.06] md:hidden"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-b transition-[max-height,opacity] duration-300 ease-out ${
          isMobileMenuOpen
            ? "max-h-[min(70vh,28rem)] border-slate-200/90 bg-white/95 opacity-100 backdrop-blur-xl dark:border-white/[0.08] dark:!bg-[#070A10]"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-5 py-4 sm:px-6">
          <Link
            to="/"
            className={`block rounded-xl px-3 py-3 text-sm font-medium ${
              isActive("/")
                ? "bg-sky-500/10 text-sky-800 dark:text-sky-200"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block rounded-xl px-3 py-3 text-sm font-medium ${
              isActive("/about")
                ? "bg-sky-500/10 text-sky-800 dark:text-sky-200"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`block rounded-xl px-3 py-3 text-sm font-medium ${
              isActive("/projects")
                ? "bg-sky-500/10 text-sky-800 dark:text-sky-200"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/[0.06]"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <div className="flex items-center justify-center gap-3 border-t border-slate-200/80 pt-4 dark:border-white/[0.08]">
            <a
              href="https://github.com/pruthvz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 text-slate-600 dark:border-white/10 dark:text-slate-400"
              aria-label="GitHub"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 text-slate-600 dark:border-white/10 dark:text-slate-400"
              aria-label="LinkedIn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="mailto:pruthvimohanlal10@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 text-slate-600 dark:border-white/10 dark:text-slate-400"
              aria-label="Email"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
          <a
            href="mailto:pruthvimohanlal10@gmail.com"
            className="mt-2 block w-full rounded-full bg-slate-900 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
