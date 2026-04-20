import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, type ReactNode } from "react";
import Project from "../Projects";
import MobileProject from "../MobileProject";
import ScrollReveal from "../Homepage/ScrollReveal";

type ProjectEntry = (typeof Project.myProjects)[number] & {
  screenshots?: string[];
};

const FILTERS = ["All", "Web", "Mobile"] as const;
type Filter = (typeof FILTERS)[number];

function canOpenUrl(href: string) {
  return /^https?:\/\//i.test(href.trim());
}

function stackTags(project: ProjectEntry) {
  const raw = [project.hash1, project.hash2, project.hash3, project.hash4].filter(
    Boolean
  ) as string[];
  return raw.map((t) => t.replace(/^#/, "").trim()).filter(Boolean);
}

function ProjectCardImage({
  project,
  className = "",
}: {
  project: ProjectEntry;
  className?: string;
}) {
  const images =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.img];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      5000
    );
    return () => window.clearInterval(id);
  }, [images.length]);

  const showNav = images.length > 1;

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900 ${className}`}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        src={images[index]}
        alt={`${project.imgAlt} — view ${index + 1} of ${images.length}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-black/50" />
      {showNav && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i - 1 + images.length) % images.length);
            }}
            className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/95 text-slate-800 shadow-md opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <i className="fas fa-chevron-left text-xs" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.preventDefault();
              setIndex((i) => (i + 1) % images.length);
            }}
            className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/95 text-slate-800 shadow-md opacity-0 transition-opacity hover:bg-white group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900/95 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            <i className="fas fa-chevron-right text-xs" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show screenshot ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const ok = canOpenUrl(href);
  if (!ok) {
    return (
      <span
        title="Not linked"
        className="inline-flex h-9 w-9 cursor-not-allowed items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-600"
        aria-label={`${label} (unavailable)`}
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-500 transition hover:border-sky-300/80 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400 dark:hover:border-sky-500/40 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function WebProjectCard({
  project,
  index,
  featured,
}: {
  project: ProjectEntry;
  index: number;
  featured: boolean;
}) {
  const tags = stackTags(project);
  const idx = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <article className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm ring-1 ring-slate-900/[0.02] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-white/10 dark:bg-[#0c1018] dark:ring-white/[0.04] dark:hover:shadow-black/50 lg:flex-row">
        <span
          className="pointer-events-none absolute left-4 top-4 z-[1] font-mono text-[0.65rem] font-medium tabular-nums text-slate-400 dark:text-slate-500"
          aria-hidden
        >
          {idx}
        </span>
        <div className="relative min-h-[200px] w-full lg:w-[58%] lg:min-h-0 lg:self-stretch">
          <ProjectCardImage
            project={project}
            className="aspect-[16/10] min-h-[200px] lg:absolute lg:inset-0 lg:aspect-auto lg:min-h-full"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-6 sm:p-8 lg:max-w-xl lg:py-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
              {project.subTitle}
            </span>
            <div className="ml-auto flex gap-1.5">
              <IconLink href={project.website} label="Live site">
                <i className="fas fa-external-link-alt text-xs" />
              </IconLink>
              <IconLink href={project.github} label="Source on GitHub">
                <i className="fab fa-github text-sm" />
              </IconLink>
            </div>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.desc}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-1 font-mono text-[0.65rem] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm ring-1 ring-slate-900/[0.02] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0c1018] dark:ring-white/[0.04] dark:hover:shadow-xl dark:hover:shadow-black/40">
      <span
        className="pointer-events-none absolute left-3 top-3 z-[1] font-mono text-[0.6rem] font-medium tabular-nums text-slate-400 dark:text-slate-500"
        aria-hidden
      >
        {idx}
      </span>
      <ProjectCardImage project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <span className="line-clamp-2 rounded-full border border-slate-200/90 bg-slate-50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
            {project.subTitle}
          </span>
          <div className="flex shrink-0 gap-1.5">
            <IconLink href={project.website} label="Live site">
              <i className="fas fa-external-link-alt text-xs" />
            </IconLink>
            <IconLink href={project.github} label="Source on GitHub">
              <i className="fab fa-github text-sm" />
            </IconLink>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.desc}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-1 font-mono text-[0.65rem] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  useEffect(() => {
    document.title = "Pruthvi Mohanlal - Projects";
  }, []);

  const webProjects = useMemo(() => Project.myProjects, []);

  const showMobile = activeFilter === "All" || activeFilter === "Mobile";
  const showWeb = activeFilter === "All" || activeFilter === "Web";

  const totalCount = Project.myProjects.length + Project.mobileProjects.length;

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-[#070a10] dark:text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.4] dark:opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Hero */}
      <section className="border-b border-slate-200/80 pt-28 pb-16 dark:border-white/[0.06] md:pt-32 md:pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium tracking-wide text-sky-600 dark:text-sky-400">
                /projects
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
                Interfaces, products, and experiments.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
                A living archive of what I have shipped—from client sites and
                e‑commerce to mobile apps, internal tools, and learning builds.
                Each card links out when a demo or repo is public.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                <span className="rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="text-slate-400 dark:text-slate-500">modules</span>{" "}
                  <span className="font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                    {totalCount}
                  </span>
                </span>
                <span className="rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="text-slate-400 dark:text-slate-500">web</span>{" "}
                  <span className="font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                    {Project.myProjects.length}
                  </span>
                </span>
                <span className="rounded-lg border border-slate-200/90 bg-white/90 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                  <span className="text-slate-400 dark:text-slate-500">mobile</span>{" "}
                  <span className="font-semibold tabular-nums text-slate-800 dark:text-slate-200">
                    {Project.mobileProjects.length}
                  </span>
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80} className="mt-10">
            <div
              role="tablist"
              aria-label="Filter projects"
              className="inline-flex flex-wrap gap-1 rounded-2xl border border-slate-200/90 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    activeFilter === f
                      ? "bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {showMobile && Project.mobileProjects.length > 0 ? (
            <div className="mb-20 md:mb-28">
              <ScrollReveal>
                <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Native & cross‑platform
                    </h2>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                      Mobile showcase
                    </p>
                  </div>
                  <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
                    Split layout: story on one side, device on the other—pick a
                    screen from the strip or swipe inside the frame.
                  </p>
                </div>
              </ScrollReveal>
              <div className="flex flex-col gap-10 lg:gap-12">
                {Project.mobileProjects.map((mobileProject, index) => (
                  <ScrollReveal key={mobileProject.title} delayMs={index * 90}>
                    <MobileProject
                      project={mobileProject}
                      reverse={index % 2 === 1}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ) : null}

          {showWeb ? (
            <div>
              <ScrollReveal>
                <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                      Web & desktop
                    </h2>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                      Full project index
                    </p>
                  </div>
                  <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
                    Browsers, Shopify, internal Python tools, Electron, and
                    weekend spikes—nothing hidden behind the filter.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {webProjects.map((project, index) => {
                  const featured =
                    (activeFilter === "All" || activeFilter === "Web") &&
                    index === 0;
                  return (
                    <ScrollReveal
                      key={`${project.title}-${index}`}
                      delayMs={(index % 6) * 55}
                      className={featured ? "lg:col-span-2" : ""}
                    >
                      <WebProjectCard
                        project={project}
                        index={index}
                        featured={featured}
                      />
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200/80 py-20 dark:border-white/[0.06] md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <ScrollReveal>
            <p className="font-mono text-xs font-medium tracking-wide text-sky-600 dark:text-sky-400">
              Next
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Building something similar?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-600 dark:text-slate-400">
              I am open to collaborations, freelance UI work, and product
              engineering. Tell me about your stack and timeline.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:pruthvimohanlal10@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Email me
                <i className="fas fa-arrow-right ml-2 text-xs opacity-80" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200/90 bg-white/90 px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-white/20"
              >
                About &amp; background
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default Projects;
