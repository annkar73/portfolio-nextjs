import Image from "next/image";
import { IProject } from "@/data/projectData";

interface Props {
  project: IProject;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: Props) {
  const imageSrc = project.image && project.image.trim() !== "" 
    ? project.image 
    : "/images/placeholder-2.png";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-white mb-12`} // vit bakgrund för hela kortet
      style={{ minHeight: 300 }} // valfritt, ger höjd
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={project.title}
          width={800}
          height={500}
          className="w-full h-full object-cover" // täcker hela div:en
          placeholder="blur"
          blurDataURL="/images/placeholder-2.png"
        />
      </div>
      <div
        className="w-full md:w-1/2 flex flex-col justify-center p-6"
        style={{
          backgroundColor: "var(--color-foreground)", // din mörka bakgrund från css-variabel
          color: "var(--color-background)", // ljus text
        }}
      >
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--color-secondary-accent)" }}
            className="font-semibold underline"
          >
            Läs mer
          </a>
        )}
      </div>
    </div>
  );
}
