'use client';

import { useTranslations } from "next-intl";

export default function EduContent() {
  //const locale = useLocale();
  const t = useTranslations("Edu");

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p>{t("intro")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("courses")}</h2>
      <p>{t("aboutLiaAndThesis")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("lia")}</h2>
      <p>{t("liaDescription")}</p>

      <h3 className="text-xl font-bold mb-2 mt-4">{t("lia1Title")}</h3>
      <p>{t("lia1Desc")}</p>

      <h3 className="text-xl font-bold mb-2 mt-4">{t("lia2Title")}</h3>
      <p>{t("lia2Desc")}</p>

      <p>{t("lia2More")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("thesis")}</h2>
      <p>{t("thesisDesc")}</p>

      <h2 className="text-2xl font-bold mb-4 mt-4">{t("certificates")}</h2>
      <p>{t("certificatesDesc")}</p>
    </>
  );
}
