import { site } from "@/content/site";

// Shorthand for the three text colors inside the terminal.
// Blue marks key words (name, role titles, tools, project names); light text is normal output.
const Key = ({ children }: { children: React.ReactNode }) => <span className="text-neon-blue">{children}</span>;
const Dim = ({ children }: { children: React.ReactNode }) => <span className="text-muted">{children}</span>;

// macOS-style terminal window, CSS only. Every output line is pulled from existing data in
// content/site.ts (nothing is retyped here); only the window chrome and layout live in this file.
export function Terminal() {
  const t = site.path.terminal;

  // Each block = one command and the lines it prints, in display order.
  const blocks: { command: string; lines: React.ReactNode[] }[] = [
    { command: t.commands.whoami, lines: [<Key key="n">{site.name}</Key>, site.hero.label] },
    { command: t.commands.focus, lines: [site.hero.line] },
    {
      command: t.commands.experience,
      lines: site.experience.roles.map((r) => (
        <span key={r.title + r.org}>
          <Key>{r.title}</Key>, {r.org} <Dim>({r.dates})</Dim>
        </span>
      )),
    },
    {
      command: t.commands.stack,
      // Tool names in blue, joined by dim dots.
      lines: [
        site.techStrip.map((tool, i) => (
          <span key={tool}>
            {i > 0 && <Dim> · </Dim>}
            <Key>{tool}</Key>
          </span>
        )),
      ],
    },
    { command: t.commands.projects, lines: site.projects.items.map((p) => <Key key={p.name}>{p.name}</Key>) },
    { command: t.commands.credentials, lines: site.experience.credentials },
    { command: t.commands.log, lines: [t.logMessage] },
  ];

  return (
    // h-full + flex-col lets the window stretch to the height of the column beside it.
    // "lift" + the terminal style's :hover give the raise and purple/blue glow.
    <div className="terminal lift flex h-full flex-col overflow-hidden rounded-xl border font-mono text-sm leading-relaxed">
      {/* Title bar: red / amber / green window dots and a centered title, like macOS Terminal. */}
      <div className="relative flex items-center border-b border-line bg-surface px-4 py-3">
        <div aria-hidden="true" className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <p className="absolute inset-x-0 text-center text-xs text-muted">{t.title}</p>
      </div>

      {/* justify-between spreads the blocks over the full height (no empty gap at the bottom);
          gap-5 guarantees at least a blank line between blocks. */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-5 text-text">
        {blocks.map((block, i) => {
          const isLast = i === blocks.length - 1;
          return (
            <div key={block.command}>
              <p>
                {/* Prompt is decorative and select-none so copying grabs only the command. */}
                <span aria-hidden="true" className="text-neon-green select-none">
                  {t.prompt}{" "}
                </span>
                <span className="text-amber">{block.command}</span>
              </p>
              {block.lines.map((line, j) => (
                <p key={j}>
                  {line}
                  {/* Blinking block cursor after the very last line. With reduced motion it stays solid. */}
                  {isLast && j === block.lines.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-1 inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] animate-blink bg-neon-green motion-reduce:animate-none"
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
