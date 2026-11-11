import { site } from "@/content/site";

// A CSS-only "terminal window": three window dots, then each command with its output lines.
// Text comes from content/site.ts; only the "$" prompt and the cursor are added here.
export function Terminal() {
  const entries = site.path.terminal;

  return (
    // h-full + flex-col lets the card stretch to the height of the column beside it.
    <div className="terminal flex h-full flex-col overflow-hidden rounded-xl border font-mono text-[13px] leading-relaxed">
      {/* Fake window title bar. The dots are decorative, so screen readers skip them. */}
      <div aria-hidden="true" className="flex gap-2 border-b border-line bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-neon-pink" />
        <span className="h-3 w-3 rounded-full bg-amber" />
        <span className="h-3 w-3 rounded-full bg-neon-green" />
      </div>
      <div className="flex-1 space-y-4 p-5">
        {entries.map((entry, i) => {
          const isLast = i === entries.length - 1;
          return (
            <div key={entry.command}>
              <p>
                {/* select-none so copying the text doesn't grab the "$". */}
                <span aria-hidden="true" className="text-amber select-none">
                  ${" "}
                </span>
                <span className="text-text">{entry.command}</span>
              </p>
              {entry.output.map((line, j) => (
                // whitespace-pre-wrap keeps the column spacing in "ls" output but still wraps on phones.
                <p key={j} className="text-muted whitespace-pre-wrap">
                  {line}
                  {/* Blinking block cursor after the very last line. With reduced motion it stays solid. */}
                  {isLast && j === entry.output.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] animate-blink bg-amber motion-reduce:animate-none"
                    />
                  )}
                </p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
