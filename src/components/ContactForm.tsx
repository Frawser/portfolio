"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const inputClass = `flex-1 px-4 py-3 rounded-lg border focus:ring-2 outline-none bg-transparent transition-all duration-300 ${
    isDark
      ? "text-white placeholder:text-gray-400 border-cyan-400 focus:ring-cyan-300"
      : "text-black placeholder:text-gray-500 border-black/40 focus:ring-gray-400"
  }`;

  const textareaClass = `w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none bg-transparent transition-all duration-300 mb-4 ${
    isDark
      ? "text-white placeholder:text-gray-400 border-cyan-400 focus:ring-cyan-300"
      : "text-black placeholder:text-gray-500 border-black/40 focus:ring-gray-400"
  }`;

  return (
    <section className="flex justify-center py-16 px-4 transition-colors duration-500">
      <form
        action="https://formspree.io/f/xjkalkjq"
        method="POST"
        className={`w-full max-w-3xl md:w-3/5
          backdrop-blur-md rounded-2xl shadow-sm p-8 md:p-10
          border transition-all duration-300
          ${isDark ? "bg-black/20 border-cyan-400" : "bg-white/80 border-black/10"}
        `}
      >
        <h2 className={`text-3xl font-bold mb-6 ${isDark ? "text-cyan-300" : "text-black"}`}>
          Contact Me
        </h2>

        {submitted && (
          <p className={isDark ? "text-cyan-300 mb-4" : "text-black/80 mb-4"}>
            Thanks! Your message has been sent.
          </p>
        )}

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input type="text" name="name" placeholder="Your Name" required className={inputClass} />
          <input type="email" name="email" placeholder="Your Email" required className={inputClass} />
        </div>

        <textarea name="message" placeholder="Your Message" required rows={6} className={textareaClass} />

        <button
          type="submit"
          className={`px-6 py-3 rounded-full border transition-all duration-300 font-semibold shadow-sm
            ${isDark
              ? "border-cyan-400 text-cyan-300 bg-transparent hover:bg-cyan-400/10"
              : "border-black/40 text-black bg-transparent hover:bg-black/10"
            }`}
          onClick={() => setSubmitted(true)}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
