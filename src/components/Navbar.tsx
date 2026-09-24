import { useEffect, useState, useCallback } from "react";
import { Github, Moon, Sun, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language || 'es';
    const newLang = currentLang.startsWith('es') ? 'en' : 'es';
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(href);
      }
      setMobileOpen(false);
    },
    [],
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-10">
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, "#inicio")}
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="Logo" className="h-9 w-auto object-contain sm:h-12" />
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

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://github.com/Ale8Daniel8Armas"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand sm:size-9"
          >
            <Github className="size-4 sm:size-[18px]" strokeWidth={1.75} />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand sm:size-9"
          >
            {isDark ? (
              <Sun className="size-4 sm:size-[18px]" strokeWidth={1.75} />
            ) : (
              <Moon className="size-4 sm:size-[18px]" strokeWidth={1.75} />
            )}
          </button>
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="flex h-8 items-center justify-center rounded-lg border border-border px-2 text-[11px] font-semibold tracking-wide text-muted-foreground transition-colors hover:border-brand hover:text-brand sm:h-9 sm:px-3 sm:text-xs"
          >
            {(i18n.language || 'es').startsWith('es') ? 'EN' : 'ES'}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
            className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand md:hidden"
          >
            {mobileOpen ? (
              <X className="size-4" strokeWidth={2} />
            ) : (
              <Menu className="size-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-x-0 top-14 bottom-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden sm:top-16",
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <ul className="flex flex-col items-center gap-1 px-4 pt-6">
          {links.map((link) => (
            <li key={link.id} className="w-full">
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "flex w-full items-center justify-center rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                  active === link.href
                    ? "bg-brand/10 text-brand"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {t(`nav.${link.id}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}