'use client';

import { useTranslations } from "next-intl";

export default function EduContent() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 ">{t("edu.title")}</h1>
      <p>{t("edu.intro")}</p>

      <h2 className="text-2xl font-semibold mb-4 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.courses")}</h2>
      <p>{t("edu.coursesDescription")}</p>

      <h2 className="text-2xl font-semibold mb-4 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.lia")}</h2>
      <p>{t("edu.liaDescription")}</p>

      <h3 className="text-xl font-semibold mb-2 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.lia1Title")}</h3>
      <p>{t("edu.lia1Desc")}</p>

      <h3 className="text-xl font-semibold mb-2 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.lia2Title")}</h3>
      <p>{t("edu.lia2Desc")}</p>

      <p>{t("edu.lia2More")}</p>

      <h2 className="text-2xl font-semibold mb-4 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.thesis")}</h2>
      <p>{t("edu.thesisDesc")}</p>
      <p>{t("edu.thesisDesc2")}</p>
      <p>{t("edu.thesisDesc3")}</p>
      <p>{t("edu.thesisDesc4")}</p>

      <h2 className="text-2xl font-semibold mb-4 mt-4 border-b-2 border-[var(--color-secondary-accent)]">{t("edu.certificates")}</h2>
      <p>{t("edu.certificatesDesc")}</p>
      <p>{t("edu.certificatesDesc2")}</p>
    </>
  );
}
