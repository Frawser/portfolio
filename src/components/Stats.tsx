export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="max-w-[60%] mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <h2 id="stats-title" className="sr-only">
        Developer Stats
      </h2>

      <article className="bg-white/60 dark:bg-white/5 rounded-2xl p-6 shadow-sm backdrop-blur-md border border-cyan-100/50 dark:border-cyan-800/30 transition hover:shadow-md hover:-translate-y-1 duration-300">
        <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300">
          2+ Years
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
          Frontend development through studies and internship projects.
        </p>
      </article>

      <article className="bg-white/60 dark:bg-white/5 rounded-2xl p-6 shadow-sm backdrop-blur-md border border-cyan-100/50 dark:border-cyan-800/30 transition hover:shadow-md hover:-translate-y-1 duration-300">
        <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300">
          15+ Projects
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
          Built fullstack web applications from the ground up.
        </p>
      </article>

      <article className="bg-white/60 dark:bg-white/5 rounded-2xl p-6 shadow-sm backdrop-blur-md border border-cyan-100/50 dark:border-cyan-800/30 transition hover:shadow-md hover:-translate-y-1 duration-300">
        <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300">
          Versatile Skill Set
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
          Comfortable working across design, frontend, and backend.
        </p>
      </article>

      <article className="bg-white/60 dark:bg-white/5 rounded-2xl p-6 shadow-sm backdrop-blur-md border border-cyan-100/50 dark:border-cyan-800/30 transition hover:shadow-md hover:-translate-y-1 duration-300">
        <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300">
          Continuous Growth
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
          Always expanding my skill set with modern tools.
        </p>
      </article>
    </section>
  );
}
