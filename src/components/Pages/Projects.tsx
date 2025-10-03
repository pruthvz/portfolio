import Project from "../Projects";
import MobileProject from "../MobileProject";
import { useState, useEffect } from "react";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    document.title = "Pruthvi Mohanlal - Projects";
  }, []);

  const filterCategories = ["All", "Web", "Mobile", "Design"];

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

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-up">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                My Work
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-delay="100">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              A collection of web development projects showcasing modern technologies and clean design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
         

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto py-2" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Projects Section */}
          {activeFilter === "All" || activeFilter === "Mobile" ? (
            <div className="mb-20">
              {(activeFilter === "All" && Project.mobileProjects.length > 0) && (
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                    Mobile Applications
                  </h3>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {Project.mobileProjects.map((mobileProject, index) => (
                  <MobileProject
                    key={index}
                    project={mobileProject}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {/* Desktop Projects Section */}
          {activeFilter === "All" || activeFilter === "Web" || activeFilter === "Design" ? (
            <div>
              {(activeFilter === "All" && filteredProjects.length > 0) && (
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                    Web Projects
                  </h3>
                </div>
              )}
              
              {/* Desktop Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={50 * ((index + (Project.mobileProjects.length * 2)) % 3)}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.img}
                    alt={project.imgAlt}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      {project.subTitle}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.website}
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.hash1?.replace("#", "")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-up">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Let's Work Together
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-delay="100">
              Interested in collaborating?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              I'm always excited to work on new projects and bring ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
              <button
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <a
                href="/resume"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <span>View Resume</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
