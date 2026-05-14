import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * A single persistent gradient orb that morphs (position, size, shape, hue)
 * across sections — the SlidesCarnival "morph transition" feel.
 *
 * Sections it morphs through (by id):
 *   #hero  -> #about -> #projects -> #skills -> #philosophy -> #contact
 */
export function MorphOrb() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      // Initial state — top-right of hero
      gsap.set(el, {
        xPercent: 0,
        yPercent: 0,
        top: "20%",
        left: "65%",
        width: "22rem",
        height: "22rem",
        borderRadius: "50%",
        opacity: 0.85,
        background:
          "radial-gradient(circle at 30% 30%, #00FFB2 0%, #7B61FF 70%, transparent 100%)",
      });

      const morph = (
        trigger: string,
        vars: gsap.TweenVars,
      ) => {
        const t = document.querySelector(trigger);
        if (!t) return;
        gsap.to(el, {
          ...vars,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        });
      };

      // About — orb shifts left, becomes a softer purple disc
      morph("#about", {
        top: "30%",
        left: "10%",
        width: "26rem",
        height: "26rem",
        borderRadius: "42% 58% 55% 45% / 50% 45% 55% 50%",
        opacity: 0.55,
        background:
          "radial-gradient(circle at 60% 40%, #7B61FF 0%, #00FFB2 80%, transparent 100%)",
      });

      // Projects — large soft glow behind cards
      morph("#projects", {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "44rem",
        height: "44rem",
        borderRadius: "40% 60% 60% 40% / 55% 45% 55% 45%",
        opacity: 0.35,
        background:
          "conic-gradient(from 90deg at 50% 50%, #00FFB2, #7B61FF, #00FFB2)",
      });

      // Skills — tall capsule on the right
      morph("#skills", {
        top: "20%",
        left: "70%",
        xPercent: 0,
        yPercent: 0,
        width: "20rem",
        height: "32rem",
        borderRadius: "9999px",
        opacity: 0.45,
        background:
          "linear-gradient(180deg, #00FFB2 0%, #7B61FF 100%)",
      });

      // Philosophy — tight bright punctuation orb dead center
      morph("#philosophy", {
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        width: "8rem",
        height: "8rem",
        borderRadius: "50%",
        opacity: 0.95,
        background:
          "radial-gradient(circle at 35% 35%, #00FFB2 0%, #7B61FF 100%)",
      });

      // Contact — wide gradient bar drifting bottom
      morph("#contact", {
        top: "75%",
        left: "50%",
        xPercent: -50,
        yPercent: 0,
        width: "60rem",
        height: "16rem",
        borderRadius: "32px",
        opacity: 0.4,
        background:
          "linear-gradient(120deg, #00FFB2 0%, #7B61FF 100%)",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 blur-3xl"
      style={{ willChange: "transform, width, height, border-radius, background" }}
      aria-hidden
    />
  );
}
