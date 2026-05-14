import { useEffect, useState } from "react";
import { GradientMesh } from "./GradientMesh";
import { ParticleField } from "./ParticleField";

const TAGLINES = [
  "Aspiring Full-Stack Developer",
  "AI-Assisted Builder",
  "Future ML / NLP Engineer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const delay = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWIdx((i) => (i + 1) % words.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wIdx, words]);

  return text;
}

export function Hero() {
  const tag = useTypewriter(TAGLINES);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <GradientMesh />
      <ParticleField />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/40 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_12px_var(--mint)]" />
          BCA · TCET Mumbai · 2024–2027
        </div>

        <h1 className="font-display text-6xl font-bold leading-[0.95] sm:text-7xl md:text-8xl lg:text-[9rem]">
          <span className="block bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            Muzafer
          </span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
            }}
          >
            Shaikh
          </span>
        </h1>

        <p className="mx-auto mt-8 h-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          <span className="text-foreground/90">{tag}</span>
          <span className="ml-1 inline-block h-5 w-[2px] -translate-y-[2px] animate-pulse bg-mint align-middle" />
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
          A developer who treats AI as a co-pilot — moving from idea to
          execution with strong fundamentals and a product mindset.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-mint px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View Work
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-mint/60 hover:text-mint"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">
        <div className="flex flex-col items-center gap-2">
          <span>scroll</span>
          <span className="block h-10 w-[1px] animate-pulse bg-gradient-to-b from-mint to-transparent" />
        </div>
      </div>
    </section>
  );
}
