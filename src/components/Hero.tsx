"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden transition-colors duration-500">
      <h1
        className={`text-5xl font-bold drop-shadow-sm ${
          resolvedTheme === "dark"
            ? "text-transparent bg-clip-text bg-linear-to-r from-cyan-500 via-cyan-300 to-cyan-500"
            : "text-black"
        }`}
      >
        Mikael Fernandez Olsson
      </h1>

      <p
        className={`mt-4 text-lg tracking-wide ${
          resolvedTheme === "dark" ? "text-cyan-200/80" : "text-gray-700"
        }`}
      >
        Frontend Developer • Versatile and Flexible • Continuous Growth
      </p>

      <Link
        href="#about"
        scroll={true}
        className={`mt-8 inline-block px-8 py-3 rounded-full border transition-all duration-300 font-medium ${
          resolvedTheme === "dark"
            ? "border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
            : "border-black text-black hover:bg-black hover:text-white"
        }`}
      >
        View Portfolio
      </Link>
    </section>
  );
}
