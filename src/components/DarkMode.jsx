import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition duration-300 ease-in-out"
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center text-sm
          ${dark ? "translate-x-7 bg-gray-800 text-yellow-300" : "translate-x-0 bg-white text-gray-800"}`}
      >
        {dark ? "🌙" : "☀️"}
      </div>
    </button>
  );
};

export default DarkMode;
