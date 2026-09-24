import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as setDefaults, o as setI18n, t as I18nContext } from "./context-7ZoFrWIn.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as instance } from "../_libs/i18next.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CyDHd37k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initReactI18next = {
	type: "3rdParty",
	init(instance) {
		setDefaults(instance.options.react);
		setI18n(instance);
	}
};
function I18nextProvider({ i18n, defaultNS, children }) {
	const value = (0, import_react.useMemo)(() => ({
		i18n,
		defaultNS
	}), [i18n, defaultNS]);
	return (0, import_react.createElement)(I18nContext.Provider, { value }, children);
}
var CYBHA_APP_default = "/assets/CYBHA-APP-CKsdWfjR.jpg";
var Alinambi_PORT_default = "/assets/Alinambi-PORT-p-K0Qirk.jpeg";
var FitnessPro_PORT_default = "/assets/FitnessPro-PORT-C6lHulxy.jpeg";
var Multisala_PORT_default = "/assets/Multisala-PORT-C21anKg4.jpeg";
var RUMBAGO_default = "/assets/RUMBAGO-fjLWqILm.jpg";
var ECUREGIONES_default = "/assets/ECUREGIONES-DX6rquqD.jpg";
var i18n = instance.createInstance();
var resources = {
	es: { translation: {
		nav: {
			home: "Inicio",
			profile: "Perfil",
			experience: "Experiencia",
			projects: "Proyectos",
			technologies: "Tecnologías",
			contact: "Contacto"
		},
		contact: {
			title: "Contacto",
			subtitle: "Conecta conmigo",
			description: "Estoy abierto a nuevas oportunidades y colaboraciones. Escríbeme directamente.",
			linkedin: "Conecta conmigo en LinkedIn",
			whatsapp: "Escríbeme por WhatsApp",
			emailLabel: "Email:"
		},
		hero: {
			greeting: "Hola! soy",
			role: "Desarrollador de Software e Inteligencia Artificial",
			available: "Disponible para trabajar",
			hire_me: "Contrátame",
			download_cv: "Descargar CV"
		},
		about: {
			title: "Sobre",
			highlight: "Mi",
			description: "Soy desarrollador de software enfocado en crear productos web rápidos, accesibles y escalables. Combino interfaces cuidadas con arquitecturas sólidas e inteligencia artificial aplicada para resolver problemas reales de negocio con la aplicación de técnicas y conceptos esenciales de la industria de software y afines.",
			info: {
				location: "Ubicación:",
				email: "Correo:",
				phone: "Teléfono:",
				education: "Educación:",
				languages: "Idiomas:",
				location_value: "Quito, Pichincha, Ecuador",
				education_value: "Universidad de las Fuerzas Armadas ESPE — Egresado",
				languages_value: "Español (Nativo) · Inglés (B1+ Intermedio Alto)"
			},
			skills: [
				"FullStack Development",
				"MERN Development",
				"Java SpringBoot & Angular Development",
				"Apps and Mobile Development",
				"Soporte, Cloud, IA y Automatización"
			]
		},
		experience: {
			title: "Experiencia",
			jobs: {
				security_data: {
					role: "Pasante de desarrollo - Security Data",
					period: "Febrero 2026 — Julio 2026",
					description: "Desarrollé arquitecturas Full Stack optimizando microfrontends en Angular y microservicios en Java Spring Boot para módulos críticos en plataformas digitales. Garanticé la calidad del software mediante pruebas automatizadas (Mockito, Vitest, Jest), documentación de QA y control de versiones en GitHub. Además, administré bases de datos PostgreSQL y resolví incidencias complejas, asegurando la estabilidad operativa integral."
				},
				idc: {
					role: "Pasante de soporte página web - IDC Mayoristas en Computación",
					period: "Noviembre 2025 — Enero 2026",
					description: "Aseguré la estabilidad de la plataforma web resolviendo incidencias críticas mediante la depuración de código PHP y la optimización de plugins en WordPress. Paralelamente, mejoré la carga masiva de imágenes y gestioné la actualización continua del catálogo en producción, lo que permitió incrementar la eficiencia operativa del área."
				},
				ai_connect: {
					role: "Pasante de desarrollo - Ai Connect Solutions",
					period: "Septiembre 2025 — Octubre 2025",
					description: "Desarrollé landing pages corporativas utilizando plantillas WordPress y Go High Level, y sistematicé procesos operativos —como web scraping, mensajería, generación de documentos y automatización de bots— mediante flujos automatizados en n8n. Para potenciar estas soluciones, integré diversas APIs manejando eficientemente datos en formato JSON y establecí conexiones a bases de datos, logrando ejecutar operaciones CRUD de forma integral dentro de las automatizaciones."
				}
			}
		},
		projects: {
			title: "Proyectos personales",
			repo: "GitHub",
			demo: "Ver proyecto",
			items: [
				{
					id: "cyhba",
					title: "CYHBA APP",
					description: "Aplicación móvil desarrollada con Flutter y MongoDB que utiliza inteligencia artificial (TensowFlow y Pytorch) para predecir enfermedades cardíacas asociadas al consumo de alcohol, en base a un índice de factores de riesgo, se utiliza Python para el entrenamiento del modelo.",
					tags: [
						"Python",
						"Flutter",
						"Dart",
						"ML",
						"TensorFlow",
						"MongoDB",
						"Android"
					],
					image: CYBHA_APP_default,
					repo: "https://github.com/Ale8Daniel8Armas/CYHBA_APP",
					demo: "#"
				},
				{
					id: "alinambi",
					title: "Landing Page Escuela Aliñambi",
					description: "Plataforma web institucional enfocada en brindar visibilidad y facilitar la gestión administrativa de la Unidad de Educación Especializada Fiscomisional Aliñambi. El frontend es informativo y el backend permite la administración de contenido, archivos y usuarios.",
					tags: [
						"JavaScript",
						"CSS",
						"HTML5",
						"React",
						"TailwindCSS",
						"Node.js",
						"Express",
						"MongoDB"
					],
					image: Alinambi_PORT_default,
					repo: "https://github.com/Ale8Daniel8Armas/Escuela-AlinambiV2",
					demo: "https://eebfalinambi.vercel.app/"
				},
				{
					id: "multisala",
					title: "Chat Multisala con WebSockets",
					description: "Aplicación de chat en tiempo real con múltiples salas, desarrollada con React, Node.js y WebSockets para comunicación bidireccional instantánea, se incluyen mecanismos para seguridad y protección de acceso.",
					tags: [
						"TypeScript",
						"CSS",
						"HTML5",
						"React",
						"TailwindCSS",
						"Node.js",
						"JWT",
						"WebSockets"
					],
					image: Multisala_PORT_default,
					repo: "https://github.com/Ale8Daniel8Armas/ChatMultisala",
					demo: "https://chat-multisala.vercel.app/"
				},
				{
					id: "rumbago",
					title: "RumbaGO APP",
					description: "Aplicación móvil de interacción social desarrollada con Flutter/Dart, con autenticación y almacenamiento en Firebase. Permite la gestión de locales y usuarios a través de reseñas, notificaciones personalizadas y geolocalización.",
					tags: [
						"Flutter",
						"Dart",
						"Firebase",
						"Android"
					],
					image: RUMBAGO_default,
					repo: "https://github.com/Ale8Daniel8Armas/Rumba-GO-App",
					demo: "#"
				},
				{
					id: "ecuregiones",
					title: "ECUREGIONES VR - Aplicación Educativa en Realidad Virtual",
					description: "Aplicación inmersiva de realidad virtual orientada a la exploración de referencias geográficas mediante entornos 3D de múltiples salas con enfoque en la educación asistida sobre las regiones del Ecuador.",
					tags: [
						"C#",
						"Unity",
						"Blender",
						"Realidad Virtual",
						"POO"
					],
					image: ECUREGIONES_default,
					demo: "#"
				},
				{
					id: "fitnesspro",
					title: "Landing Page FitnessPro EC",
					description: "Plataforma web realizado con WordPress y alojamiento en Hostinger. Se aplicó un metodología iterativa incremental, se gestionó el ciclo de vida completo del proyecto, desde la elicitación de requisitos hasta su implementación en producción al tratarse de un proyecto real para un cliente.",
					tags: [
						"JavaScript",
						"CSS",
						"HTML5",
						"WordPress"
					],
					image: FitnessPro_PORT_default,
					demo: "https://fitnessproec.com/"
				}
			]
		},
		techStack: {
			title: "Tecnologías",
			categories: {
				frontend: "Frontend",
				backend: "Backend",
				ia: "Inteligencia Artificial",
				qa: "QA & Testing",
				cicd: "Cloud & CI/CD",
				mobile: "Desarrollo Móvil"
			}
		},
		footer: {
			tagline: "Daniel Armas — Desarrollador de Software e IA",
			builtWith: "Construido con"
		}
	} },
	en: { translation: {
		nav: {
			home: "Home",
			profile: "Profile",
			experience: "Experience",
			projects: "Projects",
			technologies: "Technologies",
			contact: "Contact"
		},
		contact: {
			title: "Contact",
			subtitle: "Connect with me",
			description: "I am open to new opportunities and collaborations. Reach out directly.",
			linkedin: "Connect with me on LinkedIn",
			whatsapp: "Message me on WhatsApp",
			emailLabel: "Email:"
		},
		hero: {
			greeting: "Hi! I am",
			role: "Software & Artificial Intelligence Developer",
			available: "Available for work",
			hire_me: "Hire me",
			download_cv: "Download CV"
		},
		about: {
			title: "About",
			highlight: "Me",
			description: "I am a software developer focused on creating fast, accessible, and scalable web products. I combine neat interfaces with solid architectures and applied artificial intelligence to solve real business problems using essential techniques and concepts from the software industry.",
			info: {
				location: "Location:",
				email: "Email:",
				phone: "Phone:",
				education: "Education:",
				languages: "Languages:",
				location_value: "Quito, Pichincha, Ecuador",
				education_value: "Universidad de las Fuerzas Armadas ESPE — Graduated",
				languages_value: "Spanish (Native) · English (B1+ Upper Intermediate)"
			},
			skills: [
				"FullStack Development",
				"MERN Development",
				"Java SpringBoot & Angular Development",
				"Apps and Mobile Development",
				"Support, Cloud, AI and Automation"
			]
		},
		experience: {
			title: "Experience",
			jobs: {
				security_data: {
					role: "Software Development Intern - Security Data",
					period: "February 2026 — July 2026",
					description: "Developed Full Stack architectures by optimizing Angular microfrontends and Java Spring Boot microservices for critical modules in digital platforms. Ensured software quality through automated testing (Mockito, Vitest, Jest), QA documentation, and version control via GitHub. Additionally, managed PostgreSQL databases and resolved complex issues, ensuring comprehensive operational stability."
				},
				idc: {
					role: "Web Support Intern - IDC Mayoristas en Computación",
					period: "November 2025 — January 2026",
					description: "Ensured web platform stability by resolving critical issues through PHP code debugging and WordPress plugin optimization. Simultaneously, improved bulk image uploads and managed continuous catalog updates in production, leading to increased operational efficiency."
				},
				ai_connect: {
					role: "Software Development Intern - Ai Connect Solutions",
					period: "September 2025 — October 2025",
					description: "Developed corporate landing pages using WordPress templates and Go High Level, and systematized operational processes—such as web scraping, messaging, bots automation and document generation—through automated workflows in n8n. To enhance these solutions, I successfully integrated various APIs by handling JSON data efficiently and established database connections, enabling integral CRUD operations within the automations."
				}
			}
		},
		projects: {
			title: "Personal Projects",
			repo: "GitHub",
			demo: "View project",
			items: [
				{
					id: "cyhba",
					title: "CYHBA APP",
					description: "Mobile application developed with Flutter and MongoDB that uses artificial intelligence (TensorFlow and PyTorch) to predict heart diseases associated with alcohol consumption, based on a risk factor index, using Python for model training.",
					tags: [
						"Python",
						"Flutter",
						"Dart",
						"ML",
						"TensorFlow",
						"MongoDB",
						"Android"
					],
					image: CYBHA_APP_default,
					repo: "https://github.com/Ale8Daniel8Armas/CYHBA_APP",
					demo: "#"
				},
				{
					id: "alinambi",
					title: "Escuela Aliñambi Landing Page",
					description: "Institutional web platform focused on providing visibility and facilitating the administrative management of the Aliñambi Special Education Unit. The frontend is informative and the backend allows the administration of content, files, and users.",
					tags: [
						"JavaScript",
						"CSS",
						"HTML5",
						"React",
						"TailwindCSS",
						"Node.js",
						"Express",
						"MongoDB"
					],
					image: Alinambi_PORT_default,
					repo: "https://github.com/Ale8Daniel8Armas/Escuela-AlinambiV2",
					demo: "https://eebfalinambi.vercel.app/"
				},
				{
					id: "multisala",
					title: "Multi-room Chat with WebSockets",
					description: "Real-time chat application with multiple rooms, developed with React, Node.js and WebSockets for instant bidirectional communication, including mechanisms for security and access protection.",
					tags: [
						"TypeScript",
						"CSS",
						"HTML5",
						"React",
						"TailwindCSS",
						"Node.js",
						"JWT",
						"WebSockets"
					],
					image: Multisala_PORT_default,
					repo: "https://github.com/Ale8Daniel8Armas/ChatMultisala",
					demo: "https://chat-multisala.vercel.app/"
				},
				{
					id: "rumbago",
					title: "RumbaGO APP",
					description: "Social interaction mobile application developed with Flutter/Dart, with authentication and storage in Firebase. Allows the management of venues and users through reviews, personalized notifications, and geolocation.",
					tags: [
						"Flutter",
						"Dart",
						"Firebase",
						"Android"
					],
					image: RUMBAGO_default,
					repo: "https://github.com/Ale8Daniel8Armas/Rumba-GO-App",
					demo: "#"
				},
				{
					id: "ecuregiones",
					title: "ECUREGIONES VR - Virtual Reality Educational App",
					description: "Immersive virtual reality application focused on the exploration of geographic references through multiple 3D room environments with an emphasis on assisted education about the regions of Ecuador.",
					tags: [
						"C#",
						"Unity",
						"Blender",
						"Realidad Virtual",
						"POO"
					],
					image: ECUREGIONES_default,
					repo: "https://github.com",
					demo: "#"
				},
				{
					id: "fitnesspro",
					title: "FitnessPro EC Landing Page",
					description: "Web platform created with WordPress and hosted on Hostinger. An incremental iterative methodology was applied, managing the entire project lifecycle, from requirements elicitation to production deployment, as it was a real project for a client.",
					tags: [
						"JavaScript",
						"CSS",
						"HTML5",
						"WordPress"
					],
					image: FitnessPro_PORT_default,
					demo: "https://fitnessproec.com/"
				}
			]
		},
		techStack: {
			title: "Technologies",
			categories: {
				frontend: "Frontend",
				backend: "Backend",
				ia: "Artificial Intelligence",
				qa: "QA & Testing",
				cicd: "Cloud & CI/CD",
				mobile: "Mobile Development"
			}
		},
		footer: {
			tagline: "Daniel Armas — Software & AI Developer",
			builtWith: "Built with"
		}
	} }
};
i18n.use(initReactI18next).init({
	resources,
	fallbackLng: "es",
	lng: "es",
	initImmediate: false,
	interpolation: { escapeValue: false }
});
var styles_default = "/assets/styles-BTjPneVa.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Portfolio Web" },
			{
				name: "description",
				content: "REACT and TypeScript Project"
			},
			{
				name: "author",
				content: "Daniel Armas"
			},
			{
				property: "og:title",
				content: "Portfolio Web"
			},
			{
				property: "og:description",
				content: "REACT and TypeScript Project"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:wght@600;700&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.jfif",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "overflow-x-hidden",
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nextProvider, {
			i18n,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})
	});
}
var $$splitComponentImporter = () => import("./routes-D3dJocui.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AlejoDev88 — Portfolio Web" },
		{
			name: "description",
			content: "Portafolio de Daniel Armas: perfil, experiencia, proyectos y tecnologías de desarrollo web frontend."
		},
		{
			property: "og:title",
			content: "AlejoDev88 — Portfolio Web"
		},
		{
			property: "og:description",
			content: "Perfil, experiencia, proyectos y tecnologías de un desarrollador web frontend."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
