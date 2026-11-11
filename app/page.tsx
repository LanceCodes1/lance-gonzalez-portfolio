import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { MyPath } from "@/components/MyPath";
import { Experience } from "@/components/Experience";

// The whole site is one page; each section is its own component in components/.
export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <MyPath />
        <Experience />
      </main>
    </>
  );
}
