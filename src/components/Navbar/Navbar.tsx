import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Pruthvi Mohanlal
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`text-sm font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                Projects
              </Link>
            </div>

            {/* Right Side - Social Links, Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Social Links */}
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="https://github.com/pruthvz"
                  target="_blank"
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-sm"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                  target="_blank"
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-sm"></i>
                </a>
              </div>
              
              <button
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            to="/"
            className={`block text-sm font-medium transition-colors ${
              isActive("/")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block text-sm font-medium transition-colors ${
              isActive("/about")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`block text-sm font-medium transition-colors ${
              isActive("/projects")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          
          {/* Mobile Social Links */}
          <div className="flex items-center justify-center space-x-4 py-4">
            <a
              href="https://github.com/pruthvz"
              target="_blank"
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
              target="_blank"
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:pruthvimohanlal10@gmail.com"
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-110 transition-all duration-300"
              aria-label="Email"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          {/* Mobile Contact Button */}
          <button
            onClick={() => {
              window.location.href = "mailto:pruthvimohanlal10@gmail.com";
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-4 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
