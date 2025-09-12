import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 dark:text-cyan-400">BIOSPN HiPurity</h2>
          <p className="mt-2 text-sm">
            Delivering innovative HiPurity systems for tomorrow’s industries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-500">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        © {new Date().getFullYear()} BIOSPN HiPurity. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
