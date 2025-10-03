import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 - Pruthvi Mohanlal";
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto px-6 text-center">
        {/* 404 Content */}
        <div className="max-w-2xl mx-auto">
          <div className="mb-8" data-aos="fade-up">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
            You ran into a wall
            </span>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-light text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-delay="100">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-delay="200">
            Page Not Found
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="300">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Go Home</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700" data-aos="fade-up" data-aos-delay="500">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Need help finding something?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <Link
                to="/about"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                About Me
              </Link>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
              <button
                onClick={() => {
                  window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
