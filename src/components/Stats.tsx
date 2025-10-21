"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Stats() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const articles = [
    {
      title: "2+ Years",
      description: "Frontend development through studies and internship projects.",
    },
    {
      title: "15+ Projects",
      description: "Built fullstack web applications from the ground up.",
    },
    {
      title: "Versatile Skill Set",
      description: "Comfortable working across design, frontend, and backend.",
    },
    {
      title: "Continuous Growth",
      description: "Always expanding my skill set with modern tools.",
    },
  ];

  return (
    <section
      aria-labelledby="stats-title"
      className={`max-w-[60%] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-colors duration-500`}
    >
      <h3 id="stats-title" className="sr-only">
        Developer Stats
      </h3>

      {articles.map((item, index) => (
        <article
          key={index}
          className={`rounded-2xl p-6 shadow-sm backdrop-blur-md border transition hover:shadow-md hover:-translate-y-1 duration-300
            ${isDark ? "bg-black/20 border-white/20" : "bg-white/80 border-black/10"}
          `}
        >
          <h3 className={`${isDark ? "text-cyan-300" : "text-black"} text-2xl font-semibold`}>
            {item.title}
          </h3>
          <p className={`${isDark ? "text-white/80" : "text-black/70"} mt-2 text-sm leading-relaxed`}>
            {item.description}
          </p>
        </article>
      ))}
    </section>
  );
}
