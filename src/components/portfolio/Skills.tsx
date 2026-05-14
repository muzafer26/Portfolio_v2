import { motion } from "framer-motion";
import { skills } from "@/data/projects";

const groups = [
  { title: "Languages", items: skills.languages, color: "mint" as const },
  { title: "Frameworks", items: skills.frameworks, color: "purple" as const },
  { title: "Tools", items: skills.tools, color: "mint" as const },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 sm:py-40" style={{ backgroundColor: "var(--color-background)", zIndex: 1 }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.4em] text-mint">
              Toolkit
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Built with{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
                }}
              >
                intent.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Comfortable across the stack today, with a long-term bet on
              Machine Learning and NLP.
            </p>

            {/* Focus callout */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-purple/40 bg-gradient-to-br from-purple/15 via-transparent to-mint/10 p-6 backdrop-blur">
              <div className="text-[11px] uppercase tracking-[0.3em] text-purple">
                Long-term focus
              </div>
              <div className="mt-2 font-display text-2xl">
                Machine Learning · NLP
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Where computation starts to feel like comprehension. That's
                where I want to live.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-purple/40 bg-purple/10 px-3 py-1 text-[11px] uppercase tracking-wider text-purple"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skill grid */}
          <div className="lg:col-span-7">
            <div className="space-y-10">
              {groups.map((g, gi) => (
                <div key={g.title}>
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        g.color === "mint" ? "bg-mint" : "bg-purple"
                      }`}
                    />
                    <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {g.title}
                    </div>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {g.items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{
                          delay: gi * 0.15 + i * 0.06,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -4 }}
                        className="group relative cursor-default rounded-xl border border-border bg-surface/60 px-5 py-4 backdrop-blur"
                      >
                        <div className="font-display text-lg font-semibold">
                          {item}
                        </div>
                        <div
                          className={`mt-2 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                            g.color === "mint" ? "bg-mint" : "bg-purple"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
