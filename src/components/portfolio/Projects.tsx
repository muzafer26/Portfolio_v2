import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Projects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const setup = () => {
        const distance = track.scrollWidth - window.innerWidth + 64;
        if (distance <= 0) return;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };
      setup();
      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-6 pt-24 sm:pt-32">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-mint">
              Selected Work
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              Things I've shipped.
            </h2>
          </div>
          <div className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:block">
            scroll →
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center">
        <div
          ref={trackRef}
          className="flex gap-8 px-[8vw] will-change-transform"
          style={{ paddingTop: "8rem" }}
        >
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group relative flex h-[70vh] w-[78vw] max-w-[640px] flex-shrink-0 flex-col overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur transition-transform duration-500 hover:-translate-y-2 sm:w-[60vw]"
            >
              {/* Cover */}
              <div
                className="relative h-1/2 w-full overflow-hidden"
                style={{ background: p.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-black/70">
                  0{i + 1} / 0{projects.length}
                </div>
                <div className="absolute right-6 top-6 text-3xl">{p.emoji}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-3xl font-bold text-black/85 sm:text-4xl">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm text-black/60">{p.tagline}</div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <p className="text-base leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-mint transition-transform hover:translate-x-1"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* End cap */}
          <div className="flex w-[40vw] flex-shrink-0 items-center justify-center text-center">
            <div>
              <div className="font-display text-3xl text-foreground/70">
                More coming.
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Always one repo away.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
