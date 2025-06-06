"use client";

import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold px-4 mb-6 text-left md:text-center">
        {t("contact.title")}
      </h1>
      <p className="max-w-3xl text-lg px-4 mb-2 text-left md:text-center">
        {t("contact.intro")}
      </p>
      <p className="max-w-3xl text-lg px-4 mb-4 text-left md:text-center">
        {t("contact.intro2")}
      </p>

      <ContactForm />

      <div className="min-w-full bg-[var(--color-foreground)] p-6 mt-8 mb-0 -mx-4">
        <h2 className="text-2xl font-bold mt-5 mb-4 text-center text-[var(--color-accent)]">
          {t("contact.subtitle")}
        </h2>

        <p className="text-center px-4 mb-3 text-[var(--color-background)]">
          {t("contact.addressText")}{" "}
          <a
            href={`mailto:${t("contact.address")}`}
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            {t("contact.address")}
          </a>
        </p>

        <p className="text-center px-4 mb-6 text-[var(--color-background)]">
          {t("contact.githubText")}{" "}
          <a
            href={t("contact.github")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            GitHub{" "}
          </a>
          {t("contact.linkedinText")}{" "}
          <a
            href={t("contact.linkedin")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </main>
  );
}
