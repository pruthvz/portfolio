import Res1 from "../../assets/1.jpg";
import Res2 from "../../assets/2.jpg";

function Resume() {
  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <section className="bg-white dark:bg-base-200 pb-5">
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
                My Resume
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
            <h1 className=" text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              My CV/Resume
            </h1>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:p-20">
          <img src={Res1} alt="" />
          <img src={Res2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
