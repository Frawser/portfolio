// Components
import Hero from "../components/Hero";
import DarkModeToggle from "../components/DarkModeToggle";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Background from "@/components/Background";
import Projects from "@/components/Projects";
import DownloadCVButton from "@/components/DownloadCV";

import PersonalGoals from "@/components/PersonalGoals";

export default function Home() {
  return (
    <div>
      <DownloadCVButton />
      <DarkModeToggle />
      <Hero />
      <About />
      <Stats />
      <Background />
      <PersonalGoals />
      <Projects />
    </div>
  );
}
