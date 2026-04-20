import {
  useState,
  useEffect,
  useCallback,
  type TouchEvent,
  type MouseEvent,
} from "react";

interface MobileProjectProps {
  project: {
    title: string;
    subTitle: string;
    desc: string;
    screenshots: string[];
    github: string;
    website: string;
    hash1: string;
    hash2: string;
    hash3: string;
    hash4: string;
  };
  /** Desktop: flip copy / device sides for visual rhythm */
  reverse?: boolean;
}

function MobileProject({ project, reverse = false }: MobileProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleStart = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMove = (e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentImageIndex(
          (prev) => (prev + 1) % project.screenshots.length
        );
      } else {
        setCurrentImageIndex(
          (prev) =>
            (prev - 1 + project.screenshots.length) %
            project.screenshots.length
        );
      }
      setIsDragging(false);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  }, [project.screenshots.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length
    );
  }, [project.screenshots.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  const techLine = [
    project.hash1,
    project.hash2,
    project.hash3,
    project.hash4,
  ]
    .filter(Boolean)
    .map((h) => h.replace(/^#/, "").trim())
    .join(" · ");

  return (
    <article
      className={`group/mobile relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/90 to-slate-100/80 shadow-sm ring-1 ring-slate-900/[0.03] transition duration-500 hover:shadow-xl dark:border-white/10 dark:from-[#0f141c] dark:via-[#0c1018] dark:to-[#0a0e14] dark:ring-white/[0.04] dark:hover:shadow-black/50 lg:min-h-[min(420px,100%)] lg:flex-row lg:items-stretch ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Copy column */}
      <div className="relative z-[1] flex flex-col justify-center border-b border-slate-200/60 p-6 sm:p-8 lg:w-[44%] lg:max-w-xl lg:border-b-0 lg:border-slate-200/40 dark:border-white/[0.06] dark:lg:border-white/[0.06]">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[0.65rem] font-medium tracking-wider text-sky-600 dark:text-sky-400">
            RN · MOBILE
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {project.subTitle}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-[1.65rem]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.desc}
        </p>

        <p className="mt-4 font-mono text-[0.7rem] leading-relaxed text-slate-500 dark:text-slate-500">
          {techLine}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.website !== "#coming-soon" ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-sky-300/90 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-sky-500/50 dark:hover:text-white"
            >
              <i className="fas fa-external-link-alt text-[0.65rem]" />
              Live
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/80 px-4 py-2 text-xs font-semibold text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-600">
              <i className="fas fa-lock text-[0.65rem]" />
              Coming soon
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            <i className="fab fa-github text-sm" />
            Code
          </a>
        </div>
      </div>

      {/* Device stage */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:px-10 lg:py-12">
        <div
          className={`relative z-[1] transition duration-500 ease-out will-change-transform group-hover/mobile:-translate-y-1 ${
            reverse ? "lg:rotate-[2deg]" : "lg:-rotate-[2deg]"
          }`}
        >
          <div className="rounded-[2.65rem] border border-slate-800/90 bg-gradient-to-b from-zinc-700 to-zinc-900 p-[3px] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.45)] dark:border-white/10 dark:from-zinc-600 dark:to-zinc-950 dark:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65)]">
            <div className="relative overflow-hidden rounded-[2.35rem] bg-black ring-1 ring-white/10">
              <div className="absolute left-1/2 top-2 z-10 h-5 w-[4.5rem] -translate-x-1/2 rounded-full bg-black/85 ring-1 ring-white/[0.08]" />

              <div className="relative aspect-[9/19.5] w-[min(15.5rem,72vw)] sm:w-60 lg:w-[13.75rem]">
                <img
                  className={`h-full w-full object-cover object-top transition duration-500 ${
                    isDragging ? "scale-[0.98]" : "scale-100"
                  }`}
                  src={project.screenshots[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  onTouchStart={handleStart}
                  onTouchMove={handleMove}
                  onTouchEnd={handleEnd}
                  onMouseDown={handleStart}
                  onMouseMove={handleMove}
                  onMouseUp={handleEnd}
                  onMouseLeave={handleEnd}
                  draggable={false}
                  style={{ cursor: "grab" }}
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />

                <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-1.5 pointer-events-none">
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover/mobile:opacity-100"
                  >
                    <i className="fas fa-chevron-left text-xs" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover/mobile:opacity-100"
                  >
                    <i className="fas fa-chevron-right text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center font-mono text-[0.6rem] tracking-wide text-slate-400 dark:text-slate-500">
            swipe or use arrows · auto-advance
          </p>
        </div>

        {/* Filmstrip — centered; scrolls when many shots */}
        <div className="relative z-[1] mt-5 w-full overflow-x-auto overscroll-x-contain">
          <div
            className="mx-auto flex w-max max-w-full justify-center gap-2 px-2 pb-1 pt-0.5"
            role="tablist"
            aria-label="Screenshots"
          >
            {project.screenshots.map((src, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentImageIndex}
                onClick={() => setCurrentImageIndex(i)}
                className={`relative h-16 w-10 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  i === currentImageIndex
                    ? "border-sky-500 ring-2 ring-sky-500/25 dark:border-sky-400 dark:ring-sky-400/20"
                    : "border-slate-200/90 opacity-80 hover:opacity-100 dark:border-white/10"
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover object-top"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default MobileProject;
