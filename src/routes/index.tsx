import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Contact } from "@/components/portfolio/Contact";
import { Header, Footer } from "@/components/portfolio/Header";
import { MorphOrb } from "@/components/portfolio/MorphOrb";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muzafer Shaikh — Full-Stack Developer & AI Builder" },
      {
        name: "description",
        content:
          "Portfolio of Muzafer Shaikh — BCA student at TCET Mumbai, aspiring full-stack developer with a focus on AI-assisted development and Machine Learning.",
      },
      { property: "og:title", content: "Muzafer Shaikh — Full-Stack Developer & AI Builder" },
      {
        property: "og:description",
        content:
          "Cinematic portfolio: projects, skills, and philosophy of an AI-assisted builder.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Muzafer Shaikh — Full-Stack Developer & AI Builder" },
      {
        name: "twitter:description",
        content:
          "Cinematic portfolio: projects, skills, and philosophy of an AI-assisted builder.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Header />
      <MorphOrb />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
