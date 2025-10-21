"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function About() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="about"
      className={`max-w-[60%] mx-auto py-16 flex flex-col md:flex-row items-start justify-between gap-8
                  transition-colors duration-500`}
    >
      <h2
        className={`text-7xl font-semibold flex-1 text-left
                    ${isDark ? "text-cyan-300" : "text-black"}`}
      >
        Frontend Developer
      </h2>
      <p
        className={`flex-1 leading-relaxed text-lg
                    ${isDark ? "text-gray-300" : "text-black/80"}`}
      >
        I&apos;m a frontend developer passionate about creating modern, minimal,
        and responsive interfaces. I love building digital experiences that are
        smooth, intuitive, and visually clean. Constantly exploring new tools
        and techniques, I enjoy turning ideas into functional, engaging web
        experiences.
      </p>
    </section>
  );
}
