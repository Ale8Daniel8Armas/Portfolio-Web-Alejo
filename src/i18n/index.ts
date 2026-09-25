import i18next from 'i18next';

const i18n = i18next.createInstance();
import { initReactI18next } from 'react-i18next';

import project1 from "@/assets/CYBHA-APP.jpg";
import project2 from "@/assets/Alinambi-PORT.jpeg";
import project3 from "@/assets/FitnessPro-PORT.jpeg";
import project4 from "@/assets/Multisala-PORT.jpeg";
import project5 from "@/assets/RUMBAGO.jpg";
import project6 from "@/assets/ECUREGIONES.jpg";

export type Project = {
    id: string;
    title: string;
    inProgress?: boolean;
    description: string;
    tags: string[];
    image: string;
    repo?: string;
    demo: string;
};

const resources = {
    es: {
        translation: {
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
                        tags: ["Python", "Flutter", "Dart", "ML", "TensorFlow", "MongoDB", "Android"],
                        image: project1,
                        repo: "https://github.com/Ale8Daniel8Armas/CYHBA_APP",
                        demo: "#",
                    },
                    {
                        id: "alinambi",
                        title: "Landing Page Escuela Aliñambi",
                        description: "Plataforma web institucional enfocada en brindar visibilidad y facilitar la gestión administrativa de la Unidad de Educación Especializada Fiscomisional Aliñambi. El frontend es informativo y el backend permite la administración de contenido, archivos y usuarios.",
                        tags: ["JavaScript", "CSS", "HTML5", "React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
                        image: project2,
                        repo: "https://github.com/Ale8Daniel8Armas/Escuela-AlinambiV2",
                        demo: "https://eebfalinambi.vercel.app/",
                    },
                    {
                        id: "multisala",
                        title: "Chat Multisala con WebSockets",
                        description: "Aplicación de chat en tiempo real con múltiples salas, desarrollada con React, Node.js y WebSockets para comunicación bidireccional instantánea, se incluyen mecanismos para seguridad y protección de acceso.",
                        tags: ["TypeScript", "CSS", "HTML5", "React", "TailwindCSS", "Node.js", "JWT", "WebSockets"],
                        image: project4,
                        repo: "https://github.com/Ale8Daniel8Armas/ChatMultisala",
                        demo: "https://chat-multisala.vercel.app/",
                    },
                    {
                        id: "rumbago",
                        title: "RumbaGO APP",
                        description: "Aplicación móvil de interacción social desarrollada con Flutter/Dart, con autenticación y almacenamiento en Firebase. Permite la gestión de locales y usuarios a través de reseñas, notificaciones personalizadas y geolocalización.",
                        tags: ["Flutter", "Dart", "Firebase", "Android"],
                        image: project5,
                        repo: "https://github.com/Ale8Daniel8Armas/Rumba-GO-App",
                        demo: "#",
                    },
                    {
                        id: "ecuregiones",
                        title: "ECUREGIONES VR - Aplicación Educativa en Realidad Virtual",
                        description: "Aplicación inmersiva de realidad virtual orientada a la exploración de referencias geográficas mediante entornos 3D de múltiples salas con enfoque en la educación asistida sobre las regiones del Ecuador.",
                        tags: ["C#", "Unity", "Blender", "Realidad Virtual", "POO"],
                        image: project6,
                        repo: "https://github.com/Ale8Daniel8Armas/ECUREGIONES_VR",
                        demo: "#",
                    },
                    {
                        id: "fitnesspro",
                        title: "Landing Page FitnessPro EC",
                        description: "Plataforma web realizado con WordPress y alojamiento en Hostinger. Se aplicó un metodología iterativa incremental, se gestionó el ciclo de vida completo del proyecto, desde la elicitación de requisitos hasta su implementación en producción al tratarse de un proyecto real para un cliente.",
                        tags: ["JavaScript", "CSS", "HTML5", "WordPress"],
                        image: project3,
                        demo: "https://fitnessproec.com/",
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
        }
    },
    en: {
        translation: {
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
                        tags: ["Python", "Flutter", "Dart", "ML", "TensorFlow", "MongoDB", "Android"],
                        image: project1,
                        repo: "https://github.com/Ale8Daniel8Armas/CYHBA_APP",
                        demo: "#",
                    },
                    {
                        id: "alinambi",
                        title: "Escuela Aliñambi Landing Page",
                        description: "Institutional web platform focused on providing visibility and facilitating the administrative management of the Aliñambi Special Education Unit. The frontend is informative and the backend allows the administration of content, files, and users.",
                        tags: ["JavaScript", "CSS", "HTML5", "React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
                        image: project2,
                        repo: "https://github.com/Ale8Daniel8Armas/Escuela-AlinambiV2",
                        demo: "https://eebfalinambi.vercel.app/",
                    },
                    {
                        id: "multisala",
                        title: "Multi-room Chat with WebSockets",
                        description: "Real-time chat application with multiple rooms, developed with React, Node.js and WebSockets for instant bidirectional communication, including mechanisms for security and access protection.",
                        tags: ["TypeScript", "CSS", "HTML5", "React", "TailwindCSS", "Node.js", "JWT", "WebSockets"],
                        image: project4,
                        repo: "https://github.com/Ale8Daniel8Armas/ChatMultisala",
                        demo: "https://chat-multisala.vercel.app/",
                    },
                    {
                        id: "rumbago",
                        title: "RumbaGO APP",
                        description: "Social interaction mobile application developed with Flutter/Dart, with authentication and storage in Firebase. Allows the management of venues and users through reviews, personalized notifications, and geolocation.",
                        tags: ["Flutter", "Dart", "Firebase", "Android"],
                        image: project5,
                        repo: "https://github.com/Ale8Daniel8Armas/Rumba-GO-App",
                        demo: "#",
                    },
                    {
                        id: "ecuregiones",
                        title: "ECUREGIONES VR - Virtual Reality Educational App",
                        description: "Immersive virtual reality application focused on the exploration of geographic references through multiple 3D room environments with an emphasis on assisted education about the regions of Ecuador.",
                        tags: ["C#", "Unity", "Blender", "Realidad Virtual", "POO"],
                        image: project6,
                        repo: "https://github.com",
                        demo: "#",
                    },
                    {
                        id: "fitnesspro",
                        title: "FitnessPro EC Landing Page",
                        description: "Web platform created with WordPress and hosted on Hostinger. An incremental iterative methodology was applied, managing the entire project lifecycle, from requirements elicitation to production deployment, as it was a real project for a client.",
                        tags: ["JavaScript", "CSS", "HTML5", "WordPress"],
                        image: project3,
                        demo: "https://fitnessproec.com/",
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
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        lng: 'es',
        initImmediate: false,
        interpolation: {
            escapeValue: false
        }
    } as Parameters<typeof i18n.init>[0]);

export default i18n;
