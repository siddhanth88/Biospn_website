import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";


function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">BIOSPN HIPURITY</span>
        </div>

        {/* Links */}
        <div className="flex gap-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <DarkModeButton />
          </div>
      </nav>
    </header>
  );
}

export default Navbar;
