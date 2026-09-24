import { ArrowUpRight, Github, Hourglass } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/i18n";

export function ProjectCard({ project }: { project: Project }) {
    const { t } = useTranslation();
    return (
        <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl border border-projects-card-border bg-projects-card shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_var(--color-brand)] sm:grid sm:grid-cols-[40%_1fr]"
        >
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-brand/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="relative z-20 flex flex-col justify-center p-6 sm:p-7">
                <div className="flex items-center gap-2">
                    {project.inProgress && (
                        <Hourglass
                            className="size-4 text-highlight"
                            strokeWidth={2}
                        />
                    )}
                    <h3 className="text-xl font-semibold tracking-tight text-projects-foreground">
                        {project.title}
                    </h3>
                </div>

                <p className="mt-2.5 max-w-xl text-[14px] leading-relaxed text-projects-foreground/70">
                    {project.inProgress && (
                        <span className="font-medium text-highlight">
                            {t("projects.inProgress")}{" "}
                        </span>
                    )}
                    {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-brand/12 px-3 py-1 text-xs font-medium text-brand ring-1 ring-inset ring-brand/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 rounded-lg bg-projects-ink px-4 py-2.5 text-sm font-semibold text-projects-ink-foreground transition-colors hover:opacity-90"
                        >
                            <Github className="size-4" strokeWidth={2} />
                            {t("projects.repo")}
                        </a>
                    )}
                    <a
                        href={project.demo}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90"
                    >
                        {t("projects.demo")}
                        <ArrowUpRight className="size-4" strokeWidth={2} />
                    </a>
                </div>
            </div >
        </article >
    );
}