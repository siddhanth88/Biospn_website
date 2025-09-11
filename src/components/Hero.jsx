import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
  className="relative bg-cover bg-center h-[100vh] flex flex-col items-center justify-center text-center px-6"
  style={{
    backgroundImage: "url('/images/lab-bg.jpg')",
  }}
>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10">
        {/* Gradient Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
          Pure Solutions for a Better Tomorrow
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Innovative HiPurity systems designed with precision and quality.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link
            to="/products"
            className="px-6 py-3 rounded-lg text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-105 transform transition"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
