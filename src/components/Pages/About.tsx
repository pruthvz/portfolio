import { Link } from "react-router-dom";
import { useEffect } from "react";
import pruthviImage from "../../assets/pruthvi.jpg";
import ScrollReveal from "../Homepage/ScrollReveal";
import { SKILL_CATEGORIES } from "../Homepage/landingTechData";
import "../Homepage/landing.css";

const timeline = [
  {
    id: "degree",
    title: "BSc (Hons) Computer Science",
    org: "University of Lincoln",
    period: "2022 – 2025",
    body: "First class honours. Coursework and projects focused on web development, software engineering, and user-centred design.",
    tags: ["Web dev", "UX", "Software engineering"],
  },
  {
    id: "revvlane",
    title: "Revvlane",
    org: "Self-employed",
    period: "Since 2024",
    body: "Car meetup and community app: profiles, discovery, and social features for enthusiasts—React, Node.js, MongoDB.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "crescent",
    title: "Shopcrescent",
    org: "Co-founder",
    period: "Since 2022",
    body: "Premium streetwear brand: Shopify storefront, brand, and day-to-day e-commerce operations.",
    tags: ["Shopify", "E-commerce", "Brand"],
  },
  {
    id: "freelance",
    title: "Freelance developer",
    org: "Self-employed",
    period: "Since 2020",
    body: "Websites and small apps for clients—responsive UI, modern stacks, and clear handoffs.",
    tags: ["React", "Next.js", "Tailwind"],
  },
] as const;

const skillPills = SKILL_CATEGORIES.flatMap((c) => c.items.map((i) => i.label));

const workPrinciples = [
  {
    title: "Clarity first",
    body: "Readable structure, predictable navigation, and UI states that match what users expect.",
    icon: "fas fa-eye",
  },
  {
    title: "Ship in slices",
    body: "Small releases, early feedback, and tightening performance and accessibility as the product grows.",
    icon: "fas fa-layer-group",
  },
  {
    title: "Design + code",
    body: "I enjoy sitting between Figma and components—spacing, motion, and edge cases included.",
    icon: "fas fa-pencil-alt",
  },
] as const;

function About() {
  useEffect(() => {
    document.title = "About Me - Pruthvi Mohanlal";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#070a10] dark:text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35] dark:opacity-[0.1]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "22px 22px",
        }}
      />

      {/* Page intro */}
      <section className="scroll-mt-24 border-b border-slate-200/80 px-5 pb-16 pt-28 dark:border-white/[0.06] sm:px-6 md:pb-20 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="font-mono text-xs font-medium tracking-wide text-sky-600 dark:text-sky-400">
              /about
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl md:leading-[1.1]">
              I design and build web experiences people actually use.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg md:text-xl">
              First-class Computer Science graduate (University of Lincoln). I care
              about clarity, performance, and accessibility—whether it&apos;s a
              marketing site, a product UI, or an internal tool.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Profile + story */}
      <section className="border-b border-slate-200/80 px-5 py-16 dark:border-white/[0.06] sm:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-16">
          <ScrollReveal>
            <div className="relative mx-auto h-full max-w-sm lg:mx-0 lg:max-w-none">
              <div
                className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-slate-200/50 via-transparent to-slate-300/30 blur-2xl dark:from-slate-700/25 dark:to-slate-800/20"
                aria-hidden
              />
              <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg ring-1 ring-slate-900/[0.03] dark:border-white/10 dark:bg-[#0c1018] dark:ring-white/[0.04]">
                <img
                  src={pruthviImage}
                  alt="Pruthvi Mohanlal"
                  className="h-full min-h-[20rem] w-full object-cover object-[center_20%] sm:min-h-[22rem] lg:min-h-[28rem]"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="flex h-full min-h-0 flex-col gap-10">
              <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl md:leading-relaxed">
                <p>
                  Hi—I&apos;m Pruthvi. I got into programming to make interactive,
                  user-friendly things on the web, and I&apos;ve stayed focused on
                  frontend work:{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    React, Next.js, TypeScript, Tailwind
                  </span>
                  , and shipping polished UI in the browser—from layout and
                  typography to loading states and responsive breakpoints.
                </p>
                <p>
                  I&apos;ve also used{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-100">
                    Node.js and Python
                  </span>{" "}
                  on the server side, which helps when APIs, data, or tooling sit next
                  to the interface. Recent work spans apps, e-commerce, and internal
                  tools where design and engineering meet.
                </p>
                <p>
                  My degree gave me a strong base in software engineering, teamwork,
                  and presenting technical work clearly—skills I use every week when
                  collaborating or documenting decisions for others.
                </p>
                <p>
                  Outside of code: automotive design, games, and side projects that
                  let me try new ideas without a deadline. I&apos;m always interested
                  in roles where UI quality and iteration speed both matter.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm dark:border-white/10 dark:bg-[#0c1018]/80">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  How I work
                </p>
                <ul className="grid gap-4 sm:grid-cols-3">
                  {workPrinciples.map((w) => (
                    <li key={w.title}>
                      <div className="flex gap-3">
                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/80 bg-slate-50 text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                          <i className={`${w.icon} text-sm`} aria-hidden />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            {w.title}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                            {w.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  View projects
                  <i className="fas fa-arrow-right text-xs opacity-80" />
                </Link>
                <a
                  href="mailto:pruthvimohanlal10@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/90 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:bg-white/[0.06]"
                >
                  Email me
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center py-3 text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-400 dark:decoration-white/20 dark:hover:text-white sm:py-3.5"
                >
                  ← Back home
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills cloud */}
      <section className="border-b border-slate-200/80 px-5 py-16 dark:border-white/[0.06] sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Stack & tools
            </h2>
            <p className="mt-2 max-w-xl text-lg font-medium text-slate-900 dark:text-white md:text-xl">
              Same grouping as the homepage—languages through delivery.
            </p>
          </ScrollReveal>
          <ScrollReveal delayMs={60} className="mt-8">
            <div className="flex flex-wrap gap-2">
              {skillPills.map((label, idx) => (
                <span
                  key={`${label}-${idx}`}
                  className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 sm:text-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-5 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Journey
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl">
              Education &amp; experience
            </p>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 md:text-lg">
              Each card animates in as you scroll the timeline.
            </p>
          </ScrollReveal>

          <div className="relative mt-12 pl-8 sm:pl-10">
            <div
              className="about-timeline-track absolute bottom-2 left-[10px] top-2 w-0.5 sm:left-[12px]"
              aria-hidden
            />
            <ul className="space-y-0">
              {timeline.map((item, index) => (
                <li key={item.id} className="relative pb-12 last:pb-0">
                  <span
                    className="about-timeline-dot absolute left-0 top-8 z-[1] flex h-3.5 w-3.5 -translate-x-[3px] rounded-full border-2 border-slate-300 bg-white dark:border-slate-400 dark:bg-[#0c1018] sm:top-9"
                    aria-hidden
                  />
                  <ScrollReveal
                    preset="timeline"
                    delayMs={index * 55}
                    className="relative pl-1 sm:pl-2"
                  >
                    <article className="about-timeline-card rounded-2xl border border-slate-200/90 bg-white/90 p-6 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-[#0c1018]/90 dark:hover:shadow-lg dark:hover:shadow-black/30 md:p-7 motion-reduce:transform-none motion-reduce:hover:transform-none">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white md:text-xl">
                            {item.title}
                          </h3>
                          <p className="mt-0.5 text-sm font-medium text-slate-600 dark:text-slate-400 md:text-base">
                            {item.org}
                          </p>
                        </div>
                        <span className="shrink-0 self-start rounded-full border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-semibold tracking-wide text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-base md:leading-relaxed">
                        {item.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-white/[0.06] dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
