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

      <main className="p-6 text-[var(--color-foreground)] bg-white max-w-3xl mx-auto">
        {/* Bakgrund + CV */}
        <div className="w-full max-w-3xl text-left border-0 border-l-5 border-[var(--color-accent)] p-6 mb-8">
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

        {/* about education */}
        <div className="w-full max-w-3xl text-right border-0 border-r-5 border-[var(--color-accent)] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("educationHeading")}
          </h2>
          <p>{t("educationIntro")}</p>
          <Link href="/education" className="underline">
            {t("readMore")}
          </Link>
        </div>

        {/* Project carousel */}
        <div className="w-full max-w-3xl text-left border-0 border-l-5 border-[var(--color-accent)] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">
            {t("projectCarouselHeading")}
          </h2>
          <ProjectCarousel />
          <Link href="/projects" className="underline">
            {t("seeAllProjects")}
          </Link>
        </div>

        {/* Contact info */}
        <div className="w-full max-w-3xl text-right border-0 border-r-5 border-[var(--color-accent)] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">{t("contactHeading")}</h2>
          <p>{t("contactText")}</p>
          <Link href="/contact" className="underline">
            {t("contactLink")}
          </Link>
        </div>
      </main>
    </>
  );
}
