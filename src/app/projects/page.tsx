import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projectData";

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Projekt</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} reverse={index % 2 === 1} />
      ))}
    </main>
  );
}
