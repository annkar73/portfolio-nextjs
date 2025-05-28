// app/cv/page.tsx
import { cvData } from "@/data/cvData";

export default function CVPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white text-gray-900 print:bg-white print:text-black print:p-0 print:shadow-none print:max-w-none print:mx-0">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{cvData.name}</h1>
        <p className="text-lg text-gray-700 mb-1">{cvData.title}</p>
        <p className="text-gray-600 mb-4">{cvData.contact}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">Utbildning</h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <p className="italic text-gray-700">{edu.school} — {edu.period}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">Erfarenhet</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="italic text-gray-700">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

<section>
  <h2 className="text-2xl font-semibold mb-4 border-b-2 border-[var(--color-secondary-accent)] pb-1">Färdigheter</h2>
  <ul className="list-disc list-inside text-sm grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
    {cvData.skills.map((skill, index) => (
      <li key={index}>{skill}</li>
    ))}
  </ul>
</section>

    </main>
  );
}
