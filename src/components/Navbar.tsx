import { useEffect, useState } from "react";
import { Github, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/Logo-AlejoDev.png";
import { useTranslation } from 'react-i18next';

const links = [
  { id: "home", href: "#inicio" },
  { id: "profile", href: "#perfil" },
  { id: "experience", href: "#experiencia" },
  { id: "projects", href: "#proyectos" },
  { id: "technologies", href: "#tecnologias" },
  { id: "contact", href: "#contacto" },
];

export function Navbar() {
  const [active, setActive] = useState("#inicio");
  const [isDark, setIsDark] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored ? stored === "dark" : false;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const match = links.find(
            (link) => `#${visible.target.id}` === link.href,
          );
          if (match) setActive(match.href);
        }
      },
      {
        rootMargin: "-64px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, "#inicio")}
          className="transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "relative py-5 text-[15px] transition-colors",
                  active === link.href
                    ? "font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(`nav.${link.id}`)}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-px h-0.5 origin-center rounded-full bg-brand transition-transform duration-300",
                    active === link.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Ale8Daniel8Armas"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Github className="size-[18px]" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            {isDark ? (
              <Sun className="size-[18px]" strokeWidth={1.75} />
            ) : (
              <Moon className="size-[18px]" strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="flex h-9 items-center justify-center rounded-lg border border-border px-3 text-xs font-semibold tracking-wide text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            {i18n.language?.startsWith('es') ? 'EN' : 'ES'}
          </button>
        </div>
      </nav>
    </header>
  );
}