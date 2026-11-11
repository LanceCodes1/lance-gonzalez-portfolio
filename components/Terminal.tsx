import { site } from "@/content/site";

// A CSS-only "terminal window": three window dots, then each command with its output.
// Text comes from content/site.ts; only the "$" prompt is added here.
export function Terminal() {
  return (
    <div className="terminal overflow-hidden rounded-xl border font-mono text-sm">
      {/* Fake window title bar. The dots are decorative, so screen readers skip them. */}
      <div aria-hidden="true" className="flex gap-2 border-b border-line bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-neon-pink" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-neon-green" />
      </div>
      <div className="space-y-4 p-5">
        {site.path.terminal.map((line) => (
          <div key={line.command}>
            <p>
              {/* select-none so copying the text doesn't grab the "$". */}
              <span aria-hidden="true" className="text-amber select-none">
                ${" "}
              </span>
              <span className="text-text">{line.command}</span>
            </p>
            <p className="mt-1 text-muted">{line.output}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
