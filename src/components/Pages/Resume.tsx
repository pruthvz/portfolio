import { useState, useEffect, useRef } from "react";
import Res1 from "../../assets/1.jpg";
import Res2 from "../../assets/2.jpg";

function Resume() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePage, setActivePage] = useState(1);
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
        className="relative min-h-[40vh] flex items-center overflow-hidden"
      >
        {/* Interactive Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-80 h-80 bg-indigo-500/20 rounded-full filter blur-3xl transition-all duration-300 ease-out"
            style={{
              top: mousePosition.y * 0.05 - 40,
              left: mousePosition.x * 0.05 - 40,
              transform: `translate(${mousePosition.x * -0.02}px, ${
                mousePosition.y * -0.02
              }px)`,
              opacity: 0.7,
            }}
          ></div>
          <div
            className="absolute w-60 h-60 bg-primary/15 rounded-full filter blur-3xl transition-all duration-500 ease-out"
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
            <div className="inline-block px-3 py-1 mb-4 bg-indigo-500/10 backdrop-blur-sm text-indigo-400 rounded-full text-sm font-medium">
              My Credentials
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600">
                Resume & CV
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              My professional experience, education and skills in detail
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#resume-content" className="text-white/50 hover:text-white">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section id="resume-content" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div
            className="bg-base-300/30 backdrop-blur-lg rounded-2xl border border-base-100/20 shadow-xl overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="p-8 lg:p-12">
              {/* Resume Navigation */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white">
                    Interactive Resume Preview
                  </h2>
                  <p className="text-gray-400">
                    Navigate through the pages or download the full version
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => setActivePage(1)}
                    className={`px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                      activePage === 1
                        ? "bg-indigo-500 text-white"
                        : "bg-base-200/80 text-gray-300 hover:bg-base-200 border border-white/10"
                    }`}
                  >
                    <i className="fas fa-file-alt"></i>
                    <span>Page 1</span>
                  </button>
                  <button
                    onClick={() => setActivePage(2)}
                    className={`px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                      activePage === 2
                        ? "bg-indigo-500 text-white"
                        : "bg-base-200/80 text-gray-300 hover:bg-base-200 border border-white/10"
                    }`}
                  >
                    <i className="fas fa-file-alt"></i>
                    <span>Page 2</span>
                  </button>
                  {/* <a
                    href="/path-to-your-resume.pdf"
                    download
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-download"></i>
                    <span>Download PDF</span>
                  </a> */}
                </div>
              </div>

              {/* Resume Display */}
              <div className="relative bg-base-200/50 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 p-4 md:p-8">
                <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/10 to-indigo-300/10 rounded-xl blur-sm opacity-60"></div>

                <div className="relative">
                  {/* Resume Page Display */}
                  <div className="transition-all duration-300 transform">
                    {activePage === 1 ? (
                      <div data-aos="fade-right" data-aos-duration="500">
                        <img
                          src={Res1}
                          alt="Resume Page 1"
                          className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform-gpu hover:scale-[1.01]"
                        />
                      </div>
                    ) : (
                      <div data-aos="fade-left" data-aos-duration="500">
                        <img
                          src={Res2}
                          alt="Resume Page 2"
                          className="w-full h-auto max-w-3xl mx-auto rounded-lg shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform-gpu hover:scale-[1.01]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Page Navigation */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={() => setActivePage(1)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activePage === 1
                          ? "bg-indigo-500 text-white"
                          : "bg-base-200/80 text-gray-300 hover:bg-base-200 border border-white/10"
                      }`}
                      disabled={activePage === 1}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </button>

                    <div className="text-gray-400 text-sm">
                      Page {activePage} of 2
                    </div>

                    <button
                      onClick={() => setActivePage(2)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activePage === 2
                          ? "bg-indigo-500 text-white"
                          : "bg-base-200/80 text-gray-300 hover:bg-base-200 border border-white/10"
                      }`}
                      disabled={activePage === 2}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-10 grid md:grid-cols-3 gap-6">
                <div className="bg-base-200/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Contact Me
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Have questions about my experience or want to discuss
                    opportunities?
                  </p>
                  <button
                    onClick={() => {
                      window.location.href =
                        "mailto:pruthvimohanlal10@gmail.com";
                    }}
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center"
                  >
                    <span>Send Email</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>

                <div className="bg-base-200/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Work Experience
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Check out my detailed work history and project highlights.
                  </p>
                  <a
                    href="/about#experience"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center"
                  >
                    <span>View Experience</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>

                <div className="bg-base-200/50 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
                    <i className="fas fa-code"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Portfolio
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Explore my projects and applications to see my skills in
                    action.
                  </p>
                  <a
                    href="/projects"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-medium inline-flex items-center"
                  >
                    <span>View Projects</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
