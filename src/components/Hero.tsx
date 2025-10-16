import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-md">
        Mikael Fernandez Olsson
      </h1>
      <p className="text-cyan-700/70 dark:text-cyan-200/80 mt-4 text-lg">
        Frontend Developer • Versatile and Flexible • Continuous Growth
      </p>
      <Link href="#about" scroll={true}>
          <button className="mt-6 px-6 py-3 rounded-full border border-cyan-400 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-400/10 transition-all duration-300 font-semibold shadow-sm">
            View Portfolio
          </button>
        </Link>
    </section>
  );
}