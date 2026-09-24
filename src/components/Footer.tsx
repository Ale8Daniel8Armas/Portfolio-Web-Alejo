import logo from "@/assets/Logo-AlejoDev.png";
import { useTranslation } from "react-i18next";

const techs = ["React", "TypeScript", "TailwindCSS", "Vite"];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundColor: "oklch(0.35 0.08 230)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <img src={logo} alt="Logo" className="h-10 w-auto sm:h-12" />
            <span className="text-[13px] leading-relaxed text-white/90 sm:text-[14px]">
              {t("footer.tagline")}
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end sm:gap-3">
            <span className="text-[12px] font-medium uppercase tracking-wider text-white/90 sm:text-[13px]">
              {t("footer.builtWith")}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {techs.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[11px] font-medium text-white/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}