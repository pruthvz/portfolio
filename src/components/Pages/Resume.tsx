import { useState } from "react";
import Res1 from "../../assets/1.jpg";
import Res2 from "../../assets/2.jpg";

function Resume() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-up">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                My Resume
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-6" data-aos="fade-up" data-aos-delay="100">
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              A comprehensive overview of my education, experience, and technical skills.
            </p>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Resume Navigation */}
            <div className="text-center mb-12" data-aos="fade-up">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  Resume Preview
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
                Interactive Resume
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Navigate through the pages to view my complete professional background
              </p>
            </div>

            {/* Page Navigation Tabs */}
            <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                <button
                  onClick={() => setActivePage(1)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activePage === 1
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Page 1
                </button>
                <button
                  onClick={() => setActivePage(2)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activePage === 2
                      ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  Page 2
                </button>
              </div>
            </div>

            {/* Resume Display */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 md:p-8">
                <div className="transition-all duration-300 transform">
                  {activePage === 1 ? (
                    <div data-aos="fade-right" data-aos-duration="500">
                      <img
                        src={Res1}
                        alt="Resume Page 1"
                        className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      />
                    </div>
                  ) : (
                    <div data-aos="fade-left" data-aos-duration="500">
                      <img
                        src={Res2}
                        alt="Resume Page 2"
                        className="w-full h-auto max-w-4xl mx-auto rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      />
                    </div>
                  )}
                </div>

                {/* Page Navigation Arrows */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={() => setActivePage(1)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activePage === 1
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                    disabled={activePage === 1}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Page {activePage} of 2
                  </div>

                  <button
                    onClick={() => setActivePage(2)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activePage === 2
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                    disabled={activePage === 2}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-16 grid md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Have questions about my experience or want to discuss opportunities?
                </p>
                <button
                  onClick={() => {
                    window.location.href = "mailto:pruthvimohanlal10@gmail.com";
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center group"
                >
                  <span>Send Email</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Work Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Check out my detailed work history and project highlights.
                </p>
                <a
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center group"
                >
                  <span>View Experience</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore my projects and applications to see my skills in action.
                </p>
                <a
                  href="/projects"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium inline-flex items-center group"
                >
                  <span>View Projects</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
