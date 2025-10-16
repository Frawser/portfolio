import { goals } from "@/data/data";

export default function PersonalGoals() {

  return (
    <section className="flex justify-center py-24 px-6">
      <div className="w-full sm:w-4/5 md:w-3/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-gray-800 dark:text-cyan-300">
          Personal Goals
        </h2>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-2">
          {goals.map((goal, index) => (
            <article
              key={index}
              className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-md border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-cyan-600 dark:text-cyan-300 mb-3">
                {goal.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
