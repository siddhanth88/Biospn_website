import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-blue-600 dark:text-cyan-300 mb-6">
        Contact Us
      </h1>
      <p className="mb-8 text-gray-700 dark:text-gray-300">
        We'd love to hear from you! Fill out the form below or reach us at
        <span className="font-semibold"> info@biospn.com</span>.
      </p>

      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transform transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
