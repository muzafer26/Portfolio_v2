import { motion } from "framer-motion";

const QUOTE =
  "AI is my co-pilot — I move from idea to execution, fast.";

export function Philosophy() {
  const words = QUOTE.split(" ");

  return (
    <section
      id="philosophy"
      className="relative flex min-h-[110vh] items-center justify-center overflow-hidden px-6 py-32"
      style={{ backgroundColor: "var(--color-background)", zIndex: 1 }}
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-mint">
          Philosophy
        </div>
        <h2 className="mt-8 font-display text-4xl font-bold leading-[1.1] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.1, y: 24, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-25%" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
              className="mr-3 inline-block"
            >
              {w === "co-pilot" || w === "fast." ? (
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
                  }}
                >
                  {w}
                </span>
              ) : (
                w
              )}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mx-auto mt-14 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Strong fundamentals. Sharp tools. A product mindset. The rest is
          shipping.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-muted-foreground"
        >
          <span className="h-px w-12 bg-mint" />
          Muzafer Shaikh
          <span className="h-px w-12 bg-purple" />
        </motion.div>
      </div>
    </section>
  );
}
