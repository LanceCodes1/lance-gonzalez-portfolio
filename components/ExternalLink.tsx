// Web links and files (like a PDF proposal) open in a new tab; mailto and #section links stay in place.
// rel="noopener noreferrer" stops the new tab from controlling this page.
export function ExternalLink({ href, ...rest }: React.ComponentProps<"a"> & { href: string }) {
  const newTab = !href.startsWith("mailto:") && !href.startsWith("#");
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}
