import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-base-200 to-base-300 text-gray-300 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-indigo-500/5 rounded-full filter blur-3xl left-1/4 -bottom-20 opacity-60"></div>
        <div className="absolute w-80 h-80 bg-primary/5 rounded-full filter blur-3xl right-1/4 -top-20 opacity-60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          {/* Footer Top - Links and Social */}
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* About Column */}
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-4">
                  Pruthvi Mohanlal
                </h2>
                <p className="text-gray-400 mb-6 max-w-md">
                  Front-end developer with a passion for creating modern and
                  responsive web applications.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-base-200/70 border border-white/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://github.com/pruthvz"
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-base-200/70 border border-white/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h3>
                <nav className="grid grid-cols-2 gap-3">
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>Home</span>
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>About</span>
                  </Link>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>Projects</span>
                  </Link>
                  <Link
                    to="/resume"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>Resume</span>
                  </Link>
                  <a
                    href="mailto:pruthvimohanlal10@gmail.com"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>Contact</span>
                  </a>
                  <a
                    href="https://shopcrescent.uk/"
                    target="_blank"
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-xs text-indigo-500 transform group-hover:translate-x-1 transition-transform"></i>
                    <span>Shopcrescent</span>
                  </a>
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Education
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      <i className="fas fa-graduation-cap text-sm"></i>
                    </div>
                    <div>
                      <p className="text-gray-400">University of Lincoln</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent my-10 max-w-6xl mx-auto"></div>

          {/* Footer Bottom */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Pruthvi Mohanlal. All rights reserved.
            </p>
            <div className="mt-2 text-xs text-gray-600">
              <p>Built with React, Vite, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
