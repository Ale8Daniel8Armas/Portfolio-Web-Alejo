import { Check, GraduationCap, Globe, Mail, MapPin, Phone } from "lucide-react";
import profile from "@/assets/hero2.jpeg";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  const rawSkills = t("about.skills", { returnObjects: true });
  const skills = Array.isArray(rawSkills) ? rawSkills as string[] : [];

  const info = [
    { icon: MapPin, label: t("about.info.location"), value: t("about.info.location_value") },
    {
      icon: GraduationCap,
      label: t("about.info.education"),
      value: t("about.info.education_value"),
    },
    { icon: Globe, label: t("about.info.languages"), value: t("about.info.languages_value") },
  ];

  return (
    <section id="perfil" className="bg-about py-20 text-about-foreground sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t("about.title")} <span className="text-highlight">{t("about.highlight")}</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-about-foreground/100">
            {t("about.description")}
          </p>

          <ul className="mt-8 space-y-4">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-3 text-[18px] font-medium">
                <Check className="size-5 text-highlight" strokeWidth={2.5} />
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-about-card-border bg-about-card shadow-[0_18px_50px_-25px_oklch(0_0_0/0.45)]">
          <div className="h-32 w-full bg-gradient-to-r from-brand/40 via-highlight/40 to-brand/40 sm:h-40" />

          <div className="relative px-6 pb-8 pt-0 sm:px-10 sm:pb-10">
            <div className="flex justify-center">
              <div className="-mt-16 sm:-mt-20 rounded-full bg-about-card p-1.5">
                <div className="rounded-full bg-gradient-to-br from-brand via-highlight to-brand p-[3px]">
                  <img
                    src={profile}
                    alt="Retrato de Daniel Armas"
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-28 sm:size-36 rounded-full border-4 border-about-card object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-foreground">Daniel Armas</h3>
            </div>

            {/* Datos de Contacto (Inner Container) */}
            <div className="mt-8 rounded-3xl bg-[#F9F9F9] dark:bg-[#1A1A1A] p-5 sm:p-6 border border-black/5 dark:border-white/5 shadow-sm">
              <dl className="space-y-5">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-about-card shadow-sm border border-border/50 text-brand">
                      <item.icon className="size-[20px]" strokeWidth={2} />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">{item.label}</dt>
                      <dd className="text-[13px] sm:text-[14px] font-semibold text-foreground/90 break-words leading-snug mt-0.5">{item.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
