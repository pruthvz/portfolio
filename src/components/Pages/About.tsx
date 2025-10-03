import { Link } from "react-router-dom";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Me - Pruthvi Mohanlal";
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}

      {/* About Content Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Image */}
              <div
                className="relative"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="relative">
                  <img
                    src="/src/assets/pruthvi.jpg"
                    alt="Pruthvi Mohanlal"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"></div>
                </div>
              </div>

              {/* About Content */}
              <div data-aos="fade-left" data-aos-duration="800">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    About me
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                  Web Developer & Designer
                </h2>

                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Hi there! I'm Pruthvi, a passionate and highly motivated web
                    developer with a knack for crafting user-centric digital
                    experiences. I have recently graduated with First Class
                    Honors in BSc (Hons) Computer Science from the University of
                    Lincoln.
                  </p>

                  <p>
                    My journey into programming began with a desire to create
                    interactive and user-friendly experiences. I quickly
                    gravitated towards frontend development, mastering modern
                    technologies like React, Next.js, TypeScript, and Tailwind
                    CSS.
                  </p>
                  <p>
                    Alongside my frontend focus, I’ve also worked with backend
                    tools like Node.js and Python, giving me a solid
                    understanding of full-stack development. Over the years,
                    I’ve built apps, e-commerce platforms, and social tools that
                    combine clean design with smooth functionality.
                  </p>
                  <p>
                    When I’m not coding, you’ll usually find me exploring automotive design, playing games, or experimenting with new side projects.
                    </p>
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "JavaScript",
                      "Tailwind CSS",
                      "Node.js",
                      "Python",
                      "Git",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>View Projects</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={() => {
                      window.location.href =
                        "mailto:pruthvimohanlal10@gmail.com";
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <span>Get in Touch</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                My Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Education & Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The path that's shaped my development career
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Education */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      BSc Computer Science
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      University of Lincoln
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mt-2 md:mt-0">
                    2022 - 2025
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Graduated with first class honors, focusing on web development
                  and user experience design. Successfully completed all
                  coursework and final projects.
                </p>
              </div>

              {/* Revvlane */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Revvlane - Car Enthusiast App
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Self-employed
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mt-2 md:mt-0">
                    2024 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Developing a car meetup app that allows enthusiasts to find
                  local events, showcase their vehicles, and connect with the
                  automotive community. Features include personalized car
                  profiles, community forums, and meetup discovery.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shopcrescent */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Shopcrescent - Clothing Brand
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Co-founder
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mt-2 md:mt-0">
                    2022 - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Co-founded a premium clothing brand offering high-quality
                  apparel including tracksuits, t-shirts, and beanies. Gaining
                  valuable entrepreneurial experience through brand development
                  and e-commerce operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["E-commerce", "Shopify", "Brand Development"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Freelance */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      Freelance Developer
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      Self-employed
                    </p>
                  </div>
               
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed and developed websites and applications for various
                  clients. Created responsive, user-friendly interfaces with
                  modern frameworks and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
