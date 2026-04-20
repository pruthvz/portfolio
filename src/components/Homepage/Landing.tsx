import { Link } from "react-router-dom";
import { useEffect } from "react";
import HomepageHero from "./HomepageHero";
import ScrollReveal from "./ScrollReveal";
import {
  SKILL_CATEGORIES,
  type SkillCategoryTone,
} from "./landingTechData";
import revvlane from "../../assets/revvlane/img_7268.png";
import wetogether from "../../assets/wetogether/navigation.png";
import sheetgenHero from "../../assets/projectImg/gen1.png";
import instabooth from "../../assets/projectImg/booth.png";
import crescent from "../../assets/projectImg/crescent.png";
import valocrate from "../../assets/projectImg/valocrate.png";
import "./landing.css";

/** Full Tailwind strings so the compiler keeps every variant. */
const SKILL_TONE_STYLES: Record<
  SkillCategoryTone,
  {
    stripe: string;
    iconWrap: string;
    title: string;
    titleMd: string;
    chip: string;
    chipHover: string;
    chipIcon: string;
  }
> = {
  emerald: {
    stripe: "border-l-emerald-500/85 dark:border-l-emerald-400/75",
    iconWrap:
      "bg-emerald-500/[0.14] text-emerald-900 dark:bg-emerald-400/[0.15] dark:text-emerald-100",
    title: "text-emerald-950 dark:text-emerald-50",
    titleMd: "md:text-emerald-900 dark:md:text-emerald-100",
    chip: "bg-emerald-500/[0.08] text-emerald-950 ring-emerald-600/[0.14] dark:bg-emerald-400/[0.1] dark:text-emerald-50 dark:ring-emerald-300/[0.18]",
    chipHover:
      "hover:bg-emerald-500/[0.13] dark:hover:bg-emerald-400/[0.15]",
    chipIcon: "text-emerald-700 dark:text-emerald-300",
  },
  sky: {
    stripe: "border-l-sky-500/85 dark:border-l-sky-400/75",
    iconWrap:
      "bg-sky-500/[0.14] text-sky-950 dark:bg-sky-400/[0.15] dark:text-sky-50",
    title: "text-sky-950 dark:text-sky-50",
    titleMd: "md:text-sky-900 dark:md:text-sky-100",
    chip: "bg-sky-500/[0.08] text-sky-950 ring-sky-600/[0.14] dark:bg-sky-400/[0.1] dark:text-sky-50 dark:ring-sky-300/[0.18]",
    chipHover: "hover:bg-sky-500/[0.13] dark:hover:bg-sky-400/[0.15]",
    chipIcon: "text-sky-700 dark:text-sky-300",
  },
  teal: {
    stripe: "border-l-teal-500/85 dark:border-l-teal-400/75",
    iconWrap:
      "bg-teal-500/[0.14] text-teal-950 dark:bg-teal-400/[0.15] dark:text-teal-50",
    title: "text-teal-950 dark:text-teal-50",
    titleMd: "md:text-teal-900 dark:md:text-teal-100",
    chip: "bg-teal-500/[0.08] text-teal-950 ring-teal-600/[0.14] dark:bg-teal-400/[0.1] dark:text-teal-50 dark:ring-teal-300/[0.18]",
    chipHover: "hover:bg-teal-500/[0.13] dark:hover:bg-teal-400/[0.15]",
    chipIcon: "text-teal-700 dark:text-teal-300",
  },
  amber: {
    stripe: "border-l-amber-500/85 dark:border-l-amber-400/75",
    iconWrap:
      "bg-amber-500/[0.16] text-amber-950 dark:bg-amber-400/[0.16] dark:text-amber-50",
    title: "text-amber-950 dark:text-amber-50",
    titleMd: "md:text-amber-900 dark:md:text-amber-100",
    chip: "bg-amber-500/[0.1] text-amber-950 ring-amber-600/[0.18] dark:bg-amber-400/[0.12] dark:text-amber-50 dark:ring-amber-300/[0.22]",
    chipHover: "hover:bg-amber-500/[0.15] dark:hover:bg-amber-400/[0.17]",
    chipIcon: "text-amber-800 dark:text-amber-200",
  },
  orange: {
    stripe: "border-l-orange-500/85 dark:border-l-orange-400/75",
    iconWrap:
      "bg-orange-500/[0.14] text-orange-950 dark:bg-orange-400/[0.15] dark:text-orange-50",
    title: "text-orange-950 dark:text-orange-50",
    titleMd: "md:text-orange-900 dark:md:text-orange-100",
    chip: "bg-orange-500/[0.08] text-orange-950 ring-orange-600/[0.14] dark:bg-orange-400/[0.1] dark:text-orange-50 dark:ring-orange-300/[0.18]",
    chipHover: "hover:bg-orange-500/[0.13] dark:hover:bg-orange-400/[0.15]",
    chipIcon: "text-orange-800 dark:text-orange-200",
  },
};

type ProjectLink = {
  href: string;
  icon: "external" | "github" | "lock";
  aria: string;
};

type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  tag: string;
  pillClass: string;
  image: string;
  alt: string;
  layout: "mockup" | "cover";
  imageClass?: string;
  links: ProjectLink[];
};

const PROJECTS: ProjectEntry[] = [
  {
    id: "revvlane",
    title: "Revvlane",
    description:
      "Automotive social platform for meets, garage management, and showcasing vehicles—built as a polished mobile experience.",
    tag: "Mobile",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: revvlane,
    alt: "Revvlane mobile app",
    layout: "mockup",
    links: [
      { href: "#", icon: "external", aria: "Revvlane live" },
      { href: "#", icon: "github", aria: "Revvlane repository" },
    ],
  },
  {
    id: "wetogether",
    title: "WeTogether",
    description:
      "Group location sharing with destinations, member tracking, and real-time coordination for meetups.",
    tag: "Mobile",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: wetogether,
    alt: "WeTogether app",
    layout: "mockup",
    links: [
      { href: "#", icon: "external", aria: "WeTogether live" },
      { href: "#", icon: "github", aria: "WeTogether repository" },
    ],
  },
  {
    id: "sheetgen",
    title: "SheetGen",
    description:
      "Internal Python desktop tool for a company—speeds up setup workflows and day-to-day operational efficiency.",
    tag: "Python",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: sheetgenHero,
    alt: "SheetGen desktop application",
    layout: "cover",
    imageClass: "object-top",
    links: [
      {
        href: "https://github.com/pruthvz/setup-sheetgen",
        icon: "external",
        aria: "SheetGen on GitHub",
      },
      {
        href: "https://github.com/pruthvz/setup-sheetgen",
        icon: "github",
        aria: "SheetGen repository",
      },
    ],
  },
  {
    id: "instabooth",
    title: "Instabooth",
    description:
      "Browser photobooth: capture frames, decorate, draw, and export a collage—performance-minded and fun to use.",
    tag: "React",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: instabooth,
    alt: "Instabooth project",
    layout: "cover",
    links: [
      { href: "https://instabooth.netlify.app/", icon: "external", aria: "Instabooth live" },
      {
        href: "https://github.com/pruthvz/photobooth",
        icon: "github",
        aria: "Instabooth repository",
      },
    ],
  },
  {
    id: "valocrate",
    title: "Valorant Crate Simulator",
    description:
      "Interactive crate-opening experience with inventory and persistence—responsive UI themed around Valorant.",
    tag: "React",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: valocrate,
    alt: "Valorant Crate Simulator",
    layout: "cover",
    links: [
      {
        href: "https://track-valorant.vercel.app/",
        icon: "external",
        aria: "Valorant Crate Simulator live",
      },
      {
        href: "https://github.com/pruthvz/track-valorant",
        icon: "github",
        aria: "Valorant Crate Simulator repository",
      },
    ],
  },
  {
    id: "crescent",
    title: "Crescent",
    description:
      "Premium streetwear brand—Shopify storefront, integrations, and a cohesive shopping experience.",
    tag: "Shopify",
    pillClass:
      "border border-slate-200/90 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
    image: crescent,
    alt: "Crescent clothing brand",
    layout: "cover",
    links: [
      { href: "https://shopcrescent.uk/", icon: "external", aria: "Crescent store" },
      {
        href: "#private-business-project",
        icon: "lock",
        aria: "Private repository",
      },
    ],
  },
];

function SectionIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="max-w-xl">
      <p className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-[2.35rem] md:leading-tight">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center bg-gradient-to-b from-slate-100 to-slate-200/80 py-10 dark:from-slate-900/80 dark:to-slate-950">
      <div className="relative">
        <div className="rounded-[2.5rem] bg-[#2a2a2a] p-1 shadow-2xl shadow-slate-900/25 dark:shadow-black/50">
          <div className="aspect-[9/19.5] w-36 overflow-hidden rounded-[1.75rem] bg-black sm:w-40">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover transition duration-500 group-hover/card:scale-[1.03]"
            />
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 h-0.5 w-11 -translate-x-1/2 rounded-full bg-white/35" />
      </div>
    </div>
  );
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const isHttp = link.href.startsWith("http");
  const base =
    "flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white";
  const icon =
    link.icon === "github" ? (
      <i className="fab fa-github text-sm" />
    ) : link.icon === "lock" ? (
      <i className="fas fa-lock text-xs" />
    ) : (
      <i className="fas fa-external-link-alt text-xs" />
    );
  return (
    <a
      href={link.href}
      target="_blank"
      rel={isHttp ? "noopener noreferrer" : undefined}
      className={base}
      aria-label={link.aria}
    >
      {icon}
    </a>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <article className="group/card flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm ring-1 ring-slate-900/[0.02] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-[#0c1018] dark:ring-white/[0.04] dark:hover:shadow-xl dark:hover:shadow-black/40">
      <div className="relative overflow-hidden">
        {project.layout === "mockup" ? (
          <PhoneMockup src={project.image} alt={project.alt} />
        ) : (
          <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-900">
            <img
              src={project.image}
              alt={project.alt}
              className={`h-full w-full object-cover transition duration-500 group-hover/card:scale-[1.02] ${project.imageClass ?? ""}`}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent opacity-0 transition duration-300 group-hover/card:opacity-100 dark:from-black/50" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide sm:text-xs ${project.pillClass}`}
          >
            {project.tag}
          </span>
          <div className="flex gap-1.5">
            {project.links.map((link) => (
              <ProjectLinkButton key={link.aria} link={link} />
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
      </div>
    </article>
  );
}

function Landing() {
  useEffect(() => {
    document.title = "Pruthvi Mohanlal - Homepage";
  }, []);

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

      <HomepageHero />

      {/* About */}
      <section
        id="about"
        className="scroll-surface scroll-mt-24 border-t border-slate-200/80 py-20 md:py-28 dark:border-white/[0.06]"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-16">
              <div className="order-2 lg:order-1">
                <SectionIntro
                  eyebrow="About"
                  title="I build interfaces people trust."
                  subtitle="Web developer and designer focused on clean UX, solid engineering, and performance. 1st Class Honors Computer Science (University of Lincoln)—shipping responsive, accessible products."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-3 text-center dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="text-2xl font-semibold tabular-nums text-slate-900 dark:text-white">
                      5+
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Years
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-200/90 bg-white/90 px-5 py-3 text-center dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="text-2xl font-semibold tabular-nums text-slate-900 dark:text-white">
                      20+
                    </div>
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Projects
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  >
                    Full story
                    <i className="fas fa-arrow-right text-xs opacity-80" />
                  </Link>
                  <a
                    href="mailto:pruthvimohanlal10@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300/90 bg-white/80 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white dark:border-white/15 dark:bg-transparent dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-white/[0.06]"
                  >
                    Email me
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-slate-200/60 via-transparent to-slate-300/40 blur-2xl dark:from-slate-700/30 dark:to-slate-800/20"
                    aria-hidden
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#0d1117] shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
                    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <span className="font-mono text-xs text-slate-500">about.ts</span>
                      <span className="w-8" />
                    </div>
                    <div className="p-5 font-mono text-[0.8rem] leading-relaxed sm:p-6 sm:text-sm">
                      <div className="text-slate-500">// snapshot</div>
                      <div>
                        <span className="text-sky-400">const</span>{" "}
                        <span className="text-sky-300">dev</span>{" "}
                        <span className="text-slate-500">=</span>{" "}
                        <span className="text-slate-500">{"{"}</span>
                      </div>
                      <div className="ml-3 text-slate-300">
                        <span className="text-amber-300">name</span>
                        <span className="text-slate-500">:</span>{" "}
                        <span className="text-emerald-400">
                          &quot;Pruthvi Mohanlal&quot;
                        </span>
                        <span className="text-slate-500">,</span>
                      </div>
                      <div className="ml-3 text-slate-300">
                        <span className="text-amber-300">focus</span>
                        <span className="text-slate-500">:</span>{" "}
                        <span className="text-emerald-400">
                          &quot;frontend · product UI&quot;
                        </span>
                        <span className="text-slate-500">,</span>
                      </div>
                      <div className="ml-3 text-slate-300">
                        <span className="text-amber-300">stack</span>
                        <span className="text-slate-500">:</span> [
                      </div>
                      <div className="ml-6 text-slate-300">
                        &quot;React&quot;, &quot;Next&quot;, &quot;TypeScript&quot;,
                      </div>
                      <div className="ml-6 text-slate-300">
                        &quot;Python&quot;, &quot;Node&quot;, &quot;Tailwind&quot;,
                      </div>
                      <div className="ml-6 text-slate-300">
                        &quot;Claude&quot;, &quot;Cursor&quot;, &quot;Vite&quot;
                      </div>
                      <div className="ml-3 text-slate-300">],</div>
                      <div className="text-slate-500">{"}"};</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-surface scroll-mt-24 border-t border-slate-200/80 py-20 md:py-28 dark:border-white/[0.06]"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
              <SectionIntro
                eyebrow="Capabilities"
                title="Stack I ship with."
                subtitle="Grouped the way I work—each band has a soft colour cue so you can scan languages, UI, backend, AI, and tooling at a glance."
              />
              <Link
                to="/projects"
                className="shrink-0 self-start text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 dark:text-slate-400 dark:decoration-white/20 dark:hover:text-white md:self-auto"
              >
                See it in projects →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={60}>
            <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm dark:border-white/[0.08] dark:bg-[#0a0f16]/95">
              <div className="divide-y divide-slate-200/80 dark:divide-white/[0.06]">
                {SKILL_CATEGORIES.map((cat) => {
                  const tone = SKILL_TONE_STYLES[cat.tone];
                  return (
                    <div
                      key={cat.id}
                      className={`border-l-[3px] px-5 py-7 sm:px-8 sm:py-8 md:flex md:items-start md:gap-10 md:py-7 ${tone.stripe}`}
                    >
                      <div className="mb-4 flex shrink-0 items-center gap-3 md:mb-0 md:w-52 md:flex-col md:items-stretch md:gap-2 md:border-r md:border-slate-200/70 md:pr-8 dark:md:border-white/[0.08]">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone.iconWrap}`}
                          aria-hidden
                        >
                          <i className={`${cat.icon} text-[0.95rem]`} />
                        </span>
                        <h3
                          className={`text-sm font-semibold tracking-tight md:text-xs md:font-semibold md:uppercase md:tracking-[0.14em] ${tone.title} ${tone.titleMd}`}
                        >
                          {cat.title}
                        </h3>
                      </div>
                      <ul
                        className="flex flex-wrap gap-2 md:flex-1 md:pt-0.5"
                        role="list"
                        aria-label={cat.title}
                      >
                        {cat.items.map((item, idx) => (
                          <li key={`${cat.id}-${item.label}-${idx}`}>
                            <span
                              className={`inline-flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[0.8125rem] font-medium ring-1 ring-inset transition ${tone.chip} ${tone.chipHover}`}
                            >
                              <i
                                className={`${item.icon} text-[0.8rem] opacity-90 ${tone.chipIcon}`}
                                aria-hidden
                              />
                              {item.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-surface scroll-mt-24 border-t border-slate-200/80 bg-white/40 py-20 pb-24 md:py-28 md:pb-32 dark:border-white/[0.06] dark:bg-[#060910]/80"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <ScrollReveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <SectionIntro
                eyebrow="Selected work"
                title="Things I've shipped."
                subtitle="Mobile apps, web products, internal tools, and brand-facing storefronts—each with a clear user story."
              />
              <Link
                to="/projects"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-slate-300/90 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1] md:self-auto"
              >
                Archive
                <i className="fas fa-arrow-right text-xs opacity-70" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={100}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
            <div className="mt-12 flex justify-center md:mt-14">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-slate-900/15 transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:shadow-black/30 dark:hover:bg-slate-100"
              >
                View all projects
                <i className="fas fa-arrow-right text-xs transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing strip */}
      <section className="border-t border-slate-200/80 py-14 dark:border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Open to new projects and collaborations. Prefer something in the
            product UI or design-engineering space? Let&apos;s talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="mailto:pruthvimohanlal10@gmail.com"
              className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Get in touch
            </a>
            <Link
              to="/about"
              className="inline-flex rounded-full border border-slate-300/90 px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:bg-white dark:border-white/15 dark:text-slate-100 dark:hover:bg-white/[0.06]"
            >
              About
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
