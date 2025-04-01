import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import spatepate from "../../assets/projectImg/spatepate.png";
import oopsDev from "../../assets/projectImg/oopsdev.png";
import diu from "../../assets/projectImg/diutravels.png";
import projectwee from "../../assets/projectImg/weee.png";
import { useState, useEffect, useRef } from "react";
import "./landing.css"; // Import the CSS file that contains animations

const skills = [
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.JS", category: "Backend" },
  { name: "C#", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "Next.JS", category: "Frontend" },
  { name: "React.JS", category: "Frontend" },
  { name: "Vite.JS", category: "Frontend" },
  { name: "Django", category: "Backend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "HTML/CSS", category: "Frontend" },
  { name: "Unity 2D/3D", category: "Other" },
  { name: "MySQL", category: "Database" },
  { name: "Git", category: "Tool" },
  { name: "GitHub", category: "Tool" },
];

function Landing() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(skills.map((s) => s.category))),
  ];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const filteredSkills =
    activeSkillCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  // Handle mouse movement for the interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = heroSectionRef.current;
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMousePosition({ x, y });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-base-300 to-base-100 dark:from-gray-900 dark:to-black text-gray-100">
      {/* Hero Section - Modern with Glassmorphism */}
      <div
        ref={heroSectionRef}
        className="min-h-screen relative overflow-hidden flex items-center"
      >
        {/* Background elements - interactive gradient circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-80 h-80 bg-primary/20 rounded-full filter blur-3xl transition-all duration-300 ease-out"
            style={{
              top: mousePosition.y * 0.05 - 60,
              left: mousePosition.x * 0.05 - 40,
              transform: `translate(${mousePosition.x * -0.02}px, ${
                mousePosition.y * -0.02
              }px)`,
              opacity: 0.7,
            }}
          ></div>
          <div
            className="absolute w-64 h-64 bg-secondary/15 rounded-full filter blur-3xl transition-all duration-500 ease-out"
            style={{
              top: mousePosition.y * 0.03 + 100,
              right: mousePosition.x * -0.03 + 100,
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * 0.02
              }px)`,
              opacity: 0.6,
            }}
          ></div>
          <div
            className="absolute w-40 h-40 bg-accent/20 rounded-full filter blur-3xl transition-all duration-700 ease-out"
            style={{
              bottom: mousePosition.y * -0.02 + 100,
              left: mousePosition.x * 0.01 + 100,
              transform: `translate(${mousePosition.x * -0.01}px, ${
                mousePosition.y * -0.01
              }px)`,
              opacity: 0.6,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="hero-content flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-16 py-10">
            {/* Hero Text */}
            <div
              className="lg:w-1/2 w-full"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="mockup-code md:ml-20 bg-base-300/80 backdrop-blur-lg shadow-2xl mx-auto p-6 text-xl border border-base-100/20 rounded-xl transform lg:scale-110 will-change-transform hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 lg:w-[120%] lg:-mr-10">
                {/* Browser chrome with enhanced UI */}
                <div className="flex items-center justify-between mb-5 pb-2 border-b border-gray-700/50">
                  <div className="flex space-x-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="hidden sm:flex items-center px-3 py-1 rounded-md bg-base-200/50 text-xs text-gray-400 border border-gray-700/30">
                    <i className="fas fa-lock text-xs mr-2 text-green-500"></i>
                    pruthvi.tech
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 rounded-sm bg-gray-700/60 hover:bg-gray-600/60 transition-colors cursor-pointer flex items-center justify-center">
                      <i className="fas fa-minus text-[8px] text-gray-400"></i>
                    </div>
                  </div>
                </div>

                {/* Terminal Content with improved styling */}
                <div className="terminal-content space-y-3 font-mono">
                  <pre
                    data-prefix="$"
                    className="text-success flex items-center"
                  >
                    <code className="flex items-center">
                      <span>npm i portfolio</span>
                      <span className="ml-1 w-2 h-4 bg-green-500 opacity-0 animate-cursor-blink"></span>
                    </code>
                  </pre>

                  <pre
                    data-prefix=">"
                    className="text-warning flex items-start"
                  >
                    <code className="flex flex-col">
                      <span>installing...</span>
                      <span className="text-xs text-gray-500">
                        fetching metadata from registry...
                      </span>
                      <div className="w-full h-1 mt-1 bg-base-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-accent w-full animate-gradient-x"></div>
                      </div>
                    </code>
                  </pre>

                  <pre data-prefix=">" className="text-success font-mono">
                    <div className="flex items-center">
                      <span className="text-accent">✓</span>
                      <code className="ml-2">
                        Name:{" "}
                        <span className="text-indigo-400">
                          "Pruthvi Mohanlal"
                        </span>
                      </code>
                    </div>
                  </pre>

                  <pre data-prefix=">" className="text-success font-mono">
                    <div className="flex items-center">
                      <span className="text-accent">✓</span>
                      <code className="ml-2">
                        Role:{" "}
                        <span className="text-indigo-400">
                          "Frontend Developer"
                        </span>
                      </code>
                    </div>
                  </pre>

                  <pre data-prefix=">" className="text-success font-mono">
                    <div className="flex items-center">
                      <span className="text-accent">✓</span>
                      <code className="ml-2">
                        Status:{" "}
                        <span className="text-indigo-400">
                          "Ready for new challenges"
                        </span>
                      </code>
                    </div>
                  </pre>

                  <pre data-prefix="$" className="mt-4 flex items-center group">
                    <code className="flex items-center">
                      <TypeAnimation
                        sequence={[
                          "npm run awesome-portfolio",
                          1000,
                          "npm run hire-me",
                          1000,
                          "npm run collaborate",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-accent"
                        style={{
                          display: "inline-block",
                          willChange: "contents",
                        }}
                      />
                      <span className="ml-1 w-2 h-4 bg-accent opacity-100 animate-cursor-blink"></span>
                    </code>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 text-xs text-gray-500">
                      Press Enter to continue
                    </span>
                  </pre>
                </div>

                {/* Interactive buttons */}
                <div className="mt-6 pt-3 border-t border-gray-700/30 flex justify-between">
                  <button className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded hover:bg-indigo-500/30 transition-colors flex items-center gap-1">
                    <i className="fas fa-terminal text-xs"></i> Open Terminal
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded hover:bg-green-500/30 transition-colors flex items-center gap-1">
                    <i className="fas fa-play text-xs"></i> Run Project
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div
              className="lg:w-1/2 w-full text-center lg:text-left"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="inline-block px-3 py-1 mb-6 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                <TypeAnimation
                  sequence={["Hi there, welcome to my portfolio", 2000]}
                  wrapper="span"
                  speed={40}
                  repeat={0}
                  style={{ display: "inline-block" }}
                />
              </div>
              <h1 className="text-7xl lg:text-9xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Pruthvi
                </span>
              </h1>
              <h1 className="text-7xl lg:text-9xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Mohanlal
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-80 mb-8 max-w-xl">
                Frontend Developer crafting beautiful, user-centric web
                experiences with modern technologies.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => {
                    window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                  }}
                  className="btn btn-primary btn-lg gap-2 text-white shadow-lg hover:shadow-primary/50 transition-all"
                >
                  <i className="fas fa-paper-plane"></i> Get in Touch
                </button>
                <a
                  href="#projects"
                  className="btn btn-outline btn-lg backdrop-blur-sm border-gray-500 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
                >
                  View My Work
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/pruthvz"
                  target="_blank"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  className="text-2xl hover:text-primary transition-colors"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/50 hover:text-white">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>

      {/* About Me Section - Modern dashboard style */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-base-300/50 to-base-100/50 -z-10"></div>
        <div className="container mx-auto px-4">
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="gap-8 items-center py-12 px-8 lg:px-12 mx-auto xl:gap-16 md:grid md:grid-cols-2">
              {/* Modern Dashboard/Analytics Visualization */}
              <div
                className="relative group"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-md rounded-xl p-3 border border-gray-700/50 shadow-2xl overflow-hidden">
                  {/* Mock Browser UI */}
                  <div className="flex items-center justify-between border-b border-gray-700/70 pb-2 mb-4">
                    <div className="flex space-x-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="h-4 w-64 bg-gray-700/60 rounded-md"></div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 rounded-sm bg-gray-700/60"></div>
                      <div className="w-4 h-4 rounded-sm bg-gray-700/60"></div>
                      <div className="w-4 h-4 rounded-sm bg-gray-700/60"></div>
                    </div>
                  </div>

                  {/* Dashboard Layout */}
                  <div className="grid grid-cols-4 gap-3">
                    {/* Sidebar */}
                    <div className="col-span-1 space-y-2">
                      {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-2 p-2 rounded-md ${
                            index === 0
                              ? "bg-primary/20 text-primary"
                              : "bg-gray-700/30"
                          }`}
                        >
                          <div className="w-3.5 h-3.5 rounded-sm bg-gray-500/50"></div>
                          <div
                            className={`h-2 ${
                              index === 0
                                ? "w-16 bg-primary/50"
                                : "w-12 bg-gray-600/50"
                            } rounded-md`}
                          ></div>
                        </div>
                      ))}
                    </div>

                    {/* Main Content */}
                    <div className="col-span-3 space-y-3">
                      {/* Chart 1 - Animated Sine Wave */}
                      <div className="h-28 bg-gray-800/60 rounded-lg border border-gray-700/30 p-3 overflow-hidden relative">
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 1000 200"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,100 C50,50 100,150 150,100 C200,50 250,150 300,100 C350,50 400,150 450,100 C500,50 550,150 600,100 C650,50 700,150 750,100 C800,50 850,150 900,100 C950,50 1000,150 1050,100"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="3"
                            className="animate-wave"
                          />
                          <defs>
                            <linearGradient
                              id="gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop offset="0%" stopColor="#4F46E5" />
                              <stop offset="100%" stopColor="#06B6D4" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute bottom-2 left-2 flex space-x-1">
                          <div className="w-1 h-1 rounded-full bg-green-400"></div>
                          <div className="w-10 h-1.5 rounded-md bg-gray-700/60"></div>
                        </div>
                      </div>

                      {/* Charts Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Chart 2 */}
                        <div className="bg-gray-800/60 rounded-lg border border-gray-700/30 p-3 h-28 relative">
                          <div className="flex items-end justify-between h-16 pt-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                              <div
                                key={index}
                                className="w-6 bg-gradient-to-t from-primary/70 to-accent/70 rounded-t-sm animate-bar"
                                style={
                                  {
                                    height: `${Math.random() * 60 + 20}%`,
                                    animationDelay: `${index * 0.1}s`,
                                    "--delay": index,
                                  } as React.CSSProperties
                                }
                              ></div>
                            ))}
                          </div>
                          <div className="w-full border-t border-gray-700/40 mt-1"></div>
                          <div className="flex justify-between mt-1">
                            <div className="w-6 h-1 bg-gray-700/60 rounded-md"></div>
                            <div className="w-6 h-1 bg-gray-700/60 rounded-md"></div>
                            <div className="w-6 h-1 bg-gray-700/60 rounded-md"></div>
                            <div className="w-6 h-1 bg-gray-700/60 rounded-md"></div>
                          </div>
                        </div>

                        {/* Chart 3 */}
                        <div className="bg-gray-800/60 rounded-lg border border-gray-700/30 p-3 h-28">
                          <div className="flex justify-between h-3 mb-2">
                            <div className="w-10 h-2 bg-gray-700/60 rounded-md"></div>
                            <div className="w-6 h-2 bg-gray-700/60 rounded-md"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Text Content */}
              <div
                className="mt-8 md:mt-0"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                  About Me
                </div>
                <h2 className="text-4xl font-bold tracking-tight mb-6 text-white">
                  Crafting Digital Experiences
                </h2>
                <p className="mb-6 text-lg text-gray-300 leading-relaxed">
                  Highly motivated Front-end Developer with experience in
                  building user-centric web applications. Skilled in React.js,
                  Node.js, HTML, CSS (Tailwind CSS), and eager to learn new
                  technologies. I combine technical expertise with creative
                  problem-solving to build elegant, intuitive interfaces.
                </p>
                <a
                  href="/resume"
                  className="inline-flex items-center gap-2 bg-indigo-500 from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <span>View Resume</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Modern tabs and animated cards with refined glow */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              My Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of technologies I've worked with and continue to
              master
            </p>
          </div>

          {/* Skill Category Tabs */}
          <div
            className="flex justify-center mb-12 overflow-x-auto py-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex bg-base-300/50 backdrop-blur-md rounded-full p-1 shadow-md">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSkillCategory === category
                      ? "bg-primary text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid with refined glow effect */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={50 * index}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-accent/40 rounded-xl blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500 ease-out"></div>
                <div className="relative bg-base-300/80 backdrop-blur-md p-6 rounded-xl flex flex-col items-center justify-center shadow-lg border border-base-100/20 h-full hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl text-gray-200 mb-2">
                    {skill.name === "React.JS" && (
                      <i className="fab fa-react text-blue-400"></i>
                    )}
                    {skill.name === "JavaScript" && (
                      <i className="fab fa-js text-yellow-400"></i>
                    )}
                    {skill.name === "HTML/CSS" && (
                      <i className="fab fa-html5 text-orange-500"></i>
                    )}
                    {skill.name === "Node.JS" && (
                      <i className="fab fa-node text-green-500"></i>
                    )}
                    {skill.name === "Python" && (
                      <i className="fab fa-python text-blue-500"></i>
                    )}
                    {skill.name === "Git" && (
                      <i className="fab fa-git-alt text-orange-600"></i>
                    )}
                    {skill.name === "GitHub" && (
                      <i className="fab fa-github text-gray-300"></i>
                    )}
                    {skill.name === "Next.JS" && (
                      <i className="fab fa-react text-white"></i>
                    )}
                    {skill.name === "TailwindCSS" && (
                      <i className="fab fa-css3 text-blue-400"></i>
                    )}
                    {/* Default icon for other skills */}
                    {![
                      "React.JS",
                      "JavaScript",
                      "HTML/CSS",
                      "Node.JS",
                      "Python",
                      "Git",
                      "GitHub",
                      "Next.JS",
                      "TailwindCSS",
                    ].includes(skill.name) && (
                      <i className="fas fa-code text-primary"></i>
                    )}
                  </div>
                  <span className="text-sm font-medium text-white">
                    {skill.name}
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Modern and elegant cards with refined glow */}
      <section id="projects" className="py-24 relative">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              My Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          {/* Projects Grid with refined glow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project Card 1 */}
            <div
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* Refined subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
              <div className="relative bg-base-300/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-base-100/20 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={spatepate}
                    alt="Spatepate project screenshot"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      Programming Tutorials
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Spatepate
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    Comprehensive coding tutorials covering diverse programming
                    languages, with both beginner-friendly and advanced content.
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700">
                    <div className="flex space-x-3 text-accent">
                      <a
                        href="https://pruthvz.github.io/spatepate/"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/spatepate"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                    </div>

                    <div className="text-xs text-gray-500">
                      <span className="inline-block px-2 py-1 bg-base-200 rounded-full text-gray-400">
                        React
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Refined subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
              <div className="relative bg-base-300/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-base-100/20 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={oopsDev}
                    alt="OoopsDev project screenshot"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      Developer Resources
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    ooopsDev.com
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    A collection of valuable resources for developers, spanning
                    both front-end and back-end development tools and
                    references.
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700">
                    <div className="flex space-x-3 text-accent">
                      <a
                        href="https://ooopsdev.com/#/"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/project-atlas"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                    </div>

                    <div className="text-xs text-gray-500">
                      <span className="inline-block px-2 py-1 bg-base-200 rounded-full text-gray-400">
                        Vue
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Refined subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
              <div className="relative bg-base-300/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-base-100/20 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={diu}
                    alt="Diu Travels project screenshot"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      Travel Website
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Diu Travels
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    A static travel website showcasing popular destinations,
                    created as my debut client project using Material Design
                    Bootstrap.
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700">
                    <div className="flex space-x-3 text-accent">
                      <a
                        href="https://diutravels.com/"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/updatedTravelsite"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                    </div>

                    <div className="text-xs text-gray-500">
                      <span className="inline-block px-2 py-1 bg-base-200 rounded-full text-gray-400">
                        Bootstrap
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div
              className="group relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Refined subtle glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
              <div className="relative bg-base-300/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-base-100/20 h-full transition-all duration-300 group-hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    src={projectwee}
                    alt="Project Weee screenshot"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      Next.js Project
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    Project Weee
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    An experimental project to understand the core concepts of
                    Next.js before tackling larger projects with the framework.
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700">
                    <div className="flex space-x-3 text-accent">
                      <a
                        href="https://project-weee.vercel.app/"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-globe"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/project-weee"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                    </div>

                    <div className="text-xs text-gray-500">
                      <span className="inline-block px-2 py-1 bg-base-200 rounded-full text-gray-400">
                        Next.js
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects Button with improved glow */}
          <div className="flex justify-center mt-12">
            <Link
              to="/projects"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-primary hover:bg-primary/90 px-8 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 transition-all duration-300"
              data-aos="fade-up"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <i className="fas fa-arrow-right ml-2"></i>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4">
                View All Projects
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
