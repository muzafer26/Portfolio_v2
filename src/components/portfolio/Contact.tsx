import { useState } from "react";

const LINKS = [
  {
    label: "Email",
    value: "muzafer@example.com",
    href: "mailto:muzafer@example.com",
  },
  { label: "GitHub", value: "github.com/muzafer26", href: "https://github.com/muzafer26" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muzafer-shaikh",
    href: "https://www.linkedin.com/in/muzafer-shaikh-726a40338/",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:muzafer@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative px-6 py-32 sm:py-40"
      style={{ backgroundColor: "var(--color-background)", zIndex: 1 }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-[0.4em] text-mint">
              Contact
            </div>
            <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              Let's build{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
                }}
              >
                something.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Open to internships, collaborations, and conversations about ML,
              NLP, or anything worth shipping.
            </p>

            <div className="mt-10 space-y-1">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group block border-b border-border py-5 transition-colors hover:border-mint/60"
                >
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                        {l.label}
                      </div>
                      <div className="mt-1 font-display text-2xl text-foreground transition-colors group-hover:text-mint sm:text-3xl">
                        {l.value}
                      </div>
                    </div>
                    <span className="text-2xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-mint">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur sm:p-8"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Send a message
              </div>
              <div className="mt-6 space-y-5">
                <Field name="name" label="Name" placeholder="Your name" />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or question."
                    className="mt-2 w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-mint"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  {sent ? "Opening your email…" : "Send message"}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-mint"
      />
    </div>
  );
}
