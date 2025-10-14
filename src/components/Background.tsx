import Image from "next/image";
import Link from "next/link";

export default function Background() {
  return (
    <section
      id="background"
      className="max-w-[60%] mx-auto py-20 flex flex-col md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h4 className="text-3xl font-semibold text-cyan-600 dark:text-cyan-300">
          My Story
        </h4>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          Hi, I&apos;m <span className="font-semibold">Mikael Fernandez Olsson</span>. 
          I&apos;ve been fascinated by computers for as long as I can remember, ever since 
          I first learned to control a mouse. Over the years, I&apos;ve built my own PCs and 
          explored the vast world of the internet, always curious about how things work 
          behind the screen. After completing a two-year frontend YH exam, a 6-month 
          internship, and a bootcamp at Lexicon, I&apos;m ready to take my first real step 
          into the tech market. I&apos;m eager to contribute, learn, and grow. Crafting 
          modern and responsive digital experiences along the way.
        </p>

        <Link href="#contact">
          <button className="mt-6 px-6 py-3 rounded-full border border-cyan-400 text-cyan-600 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-400/10 transition-all duration-300 font-semibold shadow-sm">
            Contact Me
          </button>
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        <Image
          src="/mikael.jpg"
          alt="Portrait of Mikael Fernandez Olsson"
          width={350}
          height={350}
          className="rounded-2xl shadow-lg object-cover border border-cyan-100 dark:border-cyan-900 hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}
