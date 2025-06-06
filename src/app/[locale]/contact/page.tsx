'use client';

import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("contact.title")}</h1>
      <p className="max-w-3xl text-lg mb-8 text-center">{t("contact.intro")}</p>
      <ContactForm />
      <div className="w-full bg-[var(--color-foreground)] p-6 mt-8 mx-auto">
      <h2 className="text-2xl font-semibold mt-5 mb-4 text-center text-[var(--color-accent)]">{t("contact.subtitle")}</h2>

      <p className="text-center mb-4 text-[var(--color-background)]">
        {t("contact.addressText")}: <a href={`mailto:${t("contact.address")}`} className="text-[var(--color-accent)] hover:underline">{t("contact.address")}</a>
      </p>

      <p className="text-center mb-4 text-[var(--color-background)]">
        {t("contact.githubText")} <a href={t("contact.github")} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">GitHub</a>   
      </p>

      <p className="text-center mb-4 text-[var(--color-background)]">
        {t("contact.linkedinText")} <a href={t("contact.linkedin")} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">LinkedIn</a> 
      </p>
      </div>
    </main>
  );
}
