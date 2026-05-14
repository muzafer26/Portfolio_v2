import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          className={`flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur transition-colors ${
            scrolled
              ? "border-border bg-surface/70"
              : "border-transparent bg-transparent"
          }`}
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #00FFB2, #7B61FF)",
              boxShadow: "0 0 12px #00FFB2",
            }}
          />
          <span className="font-display text-sm font-semibold tracking-wide">
            Muzafer
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full border px-2 py-1.5 text-sm backdrop-blur transition-colors md:flex ${
            scrolled
              ? "border-border bg-surface/70"
              : "border-border/40 bg-surface/30"
          }`}
        >
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-background/60 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-mint px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.04] md:inline-flex"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Muzafer Shaikh. Built with intent.</div>
        <div className="uppercase tracking-[0.3em]">Mumbai · India</div>
      </div>
    </footer>
  );
}
