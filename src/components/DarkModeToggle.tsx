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
      className="fixed top-6 right-6 bg-gray-200 dark:bg-gray-800 dark:text-white px-4 py-3 rounded-full transition hover:scale-110 font-bold"
      aria-label="Toggle dark mode"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
