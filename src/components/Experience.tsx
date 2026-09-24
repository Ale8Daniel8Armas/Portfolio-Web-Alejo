import { Briefcase } from "lucide-react";
import securityDataLogo from "@/assets/SDLogo.png";
import idcLogo from "@/assets/IDCLogo.jfif";
import aiConnectLogo from "@/assets/ai-connect-logo.jfif";
import { useTranslation } from 'react-i18next';

type Experience = {
  id: string;
  companyLogo?: string;
  stack: string[];
};

const experiences: Experience[] = [
  {
    id: "security_data",
    companyLogo: securityDataLogo,
    stack: ["Angular", "TypeScript", "Spring Boot", "Java", "SQL", "Vitest", "Mockito", "Git"],
  },
  {
    id: "idc",
    companyLogo: idcLogo,
    stack: ["WordPress", "PHP", "MySQL", "CMS"],
  },
  {
    id: "ai_connect",
    companyLogo: aiConnectLogo,
    stack: ["WordPress", "Go High Level", "n8n", "NoSQL", "LLMS", "Prompt Engineering"],
  },
];

export function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-experience py-20 text-experience-foreground sm:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundColor: "oklch(0.35 0.08 230)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight shadow-[0_0_20px_-4px_var(--color-highlight)]">
            <Briefcase className="size-5" strokeWidth={2} />
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {t('experience.title')}
          </h2>
        </div>

        <div className="mt-16 sm:mt-20 mx-auto max-w-5xl">
          <ol className="space-y-12 sm:space-y-16 pl-4 sm:pl-0">
            {experiences.map((exp, index) => (
              <li key={exp.id} className="relative flex flex-col sm:flex-row gap-6 sm:gap-0 sm:items-stretch">

                <div className="shrink-0 sm:w-40 sm:mr-14 flex justify-start sm:justify-end">
                  {exp.companyLogo && (
                    <img
                      src={exp.companyLogo}
                      alt={t(`experience.jobs.${exp.id}.role`)}
                      loading="lazy"
                      className="size-24 rounded-3xl border border-white/20 bg-white object-contain p-3 shadow-[0_20px_30px_-25px_oklch(0_0_0/0.6)] sm:size-40"
                    />
                  )}
                </div>

                <div className="relative hidden sm:block sm:w-4 shrink-0 sm:mr-10">
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 size-3.5 rounded-full bg-highlight ring-4 ring-experience z-10" />
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+4rem)] bg-white/20" />
                  )}
                </div>

                <span className="absolute -left-4 top-5 size-2.5 rounded-full bg-highlight ring-4 ring-experience sm:hidden" />

                <div className="flex-1 sm:max-w-3xl sm:pt-6">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">
                    {t(`experience.jobs.${exp.id}.role`)}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-highlight">
                    {t(`experience.jobs.${exp.id}.period`)}
                  </p>
                  <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/75">
                    {t(`experience.jobs.${exp.id}.description`)}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}