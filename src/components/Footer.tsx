"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full py-6 mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16
                  rounded-t-2xl backdrop-blur-md border-t transition-all duration-300
                  ${isDark ? "bg-black/20 border-cyan-400" : "bg-white/80 border-black/10"}`}
    >
      <p className={`mb-4 md:mb-0 text-sm transition-colors duration-300 ${isDark ? "text-cyan-300" : "text-black"}`}>
        © {year} Mikael Fernandez Olsson
      </p>

      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/mikael-fernandez-olsson-3822941b3/"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-300 text-xl ${isDark ? "text-cyan-300 hover:text-cyan-400" : "text-black hover:text-gray-600"}`}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Frawser"
          target="_blank"
          rel="noopener noreferrer"
          className={`transition-colors duration-300 text-xl ${isDark ? "text-cyan-300 hover:text-cyan-400" : "text-black hover:text-gray-600"}`}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
