import React from "react";
import { TypeAnimation } from "react-type-animation";

const skills = [
  { name: "python" },
  { name: "javascript" },
  { name: "django" },
  { name: "tailwind" },
  { name: "angular" },
  { name: "html and css" },
  { name: "lamo testing" },
];

function Landing() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse p-2">
          <div className="mockup-code w-2/3  mx-auto p-4 text-lg  shadow-lg h-96 ">
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
          <div>
            <h1 className="text-xl font-bold text-left mb-4 text-white">
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
            <h1 className="text-9xl font-bold text-primary text-left">
              Pruthvi Mohanlal.
            </h1>
            <p className="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Say Hi</button>
          </div>
        </div>
      </div>
      <section className="bg-white dark:bg-base-100">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
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
      <div class=" min-h-screen bg-base-200 flex items-center justify-center">
        <div class="text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Skills</h1>
          </div>
          <div class="grid grid-rows-4 grid-flow-col gap-4  ">
            {skills.map(function (lang, index) {
              return (
                <>
                  <div
                    className="btn bg-purple-500 text-white btn-wide"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="50"
                  >
                    {lang.name}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
