import oracleIcon from "@/assets/oracle-logo.png";
import { Bot, TestTube2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Tech = {
    name: string;
    slug?: string;
    customIcon?: string;
    icon?: LucideIcon;
    source?: "simpleicons" | "devicon";
    variant?: "original" | "plain";
    invertOnDark?: boolean;
};

export type TechSection = {
    id: string;
    title: string;
    techs: Tech[];
};

export const techSections: TechSection[] = [
    {
        id: "frontend",
        title: "Frontend",
        techs: [
            { name: "React", slug: "react" },
            { name: "TypeScript", slug: "typescript" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML", slug: "html5" },
            { name: "CSS", slug: "css" },
            { name: "TailwindCSS", slug: "tailwindcss" },
            { name: "Angular", slug: "angular", invertOnDark: true },
            { name: "Vite", slug: "vite" },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        techs: [
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Express", slug: "express", invertOnDark: true },
            { name: "Spring Boot", slug: "springboot" },
            { name: "Python", slug: "python" },
            { name: "Java", slug: "openjdk", invertOnDark: true },
            { name: "MongoDB", slug: "mongodb" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "MySQL", slug: "mysql" },
            { name: "Firebase", slug: "firebase" },
            { name: "Oracle", slug: "oracle", customIcon: oracleIcon },
            { name: "SQL Server", slug: "microsoftsqlserver", source: "devicon", variant: "plain" },
            { name: "DBeaver", slug: "dbeaver", invertOnDark: true },
            { name: "C#", slug: "csharp", source: "devicon" },
            { name: "C++", slug: "cplusplus" },
        ],
    },
    {
        id: "ia",
        title: "Inteligencia Artificial",
        techs: [
            { name: "TensorFlow", slug: "tensorflow" },
            { name: "Scikit-learn", slug: "scikitlearn" },
            { name: "n8n", slug: "n8n" },
            { name: "LLM's", icon: Bot },
        ],
    },
    {
        id: "qa",
        title: "QA & Testing",
        techs: [
            { name: "Jest", slug: "jest" },
            { name: "Vitest", slug: "vitest" },
            { name: "Selenium", slug: "selenium" },
            { name: "Postman", slug: "postman" },
            { name: "Mockito", icon: TestTube2 },
            { name: "SonarQube", slug: "sonarqubeserver" },
        ],
    },
    {
        id: "cicd",
        title: "Cloud & CI/CD",
        techs: [
            { name: "Docker", slug: "docker" },
            { name: "Git", slug: "git" },
            { name: "GitHub", slug: "github", invertOnDark: true },
            { name: "Vercel", slug: "vercel", invertOnDark: true },
            { name: "GCP", slug: "googlecloud" },
            { name: "Render", slug: "render", invertOnDark: true },
        ],
    },
    {
        id: "mobile",
        title: "Desarrollo Móvil",
        techs: [
            { name: "Flutter", slug: "flutter" },
            { name: "Dart", slug: "dart" },
            { name: "Android Studio", slug: "androidstudio" },
        ],
    },
];