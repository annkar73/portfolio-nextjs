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
    </main>
  );
}
