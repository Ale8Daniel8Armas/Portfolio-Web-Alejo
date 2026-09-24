import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { useTranslation } from "react-i18next";
import profile from "@/assets/foto-portada.png";
import fondoDecorativoClaro from "@/assets/fondo-claro.jfif";
import fondoDecorativoOscuro2 from "@/assets/newFondo.jpg";

const slides = [profile];

export function Hero() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 15000);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-hero-panel"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 sm:hidden">
        <div
          className="absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0"
          style={{
            backgroundImage: `url(${fondoDecorativoClaro})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100"
          style={{
            backgroundImage: `url(${fondoDecorativoOscuro2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-hero-panel/85 dark:bg-hero-panel/80 backdrop-blur-[2px]" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(27.35% 0, 100% 0, 100% 100%, 51.35% 100%)",
          }}
        >
          <div className="absolute inset-y-0 right-0 w-[30%]">
            {slides.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                className="absolute inset-0 size-full object-cover object-top transition-opacity duration-[5000ms] ease-in-out"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: "translateX(-35%)",
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-[#2DD4BF]/10" />
        </div>

        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(0 0, 30% 0, 54% 100%, 0 100%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0"
            style={{
              backgroundImage: `url(${fondoDecorativoClaro})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          />

          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100"
            style={{
              backgroundImage: `url(${fondoDecorativoOscuro2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div
          className="absolute inset-0 bg-[#2DD4BF]/35"
          style={{
            clipPath:
              "polygon(30% 0, 30.35% 0, 54.35% 100%, 54% 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(93% 0, 100% 0, 100% 36%)",
          }}
        >
          <div
            className="absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0"
            style={{
              backgroundImage: `url(${fondoDecorativoClaro})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100"
            style={{
              backgroundImage: `url(${fondoDecorativoOscuro2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-[30rem] py-20">
          <p className="font-display text-lg font-medium tracking-tight text-hero-ink/70 sm:text-xl">
            {t("hero.greeting")}
          </p>

          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight text-hero-ink sm:text-6xl">
            Daniel Armas
          </h1>

          <p className="mt-4 max-w-sm text-lg leading-snug text-hero-ink/80 sm:text-xl">
            {t("hero.role")}
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-available px-3.5 py-1.5 text-[13px] font-medium text-available-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-available-foreground/50" />
              <span className="relative inline-flex size-2 rounded-full bg-available-foreground" />
            </span>

            {t("hero.available")}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-lg bg-hero-ink px-6 py-3 text-sm font-semibold text-hero-panel transition-colors hover:bg-hero-ink/85"
            >
              {t("hero.hire_me")}
              <ArrowRight className="size-4" strokeWidth={2} />
            </a>

            <a
              href="/ArmasDaniel_CV.pdf"
              download="Daniel_Armas_CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-hero-ink/15 bg-hero-ink/5 px-6 py-3 text-sm font-semibold text-hero-ink transition-colors hover:bg-hero-ink/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Download className="size-4" strokeWidth={2} />
              {t('hero.download_cv')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}