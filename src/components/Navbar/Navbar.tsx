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
    <div className="fixed top-0 w-full z-50">
      {/* Announcement Banner */}
      {/* <div className="bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm text-white py-2 px-4 text-center text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="flex items-center justify-center">
          <i className="fas fa-info-circle mr-2"></i>
          <span>
            Currently working on Revvlane, and crescent launch. Check out our
            new upcoming{" "}
            <a
              href="#"
              className="underline font-medium hover:text-white/80 transition-colors"
            >
              clothing launch
            </a>
            .
          </span>
        </div>
      </div> */}

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-base-300/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="navbar py-3 px-4">
            {/* Logo/Brand */}
            <div className="navbar-start">
              <Link
                to="/"
                className="text-xl font-medium tracking-tight text-white hover:text-primary transition-colors"
              >
                pruthvi mohanlal
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="navbar-center hidden lg:flex">
              <div className="bg-base-300/30 backdrop-blur-md rounded-full p-1">
                <ul className="flex space-x-1">
                  <li>
                    <Link
                      to="/"
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive("/")
                          ? "bg-primary text-white shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive("/projects")
                          ? "bg-primary text-white shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        isActive("/about")
                          ? "bg-primary text-white shadow-md"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side - Social Links & Contact */}
            <div className="navbar-end">
              <div className="hidden md:flex items-center space-x-4 mr-4">
                <a
                  href="https://github.com/pruthvz"
                  target="_blank"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                  target="_blank"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
              </div>

              <button
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="btn btn-primary btn-sm gap-2 text-white shadow-lg hover:shadow-primary/30 transition-all"
              >
                <i className="fas fa-paper-plane text-xs"></i> Contact me
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden ml-4 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <i className="fas fa-times text-lg"></i>
                ) : (
                  <i className="fas fa-bars text-lg"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden bg-base-300/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-primary/20 text-primary"
                    : "text-gray-300 hover:bg-base-200/50 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive("/projects")
                    ? "bg-primary/20 text-primary"
                    : "text-gray-300 hover:bg-base-200/50 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-primary/20 text-primary"
                    : "text-gray-300 hover:bg-base-200/50 hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Mobile Social Links */}
          <div className="flex items-center space-x-4 mt-4 px-4 py-2 border-t border-gray-700/50">
            <a
              href="https://github.com/pruthvz"
              target="_blank"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
              target="_blank"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com/justpruthvi"
              target="_blank"
              className="text-gray-300 hover:text-primary transition-colors"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
