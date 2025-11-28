import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import revvlane from "../../assets/revvlane/img_7268.png";
import wetogether from "../../assets/wetogether/navigation.png";
import spatepate from "../../assets/projectImg/spatepate.png";
import instabooth from "../../assets/projectImg/booth.png";
import crescent from "../../assets/projectImg/crescent.png";
import valocrate from "../../assets/projectImg/valocrate.png";
import "./landing.css"; // Import the CSS file that contains animations


function Landing() {
  useEffect(() => {
    document.title = "Pruthvi Mohanlal - Homepage";
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section - Minimal & Clean */}
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Greeting */}
            <div className="mb-8" data-aos="fade-up" data-aos-duration="800">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>
            </div>

            {/* Main heading */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4">
                <span className="block text-gray-900 dark:text-white">
                  Hi, I'm <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">pruthvi</span>
                </span>
                <span className="block text-gray-600 dark:text-gray-400 text-3xl pt-2 font-light">Code. Coffee. Repeat.</span>
              </h1>
            </div>

            {/* Subtitle with typewriter */}
            <div className="mb-12" data-aos="fade-up" data-aos-delay="400">
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                <TypeAnimation
                  sequence={[
                    "Web Developer & Designer",
                    2000,
                    "Creating digital experiences",
                    2000,
                    "Building modern web applications",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block"
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" data-aos="fade-up" data-aos-delay="600">
              <button
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="group relative px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="relative z-10">Get in Touch</span>
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center" data-aos="fade-up" data-aos-delay="800">
              <a
                href="https://github.com/pruthvz"
                target="_blank"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="1000">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            <span className="text-sm mb-2">Scroll</span>
            <div className="w-6 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>

      {/* About Me Section - Clean & Minimal */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Code Editor Mockup */}
              <div className="relative" data-aos="fade-right" data-aos-duration="800">
                <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                  {/* Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400 font-mono">about.js</div>
                    <div className="w-6"></div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="space-y-2">
                      <div className="text-gray-500">// About Pruthvi</div>
                      <div className="text-blue-400">const</div>
                      <div className="text-white ml-4">
                        <span className="text-blue-400">developer</span> = {"{"}
                      </div>
                      <div className="text-white ml-8">
                        <span className="text-yellow-300">name</span>: <span className="text-green-400">"Pruthvi Mohanlal"</span>,
                      </div>
                      <div className="text-white ml-8">
                        <span className="text-yellow-300">role</span>: <span className="text-green-400">"Web Developer"</span>,
                      </div>
                      <div className="text-white ml-8">
                        <span className="text-yellow-300">skills</span>: [
                      </div>
                      <div className="text-white ml-12">"React", "Next.js", "TypeScript",</div>
                      <div className="text-white ml-12">"JavaScript", "Node.js", "Python",</div>
                      <div className="text-white ml-12">"Tailwind CSS", "Git", "Vite"</div>
                      <div className="text-white ml-8">],</div>
                      <div className="text-white ml-8">
                        <span className="text-yellow-300">passion</span>: <span className="text-green-400">"Creating beautiful web experiences"</span>
                      </div>
                      <div className="text-white ml-4">{"}"}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div data-aos="fade-left" data-aos-duration="800">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                    About Me
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                  Building the web, one pixel at a time
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  I'm a passionate web developer and designer who loves creating 
                  clean, functional, and beautiful digital experiences. With expertise 
                  in modern frontend technologies and a first class honors degree in 
                  Computer Science from the University of Lincoln, I focus on building 
                  responsive, accessible, and performant web applications.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                </div>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span>View More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Clean & Minimal */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Skills & Technologies
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              What I work with
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Modern tools and technologies I use to build exceptional web experiences
            </p>
          </div>

          {/* Interactive Skills View */}
          <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Frontend Technologies */}
              <div className="space-y-4 group/category">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2 transition-all duration-300 group-hover/category:text-blue-500 dark:group-hover/category:text-blue-400">
                  <i className="fas fa-laptop-code text-blue-500 transition-transform duration-300 group-hover/category:rotate-12"></i>
                  Frontend
                </h3>
                <div className="space-y-2">
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-react text-blue-500 text-lg transition-transform duration-300 group-hover:rotate-180"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">React</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-blue-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-react text-gray-900 dark:text-white text-lg transition-transform duration-300 group-hover:rotate-180"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Next.js</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-blue-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-react text-cyan-500 text-lg transition-transform duration-300 group-hover:rotate-180"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">React Native</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-blue-500"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Technologies */}
              <div className="space-y-4 group/category">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2 transition-all duration-300 group-hover/category:text-green-500 dark:group-hover/category:text-green-400">
                  <i className="fas fa-server text-green-500 transition-transform duration-300 group-hover/category:bounce"></i>
                  Backend
                </h3>
                <div className="space-y-2">
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-node text-green-600 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">Node.js</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-js text-blue-600 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">TypeScript</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-js text-yellow-500 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">JavaScript</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-python text-yellow-600 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">Python</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-hashtag text-purple-600 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">C#</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-python text-green-600 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">Django</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-green-300 dark:hover:border-green-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-database text-green-500 text-lg transition-transform duration-300 group-hover:scale-125"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-green-600 dark:group-hover:text-green-400">MongoDB</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-green-500"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styling & Design */}
              <div className="space-y-4 group/category">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2 transition-all duration-300 group-hover/category:text-purple-500 dark:group-hover/category:text-purple-400">
                  <i className="fas fa-paint-brush text-purple-500 transition-transform duration-300 group-hover/category:rotate-12"></i>
                  Styling & Design
                </h3>
                <div className="space-y-2">
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-css3 text-cyan-500 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Tailwind CSS</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-bootstrap text-purple-600 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Bootstrap</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-layer-group text-gray-800 dark:text-gray-200 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">ShadCN</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-rockrms text-cyan-500 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Flowbite</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-paint-brush text-purple-600 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Photoshop</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-figma text-purple-500 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Figma</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-purple-500"></i>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Others */}
              <div className="space-y-4 group/category">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide flex items-center gap-2 transition-all duration-300 group-hover/category:text-orange-500 dark:group-hover/category:text-orange-400">
                  <i className="fas fa-wrench text-orange-500 transition-transform duration-300 group-hover/category:rotate-45"></i>
                  Tools & Others
                </h3>
                <div className="space-y-2">
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-git-alt text-orange-600 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">Git</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-orange-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-bolt text-yellow-500 text-lg transition-transform duration-300 group-hover:animate-pulse"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">Vite</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-orange-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fas fa-cube text-blue-600 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">Webpack</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-orange-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-html5 text-orange-500 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">HTML5</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-orange-500"></i>
                    </div>
                  </div>
                  <div className="tool-tech flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-lg hover:scale-105 cursor-pointer group">
                    <i className="fab fa-css3 text-blue-500 text-lg transition-transform duration-300 group-hover:rotate-12"></i>
                    <span className="text-sm font-medium transition-colors duration-300 group-hover:text-orange-600 dark:group-hover:text-orange-400">CSS3</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="fas fa-external-link-alt text-xs text-orange-500"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Clean & Minimal */}
      <section id="projects" className="py-24 pb-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest web development and design work
            </p>
          </div>

          {/* Mobile Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {/* Revvlane Mobile App */}
            <div className="group" data-aos="fade-up" data-aos-delay="50" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  {/* Mobile Phone Mockup */}
                  <div className="flex justify-center py-8">
                    <div className="relative">
                      <div className="bg-[#2a2a2a] rounded-[2.5rem] p-1 shadow-2xl">
                        <div className="bg-black rounded-[1.8rem] overflow-hidden w-40 aspect-[9/19.5]">
                          <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={revvlane}
                            alt="Revvlane mobile app"
                          />
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full">
                      Mobile App
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Revvlane
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A premium automotive social platform connecting car enthusiasts for meets, garage management, and showcasing vehicles with modern mobile design.
                  </p>
                </div>
              </div>
            </div>

            {/* WeTogether Web App */}
            <div className="group" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  {/* Mobile Phone Mockup */}
                  <div className="flex justify-center py-8">
                    <div className="relative">
                      <div className="bg-[#2a2a2a] rounded-[2.5rem] p-1 shadow-2xl">
                        <div className="bg-black rounded-[1.8rem] overflow-hidden w-40 aspect-[9/19.5]">
                          <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={wetogether}
                            alt="WeTogether web app"
                          />
                        </div>
                      </div>
                      {/* Home indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      Mobile App
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    WeTogether
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A collaborative location-sharing platform enabling groups to set destinations, track members, and coordinate meetups with real-time navigation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Spatepate */}
            <div className="group" data-aos="fade-up" data-aos-delay="150" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={spatepate}
                    alt="Spatepate project"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      React
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://pruthvz.github.io/spatepate/"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/spatepate"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Spatepate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A comprehensive programming tutorial platform with interactive coding examples and beginner-friendly content.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group" data-aos="fade-up" data-aos-delay="200" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={instabooth}
                    alt="Instabooth project"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      React
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://instabooth.netlify.app/"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/photobooth"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Instabooth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A free-to-use photobooth web application where users can capture 4 images, add decorative frames, draw within frames, and download the final collage as a PNG.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group" data-aos="fade-up" data-aos-delay="250" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={valocrate}
                    alt="Valorant Crate Simulator project"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full">
                      React
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://track-valorant.vercel.app/"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="https://github.com/pruthvz/track-valorant"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <i className="fab fa-github text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Valorant Crate Simulator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    An immersive web application that simulates opening Valorant weapon skin crates. Features an inventory system with localStorage persistence. 
                  </p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400" >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    src={crescent}
                    alt="Crescent clothing brand"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full">
                      Shopify
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://shopcrescent.uk/"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i>
                      </a>
                      <a
                        href="#private-business-project"
                        target="_blank"
                        className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <i className="fas fa-lock text-xs"></i>
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Crescent
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A clothing brand business founded in 2022 with my sister, specializing in premium hoodies, tracksuits, and streetwear.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="flex justify-center mt-12 mb-16" data-aos="fade-up" data-aos-delay="400" data-aos-duration="400" >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>View All Projects</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
