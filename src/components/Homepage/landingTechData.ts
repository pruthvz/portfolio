/** Shared tech lists for hero radar + landing skills (aligned with Projects / resume stack). */

export type SkillItem = { icon: string; label: string };

export const HERO_RADAR_CHIPS: SkillItem[] = [
  { icon: "fab fa-react", label: "React" },
  { icon: "fab fa-js", label: "TypeScript" },
  { icon: "fas fa-layer-group", label: "Tailwind" },
  { icon: "fas fa-bolt", label: "Vite" },
  { icon: "fas fa-cloud", label: "Supabase" },
  { icon: "fas fa-brain", label: "Claude" },
  { icon: "fas fa-terminal", label: "Cursor" },
  { icon: "fab fa-node", label: "Node" },
  { icon: "fab fa-python", label: "Python" },
];

/** Used on the landing skills table for soft category colour. */
export type SkillCategoryTone =
  | "emerald"
  | "sky"
  | "teal"
  | "amber"
  | "orange";

export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  tone: SkillCategoryTone;
  items: SkillItem[];
};

/**
 * Order: languages → UI & frameworks → backend & persistence → AI tooling → delivery & design.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "fas fa-code",
    tone: "emerald",
    items: [
      { icon: "fab fa-js", label: "JavaScript" },
      { icon: "fab fa-js", label: "TypeScript" },
      { icon: "fab fa-python", label: "Python" },
      { icon: "fas fa-hashtag", label: "C#" },
      { icon: "fab fa-html5", label: "HTML" },
      { icon: "fab fa-css3-alt", label: "CSS" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "fas fa-laptop-code",
    tone: "sky",
    items: [
      { icon: "fab fa-react", label: "React" },
      { icon: "fab fa-react", label: "Next.js" },
      { icon: "fab fa-react", label: "React Native" },
      { icon: "fab fa-css3-alt", label: "Tailwind CSS" },
      { icon: "fas fa-layer-group", label: "ShadCN UI" },
      { icon: "fas fa-palette", label: "Flowbite" },
      { icon: "fab fa-bootstrap", label: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    title: "Backend & data",
    icon: "fas fa-server",
    tone: "teal",
    items: [
      { icon: "fab fa-node", label: "Node.js" },
      { icon: "fab fa-python", label: "Django" },
      { icon: "fab fa-python", label: "Flask" },
      { icon: "fas fa-network-wired", label: "REST APIs" },
      { icon: "fas fa-database", label: "MongoDB" },
      { icon: "fas fa-cloud", label: "Supabase" },
    ],
  },
  {
    id: "ai",
    title: "AI & workflow",
    icon: "fas fa-magic",
    tone: "amber",
    items: [
      { icon: "fas fa-brain", label: "Claude" },
      { icon: "fas fa-i-cursor", label: "Cursor" },
      { icon: "fas fa-sliders-h", label: "Windsurf" },
    ],
  },
  {
    id: "build",
    title: "Build, design & tools",
    icon: "fas fa-wrench",
    tone: "orange",
    items: [
      { icon: "fas fa-bolt", label: "Vite" },
      { icon: "fas fa-cube", label: "Webpack" },
      { icon: "fab fa-git-alt", label: "Git" },
      { icon: "fab fa-figma", label: "Figma" },
      { icon: "fas fa-paint-brush", label: "Photoshop" },
      { icon: "fab fa-unity", label: "Unity 2D/3D" },
      { icon: "fas fa-bug", label: "Selenium" },
    ],
  },
];
