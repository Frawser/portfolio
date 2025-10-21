"use client"

import { goals } from "@/data/data";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PersonalGoals() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section className="flex justify-center py-24 px-6 transition-colors duration-500">
      <div className="w-full sm:w-4/5 md:w-3/5">
        <h2 className={`${isDark ? "text-cyan-300" : "text-gray-800"} text-3xl md:text-4xl font-bold mb-14 text-center`}>
          Personal Goals
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2">
          {goals.map((goal, index) => (
            <article
              key={index}
              className={`backdrop-blur-md rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-all duration-300 border
                ${isDark
                  ? "bg-black/20 border-white/20"
                  : "bg-white/80 border-black/10"
                }`}
            >
              <h3 className={`${isDark ? "text-cyan-300" : "text-black"} text-lg md:text-xl font-semibold mb-3`}>
                {goal.title}
              </h3>
              <p className={`${isDark ? "text-white/80" : "text-black/80"} leading-relaxed`}>
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
