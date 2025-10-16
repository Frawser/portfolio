"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="flex justify-center py-16 px-4">
      <form
        action="https://formspree.io/f/xjkalkjq"
        method="POST"
        className="w-full max-w-3xl md:w-3/5
                   bg-white/80 dark:bg-gray-900/40
                   backdrop-blur-md border border-gray-100 dark:border-gray-800
                   rounded-2xl shadow-sm p-8 md:p-10
                   transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-300 mb-6">
          Contact Me
        </h2>

        {submitted && (
          <p className="text-green-600 dark:text-green-400 mb-4">
            Thanks! Your message has been sent.
          </p>
        )}

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-cyan-400 focus:ring-2 focus:ring-cyan-300 outline-none bg-transparent text-foreground placeholder:text-gray-500 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-3 rounded-lg border border-cyan-400 focus:ring-2 focus:ring-cyan-300 outline-none bg-transparent text-foreground placeholder:text-gray-500 transition-all"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-lg border border-cyan-400 focus:ring-2 focus:ring-cyan-300 outline-none bg-transparent text-foreground placeholder:text-gray-500 transition-all mb-4"
        />

        <button
          type="submit"
          className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-600 dark:text-cyan-300 bg-transparent hover:bg-cyan-100 dark:hover:bg-cyan-400/10 transition-all duration-300 font-semibold shadow-sm"
          onClick={() => setSubmitted(true)}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
