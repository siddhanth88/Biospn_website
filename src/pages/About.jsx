import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-cyan-300 mb-6">
        About BIOSPN HiPurity
      </h1>
      <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        At <span className="font-semibold">BIOSPN HiPurity</span>, we are
        committed to developing innovative and reliable HiPurity systems
        designed for industries such as pharmaceuticals, biotechnology, and
        healthcare. Our solutions combine precision engineering with cutting-edge
        technology to ensure the highest standards of safety, efficiency, and
        sustainability.
      </p>
    </div>
  );
};

export default About;
