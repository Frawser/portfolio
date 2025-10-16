import { projects } from "@/data/data";

export default function Projects() {
  
  return (
    <section
      id="projects"
      className="flex justify-center py-24 px-6 scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="w-full sm:w-4/5 md:w-3/5">
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold mb-14 text-center text-gray-800 dark:text-gray-100"
        >
          Projects
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white/80 dark:bg-gray-900/40 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.link}
                className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
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
