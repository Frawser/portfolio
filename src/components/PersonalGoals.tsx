export default function PersonalGoals() {
  const goals = [
    {
      title: "Master Fullstack Development",
      description:
        "Expand my skills beyond frontend and gain deeper experience with backend frameworks, databases, and cloud deployment.",
    },
    {
      title: "Contribute to Open Source",
      description:
        "Collaborate with developers around the world and give back to the community by improving real-world projects.",
    },
    {
      title: "Build Impactful Projects",
      description:
        "Create tools and products that solve meaningful problems and offer a great user experience.",
    },
    {
      title: "Keep Learning & Evolving",
      description:
        "Stay up-to-date with modern technologies and always strive to write cleaner, smarter, and more efficient code.",
    },
  ];

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
