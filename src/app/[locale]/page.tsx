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
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">{t("cvHeading")}</h2>
            <p className="pb-6">{t("cvIntro")}</p>
            <div className="pb-2 font-semibold">
              <Link href={`/${locale}/cv`} className="hover:underline mr-4 text-[var(--color-accent)]">
                {t("cvReadMore")}
              </Link>
              </div>
              <div className="mr-4 text-[var(--color-accent)] font-semibold">
              <a
                href="https://linkedin.com/in/annakarlsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* About education */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-b-3 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-full md:max-w-[80%]">
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-accent)]">
              {t("educationHeading")}
            </h2>
            <p className="pb-6">{t("educationIntro")}</p>
            <Link href={`${locale}/edu`} className="hover:underline text-[var(--color-accent)] font-semibold">
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
            <Link href={`${locale}/projects`} className="hover:underline font-semibold">
              {t("seeAllProjects")}
            </Link>
          </div>
        </div>

        {/* Contact info */}
        <div className="w-full bg-[var(--color-foreground)] text-white border-l-4 border-b-3 border-[var(--color-accent)] p-6 pl-10">
          <div className="max-w-full md:max-w-[80%]">
            <h2 className="text-xl font-semibold mb-2  text-[var(--color-accent)]">
              {t("contactHeading")}
            </h2>
            <p className="pb-6">{t("contactText")}</p>
            <Link href={`${locale}/contact`} className="hover:underline text-[var(--color-accent)] font-semibold">
              {t("contactLink")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
