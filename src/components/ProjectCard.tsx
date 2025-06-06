'use client';

import Image from "next/image";
import { IProject } from "@/data/projectData";
import Button from "@/components/Button";
import { useTranslations } from "next-intl";

interface Props {
  project: IProject;
  reverse?: boolean;
}

export default function ProjectCard({ project, reverse = false }: Props) {
  const t = useTranslations(); 

  const imageSrc =
    project.image && project.image.trim() !== ""
      ? project.image
      : "/images/placeholder-2.png";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-white mb-12`}
      style={{ minHeight: 300 }}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={t(`projects.title`)}
          width={800}
          height={500}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL="/images/placeholder-2.png"
        />
      </div>

      {/* Separator */}
      <div
        className={`mx-auto md:mx-0 border-t-3 md:border-t-0 ${
          reverse ? "md:border-r-4" : "md:border-l-4"
        } border-l-0 w-full md:w-0 h-0.5 md:h-auto`}
        style={{ borderColor: "var(--color-accent)" }}
      ></div>

      <div
        className="w-full md:w-1/2 flex flex-col justify-center p-6"
        style={{
          backgroundColor: "var(--color-foreground)",
          color: "var(--color-background)",
        }}
      >
        <h2 className="text-xl text-[var(--color-accent)] uppercase font-semibold mb-2">
          {t(`projects.${project.id}.title`)}
        </h2>
        <p className="mb-4">{t(`projects.${project.id}.description`)}</p>
        {project.url && (
          <Button variant="default" size="default" asChild className={undefined}> 
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold mt-4"
            >
              Online: {t(`projects.${project.id}.title`)}
            </a>
            
          </Button>
 )}
         {project.url && (

          <Button variant="default" size="default" asChild className={undefined}>
            <a
              href={project.github}
              className="font-semibold mt-2"
            >
              GitHub: {t(`projects.${project.id}.title`)}
            </a>    
          </Button>
         )}
      </div>
    </div>
  );
}
