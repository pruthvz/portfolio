import { useCallback, useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { HERO_RADAR_CHIPS } from "./landingTechData";

/** Subtle brand tint on stack icons (dark mode reads best). */
const CHIP_ICON_CLASS: Partial<Record<string, string>> = {
  React: "text-sky-500 dark:text-sky-400",
  TypeScript: "text-blue-500 dark:text-blue-400",
  Tailwind: "text-cyan-600 dark:text-cyan-400",
  Vite: "text-violet-500 dark:text-violet-400",
  Supabase: "text-emerald-500 dark:text-emerald-400",
  Claude: "text-orange-400 dark:text-orange-300",
  Cursor: "text-indigo-400 dark:text-indigo-300",
  Node: "text-green-600 dark:text-green-400",
  Python: "text-amber-500 dark:text-amber-400",
};

function HomepageHero() {
  const wrapRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.42 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reducedMotion || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPointer({
          x: Math.min(1, Math.max(0, x)),
          y: Math.min(1, Math.max(0, y)),
        });
      });
    },
    [reducedMotion]
  );

  const onPointerLeave = useCallback(() => {
    if (reducedMotion) return;
    setPointer({ x: 0.5, y: 0.42 });
  }, [reducedMotion]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const parallax = reducedMotion
    ? { x: 0, y: 0 }
    : { x: (pointer.x - 0.5) * 2, y: (pointer.y - 0.5) * 2 };

  const spotlightStyle = {
    ["--px" as string]: `${pointer.x * 100}%`,
    ["--py" as string]: `${pointer.y * 100}%`,
  } as React.CSSProperties;

  return (
    <header
      ref={wrapRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-interactive-root relative min-h-screen flex items-center overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#070a12] dark:text-slate-100"
      style={spotlightStyle}
    >
      {/* Base texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Cursor-linked glow */}
      <div
        className="hero-spotlight pointer-events-none absolute inset-0 opacity-100 dark:opacity-90"
        aria-hidden
      />

      {/* Floating orbs */}
      <div
        className="hero-blob pointer-events-none absolute -left-32 top-1/4 h-[min(80vw,28rem)] w-[min(80vw,28rem)] rounded-full bg-gradient-to-br from-slate-200/70 to-slate-300/40 blur-3xl dark:from-slate-700/35 dark:to-slate-800/25"
        style={{
          transform: `translate(${parallax.x * -36}px, ${parallax.y * -28}px)`,
          transition: reducedMotion ? undefined : "transform 0.6s ease-out",
        }}
      />
      <div
        className="hero-blob-delayed pointer-events-none absolute -right-24 bottom-1/4 h-[min(70vw,24rem)] w-[min(70vw,24rem)] rounded-full bg-gradient-to-bl from-slate-300/50 to-slate-200/35 blur-3xl dark:from-slate-600/25 dark:to-slate-800/20"
        style={{
          transform: `translate(${parallax.x * 42}px, ${parallax.y * 32}px)`,
          transition: reducedMotion ? undefined : "transform 0.65s ease-out",
        }}
      />
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-0">
        <div className="grid items-center gap-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          {/* Copy column */}
          <div className="max-w-xl lg:max-w-none">
            <div
              className="mb-8 inline-flex"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <span className="hero-glass-pill inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new projects
              </span>
            </div>

            <div className="mb-6" data-aos="fade-up" data-aos-delay="80">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Pruthvi Mohanlal
              </p>
              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.35rem] xl:text-6xl">
                <span className="block text-slate-900 dark:text-white">
                  Interfaces that feel{" "}
                  <span className="hero-gradient-text">instant</span>
                  <span className="text-slate-400 dark:text-slate-500">.</span>
                </span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 md:text-xl">
                <span className="font-light">Code. Coffee. Repeat.</span>{" "}
                <span className="text-slate-400 dark:text-slate-500">—</span>{" "}
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  frontend developer
                </span>{" "}
                shipping thoughtful UI, motion, and performance.
              </p>
            </div>

            <div
              className="mb-10 min-h-[2.5rem] text-lg text-slate-600 dark:text-slate-400 md:text-xl"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <span className="font-mono text-base text-slate-500 dark:text-slate-500">
                &gt;{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "React · TypeScript · Next.js",
                  2200,
                  "Design systems & component APIs",
                  2200,
                  "Accessible, responsive layouts",
                  2200,
                  "Animations that respect reduced motion",
                  2600,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="inline-block font-medium text-slate-800 dark:text-slate-200"
              />
              <span className="hero-caret ml-0.5 inline-block h-5 w-0.5 translate-y-0.5 bg-slate-500 align-middle dark:bg-slate-400" />
            </div>

            <div
              className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="hero-primary-btn group relative overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 font-medium text-white shadow-lg shadow-slate-900/15 transition hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:shadow-black/20"
              >
                <span className="relative z-10">Get in Touch</span>
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-500 group-hover:translate-x-full motion-reduce:translate-x-0 motion-reduce:opacity-0 dark:via-slate-900/15"
                  aria-hidden
                />
              </button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/90 bg-white/50 px-8 py-3.5 font-medium text-slate-800 backdrop-blur transition hover:border-slate-400 hover:bg-white/80 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-slate-500 dark:hover:bg-white/[0.08]"
              >
                View selected work
                <svg
                  className="ml-2 h-4 w-4 text-slate-600 dark:text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>

            <div
              className="flex gap-4"
              data-aos="fade-up"
              data-aos-delay="240"
            >
              <a
                href="https://github.com/pruthvz"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/80 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/80 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl" />
              </a>
            </div>
          </div>

          {/* Stack snapshot — calm grid instead of radar / fake editor */}
          <div
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <div
              className="hero-stack-panel relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_24px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl dark:border-white/[0.09] dark:bg-[#070b10] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_28px_70px_-32px_rgba(0,0,0,0.75)]"
              style={
                reducedMotion
                  ? undefined
                  : {
                      transform: `translate3d(${parallax.x * 12}px, ${parallax.y * 10}px, 0)`,
                      transition: "transform 0.4s ease-out",
                    }
              }
            >
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,rgba(248,250,252,0.97)_0%,rgba(255,255,255,0.98)_42%,rgba(241,245,249,0.92)_100%)] dark:bg-[linear-gradient(165deg,rgba(15,23,42,0.35)_0%,rgba(7,11,16,0.2)_45%,rgba(15,23,42,0.4)_100%)]"
                aria-hidden
              />
              <div
                className="hero-stack-sheen pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%]"
                aria-hidden
              />
              <div
                className={`relative p-6 sm:p-8 ${reducedMotion ? "" : "hero-stack-inner-drift"}`}
              >
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-xs font-medium tracking-wide text-sky-600 dark:text-sky-400">
                    /homepage
                  </p>
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-slate-700 dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-slate-200">
                    Current stack
                  </span>
                </div>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  What I reach for week to week—icons and labels, nothing spinning
                  behind them.
                </p>

                <ul
                  className="hero-stack-grid grid grid-cols-3 gap-2 sm:gap-2.5"
                  role="list"
                  aria-label="Technologies"
                >
                  {HERO_RADAR_CHIPS.map((chip) => (
                    <li key={chip.label}>
                      <div className="hero-stack-cell flex min-h-[4.5rem] flex-col items-center justify-center gap-1 rounded-2xl border border-slate-200/95 bg-slate-50/90 px-1.5 py-2.5 text-center shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md dark:border-white/[0.08] dark:bg-[#0c1118] dark:shadow-none dark:hover:border-white/[0.14] dark:hover:bg-[#111820] sm:min-h-[5rem]">
                        <i
                          className={`${chip.icon} text-base sm:text-lg ${CHIP_ICON_CLASS[chip.label] ?? "text-slate-600 dark:text-slate-400"}`}
                          aria-hidden
                        />
                        <span className="text-[0.65rem] font-medium leading-tight text-slate-800 dark:text-slate-100 sm:text-xs">
                          {chip.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="hero-stack-metrics mt-7 flex flex-col items-stretch gap-4 rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-5 dark:border-white/[0.08] dark:bg-[#090d14] sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:px-6">
                  <div className="text-center sm:px-8">
                    <div className="text-2xl font-semibold tabular-nums tracking-tight text-slate-900 dark:text-white">
                      5+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Years shipping UI
                    </div>
                  </div>
                  <div
                    className="hidden h-11 w-px shrink-0 bg-slate-200 dark:bg-white/12 sm:block"
                    aria-hidden
                  />
                  <div className="text-center sm:px-8">
                    <div className="text-2xl font-semibold tabular-nums tracking-tight text-slate-900 dark:text-white">
                      20+
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Projects &amp; experiments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-slate-500 transition hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200"
        >
          <span className="mb-2 text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-300/80 pt-2 dark:border-white/20">
            <div className="h-2 w-1 rounded-full bg-slate-500 motion-safe:animate-bounce dark:bg-slate-400 motion-reduce:animate-none" />
          </div>
        </a>
      </div>
    </header>
  );
}

export default HomepageHero;
