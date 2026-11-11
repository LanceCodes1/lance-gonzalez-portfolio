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
    <section id={id} className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
      {/* Decorative gradient underline; aria-hidden since it carries no meaning. */}
      <span aria-hidden="true" className="heading-bar mt-4" />
      <div className="mt-10">{children}</div>
    </section>
  );
}
