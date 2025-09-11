import React, { useEffect, useState } from "react";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 dark:text-white shadow"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default DarkModeButton;
