// app/[locale]/cv/page.tsx
"use client";
import { useTranslations } from "next-intl";

export default function CVPage() {
  const t = useTranslations("cv");

  const education = t.raw("education.items") as {
    degree: string;
    school: string;
    period: string;
    details: string;
  }[];

  const experience = t.raw("experience.items") as {
    role: string;
    company: string;
    period: string;
    details: string[];
  }[];

  const skills = t.raw("skills.items") as string[];

  return (
    <main
      id="cv-content"
      className="max-w-5xl mx-auto p-6 bg-white text-[var(--color-foreground)] print:bg-white print:text-black print:p-0 print:shadow-none print:max-w-none print:mx-0"
    >
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t("name")}</h1>
        <p className="text-lg text-gray-700 mb-2">{t("title")}</p>
        <p className="text-gray-600 mb-1">
          <a href={`mailto:${t("contact")}`} className="hover:font-semibold hover:underline">{t("contact")}</a>
          </p>
        <p className="text-gray-600 mb-1">
          <a href={t("linkedin")} className="hover:font-semibold hover:underline"> {t("linkedin")}</a></p>
        <p className="text-gray-600 mb-2">
          <a href={t("github")} className="hover:font-semibold hover:underline">
          {t("github")}</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">
          {t("education.heading")}
        </h2>
        {education.slice().reverse().map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="font-semibold italic text-gray-700">
              {edu.school}
            </p>
            <p className="italic text-gray-700">{edu.period}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">
          {t("experience.heading")}
        </h2>
        {experience.slice().reverse().map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="font-semibold italic text-gray-700">
              {exp.company}
            </p> 
            <p className="italic text-gray-700">{exp.period}</p>
            <p className="list-disc list-inside">
              {exp.details}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">
          {t("skills.heading")}
        </h2>
        <ul className="list-disc list-inside text-sm grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      <button
        onClick={() => window.print()}
        className="mt-6 px-4 py-2 border-2 border-[var(--color-foreground)] text-[var(--color-foreground)] font-semibold rounded-none hover:bg-[var(--color-foreground)] hover:text-white print:hidden"
      >
        Skriv ut / Spara
      </button>
    </main>
  );
}
