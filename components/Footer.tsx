import { site } from "@/content/site";

// Closing line of the page: Lance's tagline in the sunset gradient, then the copyright.
export function Footer() {
  const { footer } = site;
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-10 text-center sm:px-6">
        <p className="text-sunset-gradient text-lg font-semibold">{footer.tagline}</p>
        <p className="text-sm text-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
