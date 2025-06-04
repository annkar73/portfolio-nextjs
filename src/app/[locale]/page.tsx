"use client";

import Hero from "@/components/Hero";
import { useTranslations } from "next-intl";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <Hero />

      <main className="p-6 text-[var(--color-foreground)] bg-white max-w-5xl mx-auto space-y-8">
        {/* Bakgrund + CV */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-[75%] text-left">
            <h2 className="text-xl font-semibold mb-2">{t("cvHeading")}</h2>
            <p>{t("cvIntro")}</p>
            <div className="mt-2">
              <Link href="/cv" className="underline mr-4">
                {t("readMore")}
              </Link>
              <a
                href="https://linkedin.com/in/annakarlsen"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* About education */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-r-4 border-[var(--color-accent)] p-6 pr-10">
          <div className="max-w-[75%] ml-auto text-right">
            <h2 className="text-xl font-semibold mb-2">
              {t("educationHeading")}
            </h2>
            <p>{t("educationIntro")}</p>
            <Link href="/education" className="underline">
              {t("readMore")}
            </Link>
          </div>
        </div>

        {/* Project carousel */}
        <div className="w-full bg-white text-[var(--color-foreground)] p-6">
          <div className="text-left">
            <h2 className="text-xl font-semibold mb-2">
              {t("projectCarouselHeading")}
            </h2>
            <ProjectCarousel />
            <Link href="/projects" className="underline">
              {t("seeAllProjects")}
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-r-4 border-[var(--color-accent)] p-6">
          <div className="ml-auto text-right max-w-[75%]">
            <h2 className="text-xl font-semibold mb-2">
              {t("contactHeading")}
            </h2>
            <p>{t("contactText")}</p>
            <Link href="/contact" className="underline">
              {t("contactLink")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
