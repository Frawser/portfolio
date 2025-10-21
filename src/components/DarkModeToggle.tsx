"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="fixed top-6 right-6 text-4xl transition-transform hover:rotate-180 duration-300 z-50"
    >
      <CgDarkMode
        className={
          resolvedTheme === "dark"
            ? "text-cyan-400"
            : "text-gray-800"
        }
      />
    </button>
  );
}
