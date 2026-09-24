import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import '../i18n';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlejoDev88 — Portfolio Web" },
      {
        name: "description",
        content:
          "Portafolio de Daniel Armas: perfil, experiencia, proyectos y tecnologías de desarrollo web frontend.",
      },
      { property: "og:title", content: "AlejoDev88 — Portfolio Web" },
      {
        property: "og:description",
        content:
          "Perfil, experiencia, proyectos y tecnologías de un desarrollador web frontend.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

