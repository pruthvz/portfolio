import Project from "../Projects";

function Projects() {
  return (
    <div>
      <section className="bg-white dark:bg-base-200 pb-20">
        <div
          className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
          data-aos="fade-up"
        >
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              My Projects
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Personal Projects, Client Projects GitHub Contributions
          </h1>
        </div>
      </section>

      <section className="bg-white dark:bg-base-100">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div
            className="mr-auto place-self-center lg:col-span-7"
            data-aos="fade-right"
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Actively working on
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              className=" btn btn-primary inline-flex items-center justify-center text-white"
            >
              View Project
            </a>
          </div>
          <div
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
            data-aos="fade-left"
          >
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap p-2 md:p-10 ">
        {Project.myProjects.map(function (project) {
          return (
            <div className="xl:w-1/4  md:w-1/2 p-4" data-aos="fade-up">
              <div className="bg-base-300 bg-opacity-100 p-6 rounded-lg transform hover:scale-105 transition duration-300 cursor-auto">
                <img
                  className="h-44  rounded w-full object-cover object-center mb-6"
                  src={project.img}
                  alt={project.imgAlt}
                />
                <h3 className="tracking-widest text-primary text-xs font-medium title-font mt-3">
                  {project.subTitle}
                </h3>
                <h2 className="text-lg text-gray-200 font-medium title-font mb-4">
                  {project.title}
                </h2>
                <p className="leading-relaxed text-base text-gray-400">
                  {project.desc}
                </p>
                {/* hashtags if they look bad delete it */}

                {/* hashtags */}
                {/* CODE ICONS */}
                <div className="row pt-2 text-accent text-lg ">
                  <a href={project.website} target="_blank">
                    <i className="fas fa-globe transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                  <a href={project.github} target="_blank">
                    <i className="fas fa-code pl-2 transform transition duration-300 hover:text-purple-200 hover:scale-110"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="bg-white dark:bg-base-300 p-5 md:p-10 text-center pt-10 md:pt-20 pb-10 md:pb-20 flex items-center justify-center">
        <h1
          className="mb-2 md:mb-4 text-xl md:text-3xl font-extrabold tracking-tight leading-none xl:text-5xl dark:text-white mx-auto"
          data-aos="fade-right"
        >
          Published Games
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <div
            className="stats shadow p-2"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img
                      src="https://play-lh.googleusercontent.com/T8t5IS1U9OdmAz_abEG3EEFICAGK-ACPmffMyuGGTkbO_PYnhAi_MPdDNybMW0ax-1GI=s180-rw"
                      alt="Tevoo"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-title">Tevoo</div>
              <div className="stat-value text-primary">10+</div>
              <div className="stat-desc">Downloads</div>
            </div>
          </div>
          <div
            className="stats shadow p-2"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img
                      src="https://play-lh.googleusercontent.com/vNdn7evHek1LW9miGRZXou4VotIpyDoYk8PWB_fO4XZaNqTYvaUpeD0V5pqG9y3_aQ=s180-rw"
                      alt="Tevoo"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-title">Precise Bolter</div>
              <div className="stat-value text-primary">10+</div>
              <div className="stat-desc">Downloads</div>
            </div>
          </div>
          <div
            className="stats shadow p-2"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="stat">
              <div className="stat-figure text-secondary">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <img
                      src="https://play-lh.googleusercontent.com/KyCtXP11MeFN8j0zDIv_7SbJ1JuMzD7YIzkPhtFTfJevt2Sf_9Lp0w-Q1dZiAJ_4ts73=s180-rw"
                      alt="Tevoo"
                    />
                  </div>
                </div>
              </div>
              <div className="stat-title">Dazzled Dot</div>
              <div className="stat-value text-primary">5+</div>
              <div className="stat-desc">Downloads</div>
            </div>
          </div>

          {/* Repeat the same structure for other game stats */}
        </div>
      </section>
    </div>
  );
}

export default Projects;
