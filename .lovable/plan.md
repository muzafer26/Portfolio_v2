## Muzafer Shaikh — Cinematic Scroll Portfolio

A dark, immersive single-page portfolio where elements pin, scale, fade, and morph between sections as you scroll — inspired by SlidesCarnival's morph transitions, executed as a GSAP ScrollTrigger cinematic.

---

### Visual system

- **Colors:** background `#0A0A0F`, mint `#00FFB2`, purple `#7B61FF`, card `#13131A`, border `#1E1E2E`, muted `#6B7280` — registered as oklch tokens in `src/styles.css`.
- **Fonts:** Syne (headings, 600–800) + DM Sans (body, 400–500), loaded via Google Fonts in `__root.tsx`.
- **Hero background:** animated gradient mesh (mint↔purple blobs drifting, blurred) layered with a subtle particle/dot field on canvas — the "screenshot-worthy" moment.
- **Motion library:** `gsap` + `@gsap/react` for ScrollTrigger pinning/morphing; `framer-motion` for in-view reveals and small UI transitions.

### Sections (single long scroll, each acts like a "slide")

1. **Hero** — gradient mesh + particles, "Muzafer Shaikh" in Syne, typewriter tagline ("Aspiring Full-Stack Developer · AI-Assisted Builder · ML/NLP"), two CTAs (View Work / Get in Touch). A floating accent shape (mint→purple gradient orb) is the "morph anchor" that reappears in later sections.
2. **About** — pinned section. The hero's accent orb morphs into an avatar frame on the left; bio text reveals on the right; stats counters (CGPI 8.71, 4 Projects, BCA @ TCET) animate in.
3. **Projects** — horizontal scroll-pinned gallery of 4 project cards (MovieHub, CampusOneBoard, ScholarSync, SnapScape). Each card scales/rotates into focus; tech tags + GitHub links; the orb morphs into the active card's accent.
4. **Skills** — radial/grid layout. Skill chips (TypeScript, React, Python, …) fly in along arcs; a highlighted "ML / NLP — long-term focus" callout uses purple.
5. **Philosophy** — full-viewport quote moment. Large Syne text reveals word-by-word: *"AI is my co-pilot — I move from idea to execution, fast."* The orb morphs into a glowing punctuation mark.
6. **Contact** — email, GitHub, LinkedIn as large interactive links + a simple contact form (name, email, message). Frontend-only for v1 (mailto: fallback or just display links).

### Morph mechanics (the SlidesCarnival feel)

- One persistent gradient orb element rendered in a fixed layer; GSAP ScrollTrigger animates its `x/y/scale/borderRadius/background` keyframed to each section's scroll progress, so it appears to *transform* between sections rather than each section having its own.
- Section text uses `clipPath` reveals + staggered character animations on enter.
- Project section uses `pin: true` + horizontal `x` translation tied to vertical scroll.
- Respect `prefers-reduced-motion`: disable pinning, swap to simple fades.

### Architecture

- Single route `src/routes/index.tsx` (cinematic scroll = one page). Header is fixed with anchor links that smooth-scroll to section IDs.
- Components in `src/components/portfolio/`:
  - `Hero.tsx`, `About.tsx`, `Projects.tsx`, `Skills.tsx`, `Philosophy.tsx`, `Contact.tsx`
  - `MorphOrb.tsx` (the persistent morphing element + ScrollTrigger setup)
  - `GradientMesh.tsx`, `ParticleField.tsx` (hero background)
  - `Header.tsx`, `Footer.tsx`
- Project data in `src/data/projects.ts`.
- Page-level SEO via `head()` in the index route: title "Muzafer Shaikh — Full-Stack Developer & AI Builder", description, og:title/description.

### Technical notes

- Add deps: `gsap`, `@gsap/react`, `framer-motion`.
- All GSAP/ScrollTrigger setup wrapped in `useGSAP` with `useIsomorphicLayoutEffect` guards so SSR doesn't crash (`window` checks).
- Particle canvas uses `requestAnimationFrame` and cleans up on unmount.
- Placeholder project images generated as gradient SVGs (mint→purple) so the page ships without external assets — easy to swap later.

### Out of scope for v1

- Real project screenshots (placeholder gradients used).
- Backend for contact form (mailto link or static display; can wire Lovable Cloud + email later).
- Blog / writing section.
