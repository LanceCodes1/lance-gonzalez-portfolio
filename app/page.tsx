import { site } from "@/content/site";

// Temporary placeholder home page until real sections are built.
// Text comes from content/site.ts so no copy is hard-coded in components.
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{site.name}</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{site.status}</p>
    </main>
  );
}
