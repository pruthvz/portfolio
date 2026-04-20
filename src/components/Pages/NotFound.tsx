import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import ScrollReveal from "../Homepage/ScrollReveal";

function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 — Pruthvi Mohanlal";
  }, []);

  const pathLine = useMemo(() => {
    const p = location.pathname || "/";
    if (p.length > 48) return `${p.slice(0, 44)}…`;
    return p;
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-[#070a10] dark:text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] dark:opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
      />

      <main className="flex flex-1 flex-col items-center justify-center px-5 py-20 sm:px-6 sm:py-24">
        <div className="relative w-full max-w-lg text-center">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[52%] select-none font-bold tabular-nums leading-none text-slate-200/90 dark:text-white/[0.045]"
            style={{ fontSize: "clamp(7.5rem, 32vw, 13rem)" }}
            aria-hidden
          >
            404
          </div>

          <div className="relative z-10">
            <ScrollReveal>
              <p className="font-mono text-xs font-medium tracking-wide text-sky-600 dark:text-sky-400">
                /404
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Nothing lives at this URL.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-400">
                The page may have moved, or the link could be mistyped. Pick a
                destination below or head home.
              </p>
            </ScrollReveal>

            <ScrollReveal delayMs={90} className="mt-8">
              <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 text-left shadow-sm dark:border-white/10 dark:bg-[#0c1018]/95">
                <div className="flex items-center gap-2 border-b border-slate-200/80 px-4 py-2.5 dark:border-white/[0.08]">
                  <span className="h-2 w-2 rounded-full bg-red-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/90" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="ml-auto font-mono text-[0.65rem] text-slate-400 dark:text-slate-500">
                    route.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-[0.75rem] leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xs">
                  <span className="text-sky-600 dark:text-sky-400">GET</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400/90">
                    &quot;{pathLine}&quot;
                  </span>
                  <span className="text-slate-500 dark:text-slate-500"> → </span>
                  <span className="text-rose-600 dark:text-rose-400">404</span>
                </pre>
              </div>
            </ScrollReveal>

            <ScrollReveal delayMs={160} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                <i className="fas fa-home mr-2 text-xs opacity-80" aria-hidden />
                Home
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-white dark:border-white/15 dark:bg-white/[0.05] dark:text-white dark:hover:border-white/25 dark:hover:bg-white/[0.09]"
              >
                Projects
                <i
                  className="fas fa-arrow-right ml-2 text-xs opacity-70"
                  aria-hidden
                />
              </Link>
            </ScrollReveal>

            <ScrollReveal delayMs={220} className="mt-12 border-t border-slate-200/80 pt-8 dark:border-white/[0.08]">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Elsewhere
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                <Link
                  to="/about"
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
                >
                  About
                </Link>
                <a
                  href="mailto:pruthvimohanlal10@gmail.com"
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
                >
                  Email
                </a>
                <a
                  href="https://github.com/pruthvz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
