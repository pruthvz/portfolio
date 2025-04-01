import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
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
    <div className="bg-gradient-to-b from-base-300 to-base-100 dark:from-gray-900 dark:to-black text-gray-100 min-h-screen flex flex-col justify-center items-center relative">
      {/* Interactive Background */}
      <div ref={headerRef} className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl transition-all duration-300 ease-out"
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
          className="absolute w-80 h-80 bg-primary/10 rounded-full filter blur-3xl transition-all duration-500 ease-out"
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

      <div className="container mx-auto px-4 z-10 text-center">
        {/* 404 Content */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <div className="glitch-container relative inline-block mb-8">
            <h1 className="text-9xl font-bold tracking-tighter text-white opacity-80">
              404
            </h1>
            <div className="absolute inset-0 text-9xl font-bold tracking-tighter text-indigo-500 opacity-50 glitch-1">
              404
            </div>
            <div className="absolute inset-0 text-9xl font-bold tracking-tighter text-primary opacity-50 glitch-2">
              404
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Oops! The page you are looking for might have been removed, had its
            name changed, or is temporarily unavailable.
          </p>

          {/* Mock Terminal */}
          <div className="mockup-code bg-base-300/50 backdrop-blur-lg shadow-lg mx-auto mb-12 text-left max-w-md">
            <pre data-prefix="$" className="text-warning font-mono">
              <code>Error: Page not found (404)</code>
            </pre>
            <pre data-prefix=">" className="text-error font-mono">
              <code>Path could not be located in the site directory</code>
            </pre>
            <pre data-prefix="$" className="text-success font-mono">
              <code>Suggested: return to homepage</code>
            </pre>
          </div>

          <div
            className="flex flex-wrap gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
            >
              <span>Return Home</span>
              <i className="fas fa-home transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-base-200/80 hover:bg-base-300 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 group border border-white/10"
            >
              <span>View Projects</span>
              <i className="fas fa-project-diagram transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Styled Background Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-20">
        <div className="grid grid-cols-12 gap-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-1 md:h-2 bg-indigo-500 rounded-full"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Add this CSS to your global styles or component-level CSS
// .glitch-1 {
//   animation: glitch-1 2s linear infinite alternate-reverse;
// }
// .glitch-2 {
//   animation: glitch-2 3s linear infinite alternate-reverse;
// }
// @keyframes glitch-1 {
//   0% { transform: translate(0); }
//   20% { transform: translate(-2px, 1px); }
//   40% { transform: translate(2px, -1px); }
//   60% { transform: translate(-1px, -1px); }
//   80% { transform: translate(1px, 1px); }
//   100% { transform: translate(0); }
// }
// @keyframes glitch-2 {
//   0% { transform: translate(0); }
//   20% { transform: translate(2px, 1px); }
//   40% { transform: translate(-1px, -2px); }
//   60% { transform: translate(1px, 2px); }
//   80% { transform: translate(-2px, -1px); }
//   100% { transform: translate(0); }
// }
