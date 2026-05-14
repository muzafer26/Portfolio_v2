export type Project = {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  gradient: string; // CSS gradient for the placeholder cover
};

export const projects: Project[] = [
  {
    id: "moviehub",
    title: "MovieHub",
    emoji: "🎬",
    tagline: "Discovery for film obsessives",
    description:
      "A movie discovery platform with streaming availability, ratings, and cast info — built on the TMDB API.",
    tech: ["TypeScript", "React", "TMDB API"],
    link: "https://muzafer26.github.io/MovieHub/",
    gradient: "linear-gradient(135deg, #00FFB2 0%, #7B61FF 100%)",
  },
  {
    id: "campusoneboard",
    title: "Campusonboard",
    emoji: "🎓",
    tagline: "Admissions, end to end",
    description:
      "A digital college admission system enabling remote document upload, fee payment, and admin verification.",
    tech: ["React", "Firebase"],
    link: "https://campusonboard.vercel.app/",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #00FFB2 100%)",
  },
  {
    id: "scholarsync",
    title: "ScholarSync",
    emoji: "📚",
    tagline: "One hub for student opportunity",
    description:
      "A student resource hub aggregating scholarships, jobs, and career roadmaps in one place.",
    tech: ["TypeScript", "React"],
    link: "https://scholar-sync-puce.vercel.app/",
    gradient: "linear-gradient(135deg, #00FFB2 0%, #1E1E2E 60%, #7B61FF 100%)",
  },
  {
    id: "snapscape",
    title: "SnapScape",
    emoji: "🖼️",
    tagline: "Pinterest, reimagined",
    description:
      "A Pinterest-inspired visual gallery built for discovery and inspiration.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://muzafer26.github.io/SnapScape/",
    gradient: "linear-gradient(135deg, #7B61FF 0%, #0A0A0F 50%, #00FFB2 100%)",
  },
];

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python"],
  frameworks: ["React", "HTML / CSS"],
  tools: ["Git", "Figma", "WordPress"],
  focus: ["Machine Learning", "NLP", "AI-assisted development"],
};
