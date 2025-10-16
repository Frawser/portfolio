"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const newMode = !dark;
    setDark(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <button
      onClick={toggleDark}
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-6 right-6 z-50 px-6 py-3
                 rounded-full border border-cyan-400 text-cyan-600 dark:text-cyan-300
                 bg-transparent hover:bg-cyan-100 dark:hover:bg-cyan-400/10
                 transition-all duration-300 font-semibold shadow-sm cursor-pointer"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
