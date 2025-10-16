"use client";

export default function DownloadCVButton() {
  return (
    <a
      href="/Mikael-Fernandez-Olsson-CV.pdf"
      download
      className="fixed top-6 left-6 z-50 px-6 py-3
                 rounded-full border border-cyan-400 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-400/10 transition-all duration-300 font-semibold shadow-sm"
    >
      Download CV
    </a>
  );
}
