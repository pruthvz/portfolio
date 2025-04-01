import Project from "../Projects";
import crescent from "../../assets/crescent.png";
import revvlane from "../../assets/revvlane.png";
import { useState, useEffect, useRef } from "react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

  const filterCategories = ["All", "Web", "Mobile", "Design", "Game"];

  // Process projects to add categories if they don't exist
  const projectsWithCategories = Project.myProjects.map((project) => ({
    ...project,
    category:
      project.subTitle.includes("React") || project.subTitle.includes("Next")
        ? "Web"
        : project.subTitle.includes("Travel")
        ? "Design"
        : project.subTitle.includes("Programming") ||
          project.subTitle.includes("Developer")
        ? "Web"
        : "Other",
  }));

  const filteredProjects =
    activeFilter === "All"
      ? projectsWithCategories
      : projectsWithCategories.filter(
          (project) => project.category === activeFilter
        );

  // Handle mouse movement for the interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const header = headerRef.current;
      if (!header) return;

      const rect = header.getBoundingClientRect();
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
      {/* Header - Modern with interactive background */}
      <div
        ref={headerRef}
        className="relative min-h-[50vh] flex items-center overflow-hidden"
      >
        {/* Interactive Background */}
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
            className="absolute w-60 h-60 bg-secondary/15 rounded-full filter blur-3xl transition-all duration-500 ease-out"
            style={{
              bottom: mousePosition.y * -0.03 + 100,
              right: mousePosition.x * -0.03 + 100,
              transform: `translate(${mousePosition.x * 0.01}px, ${
                mousePosition.y * 0.02
              }px)`,
              opacity: 0.6,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center lg:text-left py-20">
          <div className="max-w-4xl mx-auto lg:mx-0" data-aos="fade-up">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              My Portfolio
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Showcasing My Work
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              A collection of personal projects, client work, and contributions
              that demonstrate my skills and passion for development.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#featured" className="text-white/50 hover:text-white">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>

      {/* Featured Projects - Modern Card Layout */}
      <section id="featured" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              Featured Work
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Highlight Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              My most significant and impactful work
            </p>
          </div>

          {/* Featured Project 1 - Crescent */}
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden mb-16"
            data-aos="fade-up"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div
                className="order-2 md:order-1"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                  Brand & E-commerce
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Crescent Clothing
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Me and my sister started our own clothing brand called
                  "crescent", focusing on streetwear designs. We create unique
                  hoodie and t-shirt designs with an urban aesthetic. This
                  venture has taught me valuable lessons about running a startup
                  business, from branding to e-commerce operations.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    E-commerce
                  </span>
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    Branding
                  </span>
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    Shopify
                  </span>
                </div>
                <a
                  href="https://shopcrescent.uk/password"
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
                  target="_blank"
                >
                  <span>Shop Collection</span>
                  <i className="fas fa-external-link-alt transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
              <div
                className="order-1 md:order-2 relative"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-xl blur-sm opacity-50"></div>
                <div className="relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden p-2 border border-white/10">
                  <img
                    src={crescent}
                    alt="Crescent Clothing"
                    className="w-full h-auto rounded-lg object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Project 2 - Revvlane */}
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div
                className="relative"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-xl blur-sm opacity-50"></div>
                <div className="relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden p-2 border border-white/10">
                  <img
                    src={revvlane}
                    alt="Revvlane Project"
                    className="w-full h-auto rounded-lg object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                  Social Platform
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Revvlane
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  RevvLane is a specialized social network for car enthusiasts
                  featuring customizable profiles, content sharing, car groups,
                  forums, event coordination, galleries, chat systems, and a
                  marketplace. It serves as a comprehensive platform connecting
                  automotive enthusiasts and providing resources for the
                  community.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-base-200/80 rounded-full text-xs font-medium text-gray-300">
                    MongoDB
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
                >
                  <span>View Project</span>
                  <i className="fas fa-external-link-alt transform group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-40 right-0 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              My Work
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my diverse portfolio of development projects
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex justify-center mb-12 overflow-x-auto py-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="inline-flex bg-base-300/50 backdrop-blur-md rounded-full p-1 shadow-md">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === category
                      ? "bg-indigo-500 text-white shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={50 * (index % 3)}
              >
                {/* Subtle glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 ease-out"></div>
                <div className="relative bg-base-300/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-base-100/20 h-full transition-all duration-300 group-hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      src={project.img}
                      alt={project.imgAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        {project.subTitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.desc}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-700/50">
                      <div className="flex space-x-3 text-accent">
                        <a
                          href={project.website}
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          <i className="fas fa-globe"></i>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          className="hover:text-primary transition-colors"
                        >
                          <i className="fas fa-code"></i>
                        </a>
                      </div>

                      <div className="text-xs">
                        <span className="inline-block px-2 py-1 bg-base-200/80 rounded-full text-gray-400">
                          {project.hash1?.replace("#", "")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Development Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-base-300/50 to-base-100/50 -z-10"></div>
        <div className="container mx-auto px-4">
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="py-12 px-8 lg:px-12">
              <div className="text-center mb-12" data-aos="fade-up">
                <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                  Game Development
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Published Games
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Mobile games I've developed and published to app stores
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Game Card 1 */}
                <div
                  className="group relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden p-6 border border-white/10"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                      <img
                        src="https://play-lh.googleusercontent.com/T8t5IS1U9OdmAz_abEG3EEFICAGK-ACPmffMyuGGTkbO_PYnhAi_MPdDNybMW0ax-1GI=s180-rw"
                        alt="Tevoo"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Tevoo
                      </h3>
                      <div className="flex items-center text-yellow-400 text-xs mt-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-400">Downloads</span>
                      <span className="text-sm font-medium text-primary">
                        10+
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Arcade
                      </span>
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Unity
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      <i className="fab fa-google-play"></i>
                    </a>
                  </div>
                </div>

                {/* Game Card 2 */}
                <div
                  className="group relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden p-6 border border-white/10"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                      <img
                        src="https://play-lh.googleusercontent.com/vNdn7evHek1LW9miGRZXou4VotIpyDoYk8PWB_fO4XZaNqTYvaUpeD0V5pqG9y3_aQ=s180-rw"
                        alt="Precise Bolter"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Precise Bolter
                      </h3>
                      <div className="flex items-center text-yellow-400 text-xs mt-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-400">Downloads</span>
                      <span className="text-sm font-medium text-primary">
                        10+
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Action
                      </span>
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Unity
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      <i className="fab fa-google-play"></i>
                    </a>
                  </div>
                </div>

                {/* Game Card 3 */}
                <div
                  className="group relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden p-6 border border-white/10"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                      <img
                        src="https://play-lh.googleusercontent.com/KyCtXP11MeFN8j0zDIv_7SbJ1JuMzD7YIzkPhtFTfJevt2Sf_9Lp0w-Q1dZiAJ_4ts73=s180-rw"
                        alt="Dazzled Dot"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Dazzled Dot
                      </h3>
                      <div className="flex items-center text-yellow-400 text-xs mt-1">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-400">Downloads</span>
                      <span className="text-sm font-medium text-primary">
                        5+
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: "10%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Casual
                      </span>
                      <span className="px-2 py-1 bg-base-300/80 rounded-full text-xs font-medium text-gray-400">
                        Unity
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-primary hover:text-accent transition-colors"
                    >
                      <i className="fab fa-google-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
