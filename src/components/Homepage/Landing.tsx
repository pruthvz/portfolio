import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const skills = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "Node.JS" },
  { name: "C#" },
  { name: "C++" },
  { name: "Next.JS" },
  { name: "React.JS" },
  { name: "Vite.JS" },
  { name: "Django" },
  { name: "TailwindCSS" },
  { name: "HTML/CSS" },
  { name: "Unity 2D/3D" },
  { name: "MySQL" },
  { name: "Git" },
  { name: "GitHub" },
];

function Landing() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div
          className="hero-content flex-col lg:flex-row-reverse p-3"
          data-aos="fade-up"
        >
          <div className="w-full mx-auto lg:w-2/3">
            <div className="mockup-code mx-auto p-4 text-lg shadow-lg h-96 ">
              <pre data-prefix="$">
                <code>npm i portfolio</code>
              </pre>
              <pre data-prefix=">" className="text-warning">
                <code>installing...</code>
              </pre>
              <pre data-prefix=">" className="text-success">
                <code>Name: "Pruthvi Mohanlal"</code>
              </pre>
              <pre data-prefix="" className="text-success">
                <code>Age: "20"</code>
              </pre>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl lg:text-3xl font-bold mb-4 text-white">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Hi there, my name is",
                  1000,
                ]}
                wrapper="span"
                speed={50}
              />
            </h1>
            <h1 className="text-6xl lg:text-9xl font-bold text-primary">
              Pruthvi Mohanlal.
            </h1>
            <p className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Say Hi</button>
          </div>
        </div>
      </div>
      {/* responsiveness */}

      <section className="bg-white dark:bg-base-100">
        <div
          className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block hover:scale-110 transition-all "
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              About me
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="inline-flex items-center btn btn-primary text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Resume
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="text-center">
          <div>
            <h2 className="mb-4 text-3xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 md:p-20 rounded-2xl">
            {skills.map((lang, index) => (
              <div
                key={index}
                className="p-4 bg-gray-700 hover:bg-white hover:text-black hover:cursor-pointer rounded-lg hover:scale-110 transition-all text-white btn-wide mb-4 ml-4"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="50"
              >
                {lang.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="min-h-screen bg-base-100 ">
        <div className="container px-5 py-24 mx-auto" data-aos="fade-up">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                My Personal Projects
              </h2>
              <div className="h-1 w-20 bg-primary rounded"></div>
            </div>
          </div>
          {/* start of cards */}
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4  md:w-1/2 p-4">
              <div
                className="bg-base-300 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto"
                data-aos="fade-up"
              >
                <img
                  className="h-44  rounded w-full object-cover object-center mb-6"
                  src="/static/projectImg/spatepate.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font mt-3">
                  Programming Tutorials
                </h3>
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  spatepate
                </h2>
                <p className="leading-relaxed text-base text-gray-400">
                  I created Spatepate to provide developers with comprehensive
                  coding tutorials covering a diverse range of programming
                  languages, including beginner-friendly and advanced content.
                </p>
                {/* hashtags if they look bad delete it */}

                {/* hashtags */}
                {/* CODE ICONS */}
                <div className="row pt-2 text-accent text-lg ">
                  <a
                    href="https://pruthvz.github.io/spatepate/"
                    target="_blank"
                  >
                    <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                  <a
                    href="https://github.com/pruthvz/spatepate"
                    target="_blank"
                  >
                    <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-base-300 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto"
                data-aos="fade-up"
              >
                <img
                  className=" h-48 rounded w-full object-cover object-center mb-6"
                  src="/static/projectImg/oopsdev.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font mt-3">
                  Useful Developer Resources
                </h3>
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  ooopsDev.com
                </h2>
                <p className="leading-relaxed text-base text-gray-400">
                  Initially a joke, ooopsDev.com evolved into a valuable
                  resource upon recognizing its potential utility to a wider
                  audience. It hosts a range of front-end and back-end
                  resources.
                </p>
                {/* hashtags if they look bad delete it */}

                {/* hashtags */}
                {/* CODE ICONS */}
                <div className="row pt-2 text-accent text-lg">
                  <a href="https://ooopsdev.com/#/" target="_blank">
                    <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                  <a
                    href="https://github.com/pruthvz/project-atlas"
                    target="_blank"
                  >
                    <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-base-300 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto"
                data-aos="fade-up"
              >
                <img
                  className="h-52 rounded w-full object-cover object-center mb-6"
                  src="/static/projectImg/diutravels.png"
                  alt="content"
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font mt-3">
                  Travel Website
                </h3>
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  Diu Travels
                </h2>
                <p className="leading-relaxed text-base text-gray-400 ">
                  My debut client project, Diu Travels, involved creating a
                  static travel website showcasing requested destinations,
                  utilizing Material Design Bootstrap.
                </p>
                {/* hashtags if they look bad delete it */}

                {/* hashtags */}
                {/* CODE ICONS */}
                <div className="row pt-2 text-accent text-lg ">
                  <a href="https://diutravels.com/" target="_blank">
                    <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                  <a
                    href="https://github.com/pruthvz/updatedTravelsite"
                    target="_blank"
                  >
                    <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div
                className="bg-base-300 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto"
                data-aos="fade-up"
              >
                <img
                  className="h-52 rounded w-full mb-6"
                  src="/static/projectImg/weee.png"
                  alt="content"
                  height={600}
                  width={1000}
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font mt-3">
                  Next.js Project
                </h3>
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  Project Weee
                </h2>
                <p className="leading-relaxed text-base text-gray-400">
                  I developed this experiment to grasp the fundamentals of
                  Next.js before embarking on a new project with the same
                  framework.
                </p>
                {/* hashtags if they look bad delete it */}

                {/* hashtags */}

                {/* CODE ICONS */}
                <div className="row pt-2 text-accent text-lg ">
                  <a href="https://project-weee.vercel.app/" target="_blank">
                    <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                  <a
                    href="https://github.com/pruthvz/project-weee"
                    target="_blank"
                  >
                    <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* end of cards */}
          </div>
        </div>
        <div className="flex justify-center mt-1">
          <Link to="/projects">
            <a
              className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform border border-white rounded hover:bg-primary hover:border-transparent "
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              View all Projects <i className="fas fa-angle-right"></i>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Landing;
