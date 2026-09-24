import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/i18n";

export function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as Project[];

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-projects py-20 text-projects-foreground sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 40% at 50% 0%, oklch(0.85 0.12 230 / 0.18), transparent), radial-gradient(ellipse 90% 40% at 50% 100%, oklch(0.85 0.12 230 / 0.18), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Encabezado */}
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]">
            <Github className="size-5" strokeWidth={2} />
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("projects.title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}