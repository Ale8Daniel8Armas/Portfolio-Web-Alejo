import { Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { techSections } from "@/data/techStack";
import { TechSection } from "@/components/TechSection";

export function TechStack() {
  const { t } = useTranslation();

  return (
    <section
      id="tecnologias"
      className="relative overflow-hidden bg-tech-section py-20 text-tech-foreground sm:py-18"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundColor: "oklch(0.35 0.08 230)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]">
            <Cpu className="size-5" strokeWidth={2} />
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t("techStack.title")}
          </h2>
        </div>

        <div className="mt-12 space-y-12">
          {techSections.map((section) => (
            <TechSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}