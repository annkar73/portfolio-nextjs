"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { projects } from "@/data/projectData";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function ProjectCarousel() {
  const t = useTranslations();
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollSpeed = 1;
    let animationFrame: number;

    const animate = () => {
      if (!carousel) return;

      carousel.scrollLeft += scrollSpeed;

      
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        
        carousel.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-2 whitespace-nowrap overflow-hidden select-none pointer-events-none"
      >
        {/* Double projects for loop effect */}
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 pt-2 pb-4 w-full sm:w-1/2 lg:w-1/3"
            onClick={() => router.push(`${locale}/projects`)}
            style={{ pointerEvents: "auto", cursor: "pointer" }}
          >
            <div className="relative w-full h-40 border-b-2 border-[var(--color-accent)] overflow-hidden rounded-none">
              <Image
                src={project.image}
                alt={project.id}
                fill
                sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw, (min-width: 1024px) 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bg-[var(--color-foreground)] text-[var(--color-accent)] p-4">
              <p className="text-center uppercase font-semibold tracking-wide">
                {t(`projects.${project.id}.title`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
