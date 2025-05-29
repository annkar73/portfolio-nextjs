'use client';

import { useTranslations } from "next-intl";

export default function EduContent() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{t("edu.title")}</h1>
      <p>{t("edu.intro")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("edu.courses")}</h2>
      <p>{t("edu.aboutLiaAndThesis")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("edu.lia")}</h2>
      <p>{t("edu.liaDescription")}</p>

      <h3 className="text-xl font-bold mb-2 mt-4">{t("edu.lia1Title")}</h3>
      <p>{t("edu.lia1Desc")}</p>

      <h3 className="text-xl font-bold mb-2 mt-4">{t("edu.lia2Title")}</h3>
      <p>{t("edu.lia2Desc")}</p>

      <p>{t("edu.lia2More")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("edu.thesis")}</h2>
      <p>{t("edu.thesisDesc")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("edu.certificates")}</h2>
      <p>{t("edu.certificatesDesc")}</p>
    </>
  );
}
