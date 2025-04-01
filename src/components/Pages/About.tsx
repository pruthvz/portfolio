import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

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
              Get to know me
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Passionate front-end developer crafting beautiful, user-centric
              web experiences
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about-content" className="text-white/50 hover:text-white">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>

      {/* Main Content Section */}
      <section id="about-content" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Profile Image - Left Side */}
                <div
                  className="relative h-full"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl blur-sm opacity-60"></div>
                  <div className="relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 h-full sticky top-24">
                    {/* Image with social overlay */}
                    <div className="aspect-auto h-full min-h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 group overflow-hidden relative">
                      {/* Photo */}
                      <img
                        src="/src/assets/pruthvi.jpg"
                        alt="Pruthvi Mohanlal"
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Creative social links overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95"></div>

                      {/* Social links arranged in creative pattern */}
                      <div className="absolute inset-0 flex items-end p-8">
                        <div className="w-full">
                          <h3 className="text-white font-medium mb-4 opacity-90">
                            Connect with me
                          </h3>
                          <div className="flex justify-between items-center">
                            <a
                              href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                              target="_blank"
                              className="w-12 h-12 rounded-full bg-indigo-500/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 hover:scale-110 transition-all transform-gpu shadow-lg"
                              aria-label="LinkedIn"
                            >
                              <i className="fab fa-linkedin-in text-lg"></i>
                            </a>
                            <a
                              href="https://github.com/pruthvz"
                              target="_blank"
                              className="w-12 h-12 mt-8 rounded-full bg-indigo-500/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 hover:scale-110 transition-all transform-gpu shadow-lg"
                              aria-label="GitHub"
                            >
                              <i className="fab fa-github text-lg"></i>
                            </a>

                            <a
                              href="#"
                              target="_blank"
                              className="w-12 h-12 mt-8 rounded-full bg-indigo-500/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-indigo-600 hover:scale-110 transition-all transform-gpu shadow-lg"
                              aria-label="Google Play"
                            >
                              <i className="fab fa-google-play text-lg"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Content - Right Side */}
                <div data-aos="fade-left" data-aos-delay="300">
                  <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                    Pruthvi Mohanlal
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Front-end Developer
                  </h2>

                  <div className="space-y-4 mb-8 text-gray-300">
                    <p>
                      Hi there! I'm Pruthvi, a passionate and highly motivated
                      front-end developer with a knack for crafting user-centric
                      web applications. I'm currently in the final year of my
                      BSc (Hons) in Computer Science at the University of
                      Lincoln, expected to graduate in July 2025.
                    </p>
                    <p>
                      My journey into programming began with a desire to create
                      interactive and user-friendly experiences. I quickly
                      gravitated towards the world of Frontend development,
                      mastering the fundamentals of HTML, CSS (including
                      Tailwind CSS), and JavaScript (Vanilla JS and React.js).
                    </p>
                    <p>
                      Driven by a thirst for knowledge, I've also delved into
                      frameworks like Next.js and Vue.js, as well as TypeScript
                      for building robust web applications. My skillset extends
                      beyond the front-end with a solid foundation in Back-End
                      development using Node.js and Python (Flask & Django).
                    </p>

                    <div className="pt-4">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        Technical Skills
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          React.js
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          JavaScript
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          HTML/CSS
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          Node.js
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          Python
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          C++
                        </span>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                          Unity
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-base-200/50 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mr-4">
                        <i className="fas fa-quote-left"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        Personal Note
                      </h3>
                    </div>
                    <p className="text-gray-300 italic">
                      "I'm constantly learning and pushing myself to explore new
                      technologies. In my free time, you'll find me coding on
                      personal projects, playing games, hitting the gym, or
                      participating in team sports like rugby, volleyball, and
                      football."
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/resume"
                      className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
                    >
                      <span>View Resume</span>
                      <i className="fas fa-file-alt transform group-hover:translate-x-1 transition-transform"></i>
                    </Link>
                    <button
                      onClick={() => {
                        window.location.href =
                          "mailto:pruthvimohanlal10@gmail.com";
                      }}
                      className="inline-flex items-center gap-2 bg-base-200/80 hover:bg-base-300 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg transition-all duration-300 group border border-white/10"
                    >
                      <span>Contact Me</span>
                      <i className="fas fa-paper-plane transform group-hover:translate-x-1 transition-transform"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-12 pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block px-3 py-1 mb-4 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
              My Journey
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Education & Experience
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The path that's shaped my development career
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-indigo-500/30 pl-8 ml-4 space-y-10">
              {/* Education Item */}
              <div className="relative" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                <div className="bg-base-300/30 backdrop-blur-lg rounded-xl border border-base-100/20 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      BSc Computer Science
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      2022 - 2025
                    </div>
                  </div>
                  <div className="text-sm text-indigo-300 mb-4">
                    University of Lincoln
                  </div>
                  <p className="text-gray-300">
                    Currently in my final year, focusing on web development and
                    user experience design. Expected to graduate in July 2025
                    with honors.
                  </p>
                </div>
              </div>

              {/* Revvlane Item */}
              <div className="relative" data-aos="fade-up" data-aos-delay="150">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                <div className="bg-base-300/30 backdrop-blur-lg rounded-xl border border-base-100/20 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Revvlane - Car Enthusiast App
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      2024 - Present
                    </div>
                  </div>
                  <div className="text-sm text-indigo-300 mb-4">
                    Self-employed
                  </div>
                  <p className="text-gray-300">
                    Developing a car meetup app that allows enthusiasts to find
                    local events, showcase their vehicles, and connect with the
                    automotive community. Features include personalized car
                    profiles, community forums, meetup discovery, and a social
                    platform where users can share their passion for cars.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      React
                    </span>
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>

              {/* Shopcrescent Item */}
              <div className="relative" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                <div className="bg-base-300/30 backdrop-blur-lg rounded-xl border border-base-100/20 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Shopcrescent - Clothing Brand
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      2022 - Present
                    </div>
                  </div>
                  <div className="text-sm text-indigo-300 mb-4">Co-founder</div>
                  <p className="text-gray-300">
                    Co-founded a premium clothing brand with my sister, offering
                    high-quality apparel including tracksuits, t-shirts, and
                    beanies. Gaining valuable entrepreneurial experience through
                    brand development, e-commerce operations, and product
                    design. Currently working on expanding our collection with
                    new designs.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      E-commerce
                    </span>
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      Shopify
                    </span>
                    <span className="px-3 py-1 bg-base-200/80 text-gray-300 rounded-full text-xs font-medium">
                      Brand Development
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience Item */}
              <div className="relative" data-aos="fade-up" data-aos-delay="250">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                <div className="bg-base-300/30 backdrop-blur-lg rounded-xl border border-base-100/20 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Freelance Developer
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      2021 - Present
                    </div>
                  </div>
                  <div className="text-sm text-indigo-300 mb-4">
                    Self-employed
                  </div>
                  <p className="text-gray-300">
                    Designed and developed websites and applications for various
                    clients. Created responsive, user-friendly interfaces with
                    modern frameworks.
                  </p>
                </div>
              </div>

              {/* Personal Projects Item */}
              <div className="relative" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900"></div>
                <div className="bg-base-300/30 backdrop-blur-lg rounded-xl border border-base-100/20 p-6 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      Personal Projects
                    </h3>
                    <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium">
                      Ongoing
                    </div>
                  </div>
                  <div className="text-sm text-indigo-300 mb-4">
                    Personal Portfolio
                  </div>
                  <p className="text-gray-300">
                    Continuously working on personal projects including web
                    applications, mobile games, and open-source contributions.
                    This helps me stay current with industry trends and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
