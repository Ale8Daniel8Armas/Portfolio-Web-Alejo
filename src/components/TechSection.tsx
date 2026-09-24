import type { TechSection as TechSectionType } from "@/data/techStack";
import { useTranslation } from "react-i18next";
import { TechCard } from "./TechCard";

export function TechSection({ section }: { section: TechSectionType }) {
    const { t } = useTranslation();
    return (
        <div>
            <h3 className="text-lg font-semibold tracking-tight text-tech-foreground text-white">
                {t(`techStack.categories.${section.id}`, { defaultValue: section.title })}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {section.techs.map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                ))}
            </div>
        </div>
    );
}