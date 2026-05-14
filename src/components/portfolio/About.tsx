import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "8.71", label: "Current CGPI" },
  { value: "4+", label: "Shipped Projects" },
  { value: "3yr", label: "BCA @ TCET" },
  { value: "∞", label: "Curiosity" },
];

function Counter({ value }: { value: string }) {
  // Animate numeric values, leave non-numerics as-is
  const numeric = parseFloat(value);
  const isNum = !Number.isNaN(numeric);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [shown, setShown] = useState(isNum ? 0 : value);

  useEffect(() => {
    if (!isNum || !inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (numeric * eased).toFixed(value.includes(".") ? 2 : 0);
      setShown(current + (value.match(/[^\d.]+$/)?.[0] ?? ""));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNum, numeric, value]);

  return <span ref={ref}>{shown}</span>;
}

export function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="relative px-6 py-32 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Avatar / Identity card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,178,0.15) 0%, rgba(123,97,255,0.25) 100%)",
              }}
            />
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 animate-pulse bg-surface/80" />
            )}
            {imageError && (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(123,97,255,0.3) 0%, rgba(0,255,178,0.2) 100%)",
                }}
              />
            )}
            <img
              src="/Muzafer.jpeg"
              alt="Portrait"
              className="absolute inset-0 h-full w-full object-cover object-center"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.4) 60%, transparent 100%)",
              }}
            />
            <div className="absolute inset-0 border-l-2 border-[#00FFB2]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-mint">
                Currently
              </div>
              <div className="mt-2 font-display text-2xl">
                Building, learning, shipping.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio + stats */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.4em] text-mint">
              About
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              I build things, then{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
                }}
              >
                ship them.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a BCA student at TCET, Mumbai, with a serious bias toward
              shipping. My coursework runs from DBMS, OS, and Networks to ML,
              NLP, and Cloud — but my favorite classroom is a blank editor and
              a problem worth solving. AI accelerates me; fundamentals keep me
              honest.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background/80 p-5 backdrop-blur"
              >
                <div className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "DBMS",
              "Computer Networks",
              "Operating Systems",
              "Data Structures",
              "ML / NLP",
              "Cloud Computing",
              "Software Engineering",
            ].map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-surface/50 px-3 py-1.5 text-xs text-muted-foreground"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
