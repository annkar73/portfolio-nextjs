"use client";

import { useTranslations } from "next-intl";

export default function EduContent() {
  const t = useTranslations();

  return (
    <section className="space-y-8">
      {/* Titel */}
      <header>
        <h1 className="text-3xl font-bold mb-2">{t("edu.title")}</h1>
        <p className="text-lg">{t("edu.intro")}</p>
      </header>

      {/* Kurser */}
      <section className="p-6 bg-[var(--color-foreground)] text-[var(--color-background)] border-l-4 border-[var(--color-accent)] rounded-none shadow-xl hover:shadow-xl/30 transition-shadow duration-300">
        <h2 className="text-[var(--color-accent)] text-2xl font-semibold border-b-2 border-[var(--color-accent)] pb-1 mb-3">
          {t("edu.courses")}
        </h2>
        <p>{t("edu.coursesDescription")}</p>
      </section>

      {/* LIA */}
      <section className="p-6 bg-[var(--color-background)] border-l-4 border-[var(--color-foreground)] rounded-none shadow-xl hover:shadow-xl/30 transition-shadow duration-300">
        <h2 className="text-2xl font-semibold border-b-2 border-[var(--color-foreground)] pb-1 mb-3">
          {t("edu.lia")}
        </h2>
        <p>{t("edu.liaDescription")}</p>

        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-xl font-semibold italic border-b border-[var(--color-foreground)] mb-1">
              {t("edu.lia1Title")}
            </h3>
            <p>{t("edu.lia1Desc")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold italic border-b border-[var(--color-foreground)] mb-1">
              {t("edu.lia2Title")}
            </h3>
            <p>{t("edu.lia2Desc")}</p>
            <p className="mt-2">{t("edu.lia2More")}</p>
          </div>
        </div>
      </section>

      {/* Exjobb */}
      <section className="p-6 bg-[var(--color-foreground)] text-[var(--color-background)] border-l-4 border-[var(--color-accent)] rounded-none shadow-xl hover:shadow-xl/30 transition-shadow duration-300">
        <h2 className="text-[var(--color-accent)] text-2xl font-semibold border-b-2 border-[var(--color-accent)] pb-1 mb-3">
          {t("edu.thesis")}
        </h2>
         <div className="space-y-3">
          <p>{t("edu.thesisDesc")}</p>
          <p>{t("edu.thesisDesc2")}</p>
          <p>{t("edu.thesisDesc3")}</p>
          <p>{t("edu.thesisDesc4")}</p>
        </div>
      </section>

      {/* Certifikat */}
      <section className="p-6 bg-[var(--color-background)] border-l-4 border-[var(--color-foreground)] rounded-none shadow-xl hover:shadow-xl/30 transition-shadow duration-300">
        <h2 className="text-2xl font-semibold border-b-2 border-[var(--color-foreground)] pb-1 mb-3">
          {t("edu.certificates")}
        </h2>
        <p>{t("edu.certificatesDesc")}</p>
        <p>{t("edu.certificatesDesc2")}</p>
      </section>
    </section>
  );
}
