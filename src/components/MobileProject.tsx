import { useState, useEffect } from "react";

interface MobileProjectProps {
  project: {
    title: string;
    subTitle: string;
    desc: string;
    screenshots: string[];
    github: string;
    website: string;
    hash1: string;
    hash2: string;
    hash3: string;
    hash4: string;
  };
  index: number;
}

function MobileProject({ project, index }: MobileProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Touch/Mouse event handlers for swiping
  const handleStart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleMove = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - clientX;
    
    // Only change image if swipe is significant enough
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left - next image
        setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
      } else {
        // Swiped right - previous image
        setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
      }
      setIsDragging(false);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project.screenshots.length]);

  const getCategoryColor = (hash: string) => {
    if (hash.includes("React")) return "purple";
    if (hash.includes("Firebase")) return "orange";
    if (hash.includes("Maps")) return "green";
    if (hash.includes("Real-time")) return "blue";
    return "blue";
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg col-span-1 md:col-span-2 lg:col-span-1"
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-duration="400"
    >
      {/* Mobile Phone Carousel */}
      <div className="relative bg-gray-50 dark:bg-gray-900 p-8 flex justify-center">
        {/* iPhone Mockup */}
        <div className="relative">
          <div className="bg-[#2a2a2a] rounded-[2.5rem] p-1 shadow-2xl">
            <div className="bg-black rounded-[1.8rem] overflow-hidden w-52 aspect-[9/19.5] relative">
              {/* Current Image */}
              <img
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isDragging ? "scale-95" : "scale-100"
                }`}
                src={project.screenshots[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                style={{ cursor: 'grab' }}
              />
              
              {/* Swipe Indicators */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Left Arrow (Previous) */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Right Arrow (Next) */}
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-white/30 rounded-full"></div>
        </div>
      </div>

      <div className="p-6">
        {/* Project Info */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 ${getColorClasses(getCategoryColor(project.hash1))} text-xs rounded-full`}>
            Mobile App
          </span>
          <div className="flex gap-2">
            <a
              href={project.website !== "#coming-soon" ? project.website : "#"}
              target="_blank"
              className={`w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors ${
                project.website !== "#coming-soon" 
                  ? "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" 
                  : "text-gray-400 dark:text-gray-500 cursor-not-allowed"
              }`}
            >
              <i className="fas fa-external-link-alt text-xs"></i>
            </a>
            <a
              href={project.github}
              target="_blank"
              className={`w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors ${
                project.github !== "#!" 
                  ? "text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400" 
                  : "text-gray-400 dark:text-gray-500 cursor-not-allowed"
              }`}
            >
              <i className="fab fa-github text-xs"></i>
            </a>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Image Navigation Dots */}
        <div className="flex justify-center gap-2 mb-4">
          {project.screenshots.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentImageIndex(dotIndex)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dotIndex === currentImageIndex
                  ? "bg-purple-500 dark:bg-purple-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-500"
              }`}
            />
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
          <span>{project.hash1?.replace("#", "")}</span>
          <span>•</span>
          <span>{project.hash2?.replace("#", "")}</span>
          <span>•</span>
          <span>{project.hash3?.replace("#", "")}</span>
          <span>•</span>
          <span>{project.hash4?.replace("#", "")}</span>
        </div>
      </div>
    </div>
  );
}

export default MobileProject;
