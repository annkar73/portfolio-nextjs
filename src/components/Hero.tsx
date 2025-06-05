"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() { 
  const t = useTranslations("hero");

  return (
    <section className="relative h-[60vh] w-full">
      <Image
        src="/images/hero_image2.png"
        alt="Hero background"
        fill
        priority
        className="object-cover border-none"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center space-y-4 py-8">
        <h1 className="text-[var(--color-accent)] text-4xl md:text-5xl font-bold text-center">
          {t("name")}
        </h1>
        <h3 className="text-[var(--color-background)] text-xl md:text-3xl italic font-mono">
          {t("title")}
        </h3>
        <div className="my-10 mx-10 text-[var(--color-accent)] text-xl md:text-2xl space-y-4">
        <p>
            <q className="italic">{t("quote")}</q>{" "}
            <span>{t("quoteAuthor")}</span>
          </p>
           <p>{t("text1")}</p>
        </div>
      </div>
    </section>
  );
}
