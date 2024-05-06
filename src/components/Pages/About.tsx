function About() {
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
            <span className="text-xs  rounded-full text-white px-4 py-1.5 mr-3">
              About me
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
            About me
          </h1>
        </div>
      </section>
      <section className="bg-white dark:bg-base-100">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-1 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="picture of me"
          />
          <img
            className="mx-auto hidden dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="picture of me"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              I'm Pruthvi Mohanlal
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Hi there! I'm Pruthvi, a passionate and highly motivated front-end
              developer with a knack for crafting user-centric web applications.
              I'm currently in the final year of my BSc (Hons) in Computer
              Science at the University of Lincoln, expected to graduate in July
              2025.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              My journey into programming began with a desire to create
              interactive and user-friendly experiences. I quickly gravitated
              towards the word of Frontend development, mastering the
              fundamentals of HTML, CSS (including Tailwind CSS), and JavaScript
              (Vanilla JS and React.js). Driven by a thirst for knowledge. I've
              also delved into frameworks like Next.js and Vue.js, as well as
              Typescript building robust web applications.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              But my skillset extends beyond the front-end. I have a solid
              foundation in Back-End development with Node.js and Python (Flask
              & Django) experience. This allows me to understand the bigger
              picture and collaborate effectively with back-end developers. For
              game development, I've explored C++ using the Unity Game Engine.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              However, technical expertise is just one piece of the puzzle.
              Effective communication and strong problem-solving skills are
              crucial for success. That's why I actively hone these skills
              through teamwork and independent projects.
            </p>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              I'm constantly learning and pushing myself to explore new
              technologies. In my free time, you'll find me coding on personal
              projects, playing games, hitting the gym, or participating in team
              sports like rugby, volleyball, and football.
            </p>
            <h4 className="text-gray-200 text-xl font-bold pb-4">
              Are you looking for a Front-End Developer who is passionate,
              skilled, and a team player?
            </h4>
            <p className="mb-6 font-light text-gray-200 md:text-lg dark:text-gray-200">
              Let's connect! I'm eager to discuss how my skills and enthusiasm
              can contribute to your next project.
            </p>
            <div className="pt-5">
              <a
                href="/resume"
                className="p-3 pl-10 pr-10 bg-primary text-white rounded-full"
              >
                <i className="fa-solid fa-arrow-down"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pruthvi-mohanlal-b40602190/"
                target="_blank"
                className="p-3 ml-2  bg-gray-600 rounded-full text-white"
              >
                <i className="fa-brands fa-linkedin-in "></i>
              </a>
              <a
                href="https://github.com/pruthvz"
                target="_blank"
                className="p-3 ml-2  bg-gray-600 rounded-full text-white"
              >
                <i className="fa-brands fa-github "></i>
              </a>
              <a
                href="#"
                target="_blank"
                className="p-3 ml-2 bg-gray-600 rounded-full text-white"
              >
                <i className="fa-brands fa-google-play"></i>
              </a>

              <a
                href="https://twitter.com/justpruthvi"
                target="_blank"
                className="p-3 ml-2 bg-gray-600 rounded-full text-white"
              >
                <i className="fa-brands fa-x-twitter "></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
