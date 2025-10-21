"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DownloadCVButton() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <a
      href="/Mikael-Fernandez-Olsson-CV.pdf"
      download
      className={`fixed top-6 left-6 z-50 px-6 py-3 rounded-full border transition-all duration-300 font-semibold shadow-sm ${
        isDark
          ? "border-cyan-400 text-cyan-300 hover:bg-cyan-400/10"
          : "border-black text-black hover:bg-black hover:text-white"
      }`}
    >
      Download CV
    </a>
  );
}
