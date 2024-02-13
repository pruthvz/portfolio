import React from "react";
import { TypeAnimation } from "react-type-animation";

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
    </div>
  );
}

export default Landing;
