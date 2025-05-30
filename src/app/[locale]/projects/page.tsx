'use client';
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectData";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
    const t = useTranslations();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">{t(`projects.title`)}</h1>
      <p className="text-lg mb-8 text-center">{t(`projects.intro`)}</p>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} reverse={index % 2 === 1} />
      ))}
    </main>
  );
}
