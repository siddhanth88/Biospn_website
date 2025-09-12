import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
  <div className="container mx-auto px-6 py-3 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
      BioSPN
    </h1>
    <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
      <li><a href="/" className="hover:text-blue-600 dark:hover:text-yellow-400">Home</a></li>
      <li><a href="/products" className="hover:text-blue-600 dark:hover:text-yellow-400">Products</a></li>
      <li><a href="/about" className="hover:text-blue-600 dark:hover:text-yellow-400">About</a></li>
      <li><a href="/contact" className="hover:text-blue-600 dark:hover:text-yellow-400">Contact</a></li>
    </ul>
    <DarkMode />
  </div>
</nav>
  );
};

export default Navbar;
