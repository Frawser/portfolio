// Components
import Hero from "../components/Hero";
import DarkModeToggle from "../components/DarkModeToggle";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Background from "@/components/Background";
import PersonalGoals from "@/components/PersonalGoals";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 dark:from-transparent dark:via-cyan-200/10 dark:to-transparent transition-colors duration-500">
      <Hero />
      <DarkModeToggle />
      <About />
      <Stats />
      <Background />
      <PersonalGoals />
    </div>
  );
}
