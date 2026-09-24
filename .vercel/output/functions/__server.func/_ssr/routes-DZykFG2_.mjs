import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useTranslation } from "../_libs/react-i18next.mjs";
import { _ as ArrowUpRight, a as Moon, c as Hourglass, d as Github, f as Download, g as Bot, h as Briefcase, i as Phone, l as GraduationCap, m as Check, n as Sun, o as MapPin, p as Cpu, r as Send, s as Linkedin, t as TestTubeDiagonal, u as Globe, v as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DZykFG2_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Logo_AlejoDev_default = "/assets/Logo-AlejoDev-HnMIRWeL.png";
var links = [
	{
		id: "home",
		href: "#inicio"
	},
	{
		id: "profile",
		href: "#perfil"
	},
	{
		id: "experience",
		href: "#experiencia"
	},
	{
		id: "projects",
		href: "#proyectos"
	},
	{
		id: "technologies",
		href: "#tecnologias"
	},
	{
		id: "contact",
		href: "#contacto"
	}
];
function Navbar() {
	const [active, setActive] = (0, import_react.useState)("#inicio");
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	const { t, i18n } = useTranslation();
	const toggleLanguage = () => {
		const newLang = i18n.language.startsWith("es") ? "en" : "es";
		i18n.changeLanguage(newLang);
	};
	(0, import_react.useEffect)(() => {
		const stored = localStorage.getItem("theme");
		const dark = stored ? stored === "dark" : false;
		setIsDark(dark);
		document.documentElement.classList.toggle("dark", dark);
	}, []);
	(0, import_react.useEffect)(() => {
		const sections = links.map((link) => document.querySelector(link.href)).filter((el) => el !== null);
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible) {
				const match = links.find((link) => `#${visible.target.id}` === link.href);
				if (match) setActive(match.href);
			}
		}, {
			rootMargin: "-64px 0px -60% 0px",
			threshold: 0
		});
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);
	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		document.documentElement.classList.toggle("dark", next);
		localStorage.setItem("theme", next ? "dark" : "light");
	};
	const handleLinkClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			setActive(href);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-lg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#inicio",
					onClick: (e) => handleLinkClick(e, "#inicio"),
					className: "transition-opacity hover:opacity-80",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_AlejoDev_default,
						alt: "Logo",
						className: "h-12 w-auto"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: link.href,
						onClick: (e) => handleLinkClick(e, link.href),
						className: cn("relative py-5 text-[15px] transition-colors", active === link.href ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: [t(`nav.${link.id}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute inset-x-0 -bottom-px h-0.5 origin-center rounded-full bg-brand transition-transform duration-300", active === link.href ? "scale-x-100" : "scale-x-0") })]
					}) }, link.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://github.com/Ale8Daniel8Armas",
							target: "_blank",
							rel: "noreferrer noopener",
							"aria-label": "GitHub",
							className: "flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
								className: "size-[18px]",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleTheme,
							"aria-label": "Cambiar tema",
							className: "flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand",
							children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
								className: "size-[18px]",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
								className: "size-[18px]",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggleLanguage,
							"aria-label": "Cambiar idioma",
							className: "flex h-9 items-center justify-center rounded-lg border border-border px-3 text-xs font-semibold tracking-wide text-muted-foreground transition-colors hover:border-brand hover:text-brand",
							children: i18n.language?.startsWith("es") ? "EN" : "ES"
						})
					]
				})
			]
		})
	});
}
var foto_portada_default = "/assets/foto-portada-P1H414TL.png";
var fondo_claro_default = "/assets/fondo-claro-CywVZhKq.jfif";
var newFondo_default = "/assets/newFondo-BR3fkwQR.jpg";
var slides = [foto_portada_default];
function Hero() {
	const { t } = useTranslation();
	const [active, setActive] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setActive((i) => (i + 1) % slides.length);
		}, 15e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-hero-panel",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10 sm:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0",
						style: {
							backgroundImage: `url(${fondo_claro_default})`,
							backgroundSize: "cover",
							backgroundPosition: "center"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100",
						style: {
							backgroundImage: `url(${newFondo_default})`,
							backgroundSize: "cover",
							backgroundPosition: "center"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-hero-panel/85 dark:bg-hero-panel/80 backdrop-blur-[2px]" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10 hidden sm:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						style: { clipPath: "polygon(27.35% 0, 100% 0, 100% 100%, 51.35% 100%)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 right-0 w-[30%]",
							children: slides.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "absolute inset-0 size-full object-cover object-top transition-opacity duration-[5000ms] ease-in-out",
								style: {
									opacity: active === i ? 1 : 0,
									transform: "translateX(-35%)"
								}
							}, src))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#2DD4BF]/10" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						style: { clipPath: "polygon(0 0, 30% 0, 54% 100%, 0 100%)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0",
							style: {
								backgroundImage: `url(${fondo_claro_default})`,
								backgroundSize: "cover",
								backgroundPosition: "bottom"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100",
							style: {
								backgroundImage: `url(${newFondo_default})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-[#2DD4BF]/35",
						style: { clipPath: "polygon(30% 0, 30.35% 0, 54.35% 100%, 54% 100%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0",
						style: { clipPath: "polygon(93% 0, 100% 0, 100% 36%)" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0",
							style: {
								backgroundImage: `url(${fondo_claro_default})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100",
							style: {
								backgroundImage: `url(${newFondo_default})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-7xl px-6 lg:px-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-[30rem] py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-medium tracking-tight text-hero-ink/70 sm:text-xl",
							children: t("hero.greeting")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight text-hero-ink sm:text-6xl",
							children: "Daniel Armas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-lg leading-snug text-hero-ink/80 sm:text-xl",
							children: t("hero.role")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-available px-3.5 py-1.5 text-[13px] font-medium text-available-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex size-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-available-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-available-foreground" })]
							}), t("hero.available")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contacto",
								className: "inline-flex items-center gap-2 rounded-lg bg-hero-ink px-6 py-3 text-sm font-semibold text-hero-panel transition-colors hover:bg-hero-ink/85",
								children: [t("hero.hire_me"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 2
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "../public/ArmasDaniel_CV.pdf",
								download: "Daniel_Armas_CV.pdf",
								className: "inline-flex items-center justify-center gap-2 rounded-xl border border-hero-ink/15 bg-hero-ink/5 px-6 py-3 text-sm font-semibold text-hero-ink transition-colors hover:bg-hero-ink/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "size-4",
									strokeWidth: 2
								}), t("hero.download_cv")]
							})]
						})
					]
				})
			})
		]
	});
}
var hero2_default = "/assets/hero2-DwkFHh2K.jpeg";
function About() {
	const { t } = useTranslation();
	const skills = t("about.skills", { returnObjects: true });
	const info = [
		{
			icon: MapPin,
			label: t("about.info.location"),
			value: t("about.info.location_value")
		},
		{
			icon: GraduationCap,
			label: t("about.info.education"),
			value: t("about.info.education_value")
		},
		{
			icon: Globe,
			label: t("about.info.languages"),
			value: t("about.info.languages_value")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "perfil",
		className: "bg-about py-20 text-about-foreground sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
					children: [
						t("about.title"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-highlight",
							children: t("about.highlight")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-[16px] leading-relaxed text-about-foreground/100",
					children: t("about.description")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-4",
					children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-[18px] font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "size-5 text-highlight",
							strokeWidth: 2.5
						}), skill]
					}, skill))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-about-card-border bg-about-card shadow-[0_18px_50px_-25px_oklch(0_0_0/0.45)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32 w-full bg-gradient-to-r from-brand/40 via-highlight/40 to-brand/40 sm:h-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative px-6 pb-8 pt-0 sm:px-10 sm:pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "-mt-16 sm:-mt-20 rounded-full bg-about-card p-1.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-full bg-gradient-to-br from-brand via-highlight to-brand p-[3px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: hero2_default,
										alt: "Retrato de Daniel Armas",
										loading: "lazy",
										width: 512,
										height: 512,
										className: "size-28 sm:size-36 rounded-full border-4 border-about-card object-cover"
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-bold text-foreground",
								children: "Daniel Armas"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-3xl bg-[#F9F9F9] dark:bg-[#1A1A1A] p-5 sm:p-6 border border-black/5 dark:border-white/5 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "space-y-5",
								children: info.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-about-card shadow-sm border border-border/50 text-brand",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: "size-[20px]",
											strokeWidth: 2
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 overflow-hidden",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80",
											children: item.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "text-[13px] sm:text-[14px] font-semibold text-foreground/90 break-words leading-snug mt-0.5",
											children: item.value
										})]
									})]
								}, item.label))
							})
						})
					]
				})]
			})]
		})
	});
}
var experiences = [
	{
		id: "security_data",
		companyLogo: "data:image/png;base64,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",
		stack: [
			"Angular",
			"TypeScript",
			"Spring Boot",
			"Java",
			"SQL",
			"Vitest",
			"Mockito",
			"Git"
		]
	},
	{
		id: "idc",
		companyLogo: "/assets/IDCLogo-D1LTkRsH.jfif",
		stack: [
			"WordPress",
			"PHP",
			"MySQL",
			"CMS"
		]
	},
	{
		id: "ai_connect",
		companyLogo: "/assets/ai-connect-logo-DCQBh9LB.jfif",
		stack: [
			"WordPress",
			"Go High Level",
			"n8n",
			"NoSQL",
			"LLMS",
			"Prompt Engineering"
		]
	}
];
function Experience() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experiencia",
		className: "relative overflow-hidden bg-experience py-20 text-experience-foreground sm:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 dark:hidden",
			style: { backgroundColor: "oklch(0.35 0.08 230)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-xl bg-highlight/15 text-highlight shadow-[0_0_20px_-4px_var(--color-highlight)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
						className: "size-5",
						strokeWidth: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl",
					children: t("experience.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 sm:mt-20 mx-auto max-w-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-12 sm:space-y-16 pl-4 sm:pl-0",
					children: experiences.map((exp, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative flex flex-col sm:flex-row gap-6 sm:gap-0 sm:items-stretch",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "shrink-0 sm:w-40 sm:mr-14 flex justify-start sm:justify-end",
								children: exp.companyLogo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: exp.companyLogo,
									alt: t(`experience.jobs.${exp.id}.role`),
									loading: "lazy",
									className: "size-24 rounded-3xl border border-white/20 bg-white object-contain p-3 shadow-[0_20px_30px_-25px_oklch(0_0_0/0.6)] sm:size-40"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative hidden sm:block sm:w-4 shrink-0 sm:mr-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-16 left-1/2 -translate-x-1/2 size-3.5 rounded-full bg-highlight ring-4 ring-experience z-10" }), index !== experiences.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%+4rem)] bg-white/20" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-4 top-5 size-2.5 rounded-full bg-highlight ring-4 ring-experience sm:hidden" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 sm:max-w-3xl sm:pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold text-white sm:text-xl",
										children: t(`experience.jobs.${exp.id}.role`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm font-medium text-highlight",
										children: t(`experience.jobs.${exp.id}.period`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-2xl text-[14px] leading-relaxed text-white/75",
										children: t(`experience.jobs.${exp.id}.description`)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: exp.stack.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/20",
											children: tech
										}, tech))
									})
								]
							})
						]
					}, exp.id))
				})
			})]
		})]
	});
}
function ProjectCard({ project }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative overflow-hidden rounded-2xl border border-projects-card-border bg-projects-card shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_50px_-20px_var(--color-brand)] sm:grid sm:grid-cols-[40%_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-brand/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/3] overflow-hidden sm:aspect-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: project.image,
					alt: `Vista previa de ${project.title}`,
					loading: "lazy",
					width: 800,
					height: 600,
					className: "size-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 flex flex-col justify-center p-6 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [project.inProgress && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hourglass, {
							className: "size-4 text-highlight",
							strokeWidth: 2
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold tracking-tight text-projects-foreground",
							children: project.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2.5 max-w-xl text-[14px] leading-relaxed text-projects-foreground/70",
						children: [project.inProgress && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-medium text-highlight",
							children: [t("projects.inProgress"), " "]
						}), project.description]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-brand/12 px-3 py-1 text-xs font-medium text-brand ring-1 ring-inset ring-brand/20",
							children: tag
						}, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [project.repo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.repo,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "inline-flex items-center gap-2 rounded-lg bg-projects-ink px-4 py-2.5 text-sm font-semibold text-projects-ink-foreground transition-colors hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
								className: "size-4",
								strokeWidth: 2
							}), t("projects.repo")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.demo,
							className: "inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90",
							children: [t("projects.demo"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "size-4",
								strokeWidth: 2
							})]
						})]
					})
				]
			})
		]
	}, project.title);
}
function Projects() {
	const { t } = useTranslation();
	const projects = t("projects.items", { returnObjects: true });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "proyectos",
		className: "relative overflow-hidden bg-projects py-20 text-projects-foreground sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 dark:hidden",
			style: { backgroundImage: "radial-gradient(ellipse 90% 40% at 50% 0%, oklch(0.85 0.12 230 / 0.18), transparent), radial-gradient(ellipse 90% 40% at 50% 100%, oklch(0.85 0.12 230 / 0.18), transparent)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
						className: "size-5",
						strokeWidth: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: t("projects.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6",
				children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project }, project.title))
			})]
		})]
	});
}
var techSections = [
	{
		id: "frontend",
		title: "Frontend",
		techs: [
			{
				name: "React",
				slug: "react"
			},
			{
				name: "TypeScript",
				slug: "typescript"
			},
			{
				name: "JavaScript",
				slug: "javascript"
			},
			{
				name: "HTML",
				slug: "html5"
			},
			{
				name: "CSS",
				slug: "css"
			},
			{
				name: "TailwindCSS",
				slug: "tailwindcss"
			},
			{
				name: "Angular",
				slug: "angular",
				invertOnDark: true
			},
			{
				name: "Vite",
				slug: "vite"
			}
		]
	},
	{
		id: "backend",
		title: "Backend",
		techs: [
			{
				name: "Node.js",
				slug: "nodedotjs"
			},
			{
				name: "Express",
				slug: "express",
				invertOnDark: true
			},
			{
				name: "Spring Boot",
				slug: "springboot"
			},
			{
				name: "Python",
				slug: "python"
			},
			{
				name: "Java",
				slug: "openjdk",
				invertOnDark: true
			},
			{
				name: "MongoDB",
				slug: "mongodb"
			},
			{
				name: "PostgreSQL",
				slug: "postgresql"
			},
			{
				name: "MySQL",
				slug: "mysql"
			},
			{
				name: "Firebase",
				slug: "firebase"
			},
			{
				name: "Oracle",
				slug: "oracle",
				customIcon: "/assets/oracle-logo-DWLNemSN.png"
			},
			{
				name: "SQL Server",
				slug: "microsoftsqlserver",
				source: "devicon",
				variant: "plain"
			},
			{
				name: "DBeaver",
				slug: "dbeaver",
				invertOnDark: true
			},
			{
				name: "C#",
				slug: "csharp",
				source: "devicon"
			},
			{
				name: "C++",
				slug: "cplusplus"
			}
		]
	},
	{
		id: "ia",
		title: "Inteligencia Artificial",
		techs: [
			{
				name: "TensorFlow",
				slug: "tensorflow"
			},
			{
				name: "Scikit-learn",
				slug: "scikitlearn"
			},
			{
				name: "n8n",
				slug: "n8n"
			},
			{
				name: "LLM's",
				icon: Bot
			}
		]
	},
	{
		id: "qa",
		title: "QA & Testing",
		techs: [
			{
				name: "Jest",
				slug: "jest"
			},
			{
				name: "Vitest",
				slug: "vitest"
			},
			{
				name: "Selenium",
				slug: "selenium"
			},
			{
				name: "Postman",
				slug: "postman"
			},
			{
				name: "Mockito",
				icon: TestTubeDiagonal
			},
			{
				name: "SonarQube",
				slug: "sonarqubeserver"
			}
		]
	},
	{
		id: "cicd",
		title: "Cloud & CI/CD",
		techs: [
			{
				name: "Docker",
				slug: "docker"
			},
			{
				name: "Git",
				slug: "git"
			},
			{
				name: "GitHub",
				slug: "github",
				invertOnDark: true
			},
			{
				name: "Vercel",
				slug: "vercel",
				invertOnDark: true
			},
			{
				name: "GCP",
				slug: "googlecloud"
			},
			{
				name: "Render",
				slug: "render",
				invertOnDark: true
			}
		]
	},
	{
		id: "mobile",
		title: "Desarrollo Móvil",
		techs: [
			{
				name: "Flutter",
				slug: "flutter"
			},
			{
				name: "Dart",
				slug: "dart"
			},
			{
				name: "Android Studio",
				slug: "androidstudio"
			}
		]
	}
];
function getIconUrl(tech) {
	if (tech.customIcon) return tech.customIcon;
	if (tech.source === "devicon") return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}/${tech.slug}-original.svg`;
	return `https://cdn.simpleicons.org/${tech.slug}`;
}
function TechCard({ tech }) {
	const Icon = tech.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-tech-card-border bg-tech-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_45px_-20px_var(--color-brand)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/15 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center gap-3",
				children: [Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-10 text-brand transition-transform duration-300 group-hover:scale-110",
					strokeWidth: 1.5
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: getIconUrl(tech),
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					width: 40,
					height: 40,
					className: `size-10 transition-transform duration-300 group-hover:scale-110 ${tech.invertOnDark ? "dark:invert" : ""}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-tech-foreground",
					children: tech.name
				})]
			})
		]
	});
}
function TechSection({ section }) {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "text-lg font-semibold tracking-tight text-tech-foreground text-white",
		children: t(`techStack.categories.${section.id}`, { defaultValue: section.title })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
		children: section.techs.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCard, { tech }, tech.name))
	})] });
}
function TechStack() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tecnologias",
		className: "relative overflow-hidden bg-tech-section py-20 text-tech-foreground sm:py-18",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 dark:hidden",
			style: { backgroundColor: "oklch(0.35 0.08 230)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
						className: "size-5",
						strokeWidth: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl",
					children: t("techStack.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-12",
				children: techSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechSection, { section }, section.id))
			})]
		})]
	});
}
var Profile_Pro_default = "/assets/Profile-Pro-CdB1pAu7.jfif";
var EMAIL = "danielalejandroarmasrobles@gmail.com";
var PHONE = "+593967909623";
var LINKEDIN_URL = "https://www.linkedin.com/in/alejo88/";
function Contact() {
	const { t } = useTranslation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "bg-contact py-20 text-contact-foreground sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex size-10 items-center justify-center rounded-xl bg-brand/15 text-brand shadow-[0_0_20px_-4px_var(--color-brand)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
						className: "size-5",
						strokeWidth: 2
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: t("contact.title")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/3] overflow-hidden rounded-2xl border border-contact-card-border shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] lg:aspect-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Profile_Pro_default,
						alt: "Daniel Armas",
						loading: "lazy",
						className: "size-full object-cover object-center"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col items-center justify-center rounded-2xl border border-contact-card-border bg-contact-card p-8 text-center shadow-[0_10px_40px_-25px_oklch(0_0_0/0.4)] sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-semibold tracking-tight text-brand sm:text-3xl",
							children: t("contact.subtitle")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-[15px] leading-relaxed text-contact-foreground/70",
							children: t("contact.description")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex w-full max-w-md flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: LINKEDIN_URL,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-colors hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
									className: "size-4.5",
									strokeWidth: 2
								}), t("contact.linkedin")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/${PHONE}`,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "inline-flex items-center justify-center gap-2.5 rounded-lg bg-available px-6 py-3.5 text-sm font-semibold text-available-foreground transition-colors hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4.5" }), t("contact.whatsapp")]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm shadow-[0_6px_20px_-12px_oklch(0_0_0/0.35)] ring-1 ring-inset ring-contact-card-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-brand",
								children: t("contact.emailLabel")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "font-medium text-contact-foreground/80 transition-colors hover:text-contact-foreground",
								children: EMAIL
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-contact-foreground/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "size-3.5",
									strokeWidth: 1.75
								}), "Quito, Ecuador"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-3.5",
									strokeWidth: 1.75
								}), "+593 967909623"]
							})]
						})
					]
				})]
			})]
		})
	});
}
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" })
	});
}
var techs = [
	"React",
	"TypeScript",
	"TailwindCSS",
	"Vite"
];
function Footer() {
	const { t } = useTranslation();
	(/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 dark:hidden",
			style: { backgroundColor: "oklch(0.35 0.08 230)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-6 py-10 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: Logo_AlejoDev_default,
						alt: "Logo",
						className: "h-12 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[14px] leading-relaxed text-white/90",
						children: t("footer.tagline")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-8 sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[13px] font-medium uppercase tracking-wider text-white/90",
						children: t("footer.builtWith")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-1.5",
						children: techs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[11px] font-medium text-white/85",
							children: t
						}, t))
					})]
				})]
			})
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
