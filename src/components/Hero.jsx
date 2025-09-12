import React from "react";

const Hero = () => {
  return (
    <section
  className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-6"
  style={{ backgroundImage: "url('/images/lab-bg.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10">
    <h1 className="text-5xl font-bold text-white mb-4">
      Pure Solutions for a Better Tomorrow
    </h1>
    <p className="text-lg text-gray-200 max-w-2xl mb-6">
      Innovative HiPurity systems designed with precision and quality.
    </p>
    <a
      href="/products"
      className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition"
    >
      Explore Products
    </a>
  </div>
</section>

  );
};

export default Hero;
