// Shared wrapper so every section has the same width, spacing, and heading style.
// The id is what nav links like "#services" jump to.
export function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-4xl border-t border-zinc-800 px-4 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
