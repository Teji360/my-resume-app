import Image from "next/image";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Work from "./components/Work"
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="bg-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden">
      <section id="hero" className="snap snap-center">
        <Hero />
      </section>

      <section id="education" className="snap snap-center h-screen">
        <Education />
      </section>

      <section id="work" className="snap snap-center h-screen">
        <Work />
      </section>

      <section id="projects" className="snap snap-center h-screen">
        <Projects />
      </section>
      
    </div>
  );
}
