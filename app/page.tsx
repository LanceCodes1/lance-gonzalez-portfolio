import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

// The whole site is one page; each section is its own component in components/.
export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
