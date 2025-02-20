import Image from "next/image";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Work from "./components/Work"
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="bg-black">
      <section id="hero">
        <Hero />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
    </div>
  );
}
