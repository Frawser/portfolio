"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-16 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-16
                       bg-white/20 dark:bg-gray-900/40 backdrop-blur-md border-t border-gray-200 dark:border-gray-800
                       rounded-t-2xl transition-colors duration-300">
      <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-0 text-sm">
        © {new Date().getFullYear()} Mikael Fernandez Olsson
      </p>

      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/mikael-fernandez-olsson-3822941b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Frawser"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
