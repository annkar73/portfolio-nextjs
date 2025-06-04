"use client";

import Hero from "@/components/Hero";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <>
      <Hero />

      <main className="p-6 text-[var(--color-foreground)] bg-white max-w-5xl mx-auto space-y-10">
        {/* Bakgrund + CV */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-b-3 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-full md:max-w-[75%]">
            <h2 className="text-xl font-semibold mb-2">{t("cvHeading")}</h2>
            <p className="pb-6">{t("cvIntro")}</p>
            <div className="pb-2">
              <Link href={`/${locale}/cv`} className="underline mr-4 text-[var(--color-accent)]">
                {t("cvReadMore")}
              </Link>
              </div>
              <div className="underline mr-4 text-[var(--color-accent)]">
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
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-b-3 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-full md:max-w-[80%]">
            <h2 className="text-xl font-semibold mb-2">
              {t("educationHeading")}
            </h2>
            <p className="pb-6">{t("educationIntro")}</p>
            <Link href={`${locale}/edu`} className="underline text-[var(--color-accent)]">
              {t("eduReadMore")}
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
            <Link href={`${locale}/projects`} className="underline">
              {t("seeAllProjects")}
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-b-3 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-full md:max-w-[80%]">
            <h2 className="text-xl font-semibold mb-2">
              {t("contactHeading")}
            </h2>
            <p className="pb-6">{t("contactText")}</p>
            <Link href={`${locale}/contact`} className="underline text-[var(--color-accent)]">
              {t("contactLink")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
