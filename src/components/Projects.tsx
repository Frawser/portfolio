"use client";

import { projects } from "@/data/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="projects"
      className="flex justify-center py-24 px-6 scroll-mt-24 transition-colors duration-500"
      aria-labelledby="projects-heading"
    >
      <div className="w-full sm:w-4/5 md:w-3/5">
        <h2
          id="projects-heading"
          className={`${isDark ? "text-cyan-300" : "text-gray-800"} text-3xl md:text-4xl font-bold mb-14 text-center`}
        >
          Projects
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`group backdrop-blur-md rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-all duration-300 border
                ${isDark
                  ? "bg-black/20 border-white/20"
                  : "bg-white/80 border-black/10"
                }`}
            >
              <h3 className={`${isDark ? "text-cyan-300" : "text-black"} text-xl font-semibold mb-3`}>
                {project.title}
              </h3>
              <p className={`${isDark ? "text-white/80" : "text-black/80"} mb-4 leading-relaxed`}>
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className={`text-xs font-medium px-3 py-1 rounded-full
                      ${isDark
                        ? "bg-cyan-900/30 text-cyan-300"
                        : "bg-cyan-100 text-cyan-700"
                      }`}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className={`${isDark ? "text-cyan-300" : "text-cyan-600"} text-sm font-semibold hover:underline`}
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
