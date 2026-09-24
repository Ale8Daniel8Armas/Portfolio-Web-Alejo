import type { Tech } from "@/data/techStack";

function getIconUrl(tech: Tech) {
    if (tech.customIcon) {
        return tech.customIcon;
    }
    if (tech.source === "devicon") {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}/${tech.slug}-original.svg`;
    }
    return `https://cdn.simpleicons.org/${tech.slug}`;
}

export function TechCard({ tech }: { tech: Tech }) {
    const Icon = tech.icon;

    return (
        <div className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-tech-card-border bg-tech-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_45px_-20px_var(--color-brand)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

            <div className="relative z-10 flex flex-col items-center gap-3">
                {Icon ? (
                    <Icon
                        className="size-10 text-brand transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.5}
                    />
                ) : (
                    <img
                        src={getIconUrl(tech)}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        width={40}
                        height={40}
                        className={`size-10 transition-transform duration-300 group-hover:scale-110 ${tech.invertOnDark ? "dark:invert" : ""}`}
                    />
                )}
                <p className="text-sm font-semibold text-tech-foreground">
                    {tech.name}
                </p>
            </div>
        </div>
    );
}