// Web links open in a new tab; mailto links open the mail app in place.
// rel="noopener noreferrer" stops the new tab from controlling this page.
export function ExternalLink({ href, ...rest }: React.ComponentProps<"a"> & { href: string }) {
  const isWeb = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}
