import { Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
] as const;

function Footer() {
  const year = new Date().getFullYear();

  const iconBtn =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white";

  return (
    <footer className="border-t border-slate-200/80 bg-white/90 backdrop-blur-sm dark:border-white/[0.06] dark:bg-[#060910]/95">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 md:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <p className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
              Pruthvi Mohanlal
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Frontend-focused developer building responsive, accessible interfaces
              and thoughtful product UI.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium"
            aria-label="Footer"
          >
            {nav.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 lg:shrink-0">
            <a
              href="https://github.com/pruthvz"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
              aria-label="GitHub"
            >
              <i className="fab fa-github text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconBtn}
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-sm" />
            </a>
            <a
              href="mailto:pruthvimohanlal10@gmail.com"
              className={iconBtn}
              aria-label="Email"
            >
              <i className="fas fa-envelope text-sm" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-8 text-xs text-slate-500 dark:border-white/10 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Pruthvi Mohanlal. All rights reserved.</p>
          <p className="text-slate-500 dark:text-slate-500">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
