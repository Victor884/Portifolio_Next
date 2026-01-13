import { EducationCard } from '../education-card'

const MOCK_EDUCATION = [
  {
    institution: 'Universidade Federal',
    degree: 'B.Sc. Computer Science',
    period: '2016 - 2020',
    description:
      'Foco em algoritmos, estruturas de dados e sistemas distribuídos.',
  },
  {
    institution: 'Bootcamp Web Dev',
    degree: 'Full Stack Web Development',
    period: '2021',
    description: 'Intensivo em React, Node e boas práticas de engenharia.',
  },
]

export const EducationSection = () => {
  return (
    <section className="w-full pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-emerald-400 font-mono">Education</p>
          <h2 className="text-4xl font-medium mt-2">Academic Background</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Formação acadêmica e cursos relevantes que complementam minha
            experiência técnica.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {MOCK_EDUCATION.map((edu, idx) => (
            <EducationCard key={`edu-${idx}`} education={edu} />
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Certificações</h3>
          <ul className="mt-2 text-gray-400 text-sm list-disc list-inside space-y-1">
            <li>Santander Tech+ - Back-End (Ada)</li>
            <li>Git e Versionamento (Ada)</li>
            <li>SQL - Structured Query Language (FGV)</li>
            <li>Databricks Fundamentals (Databricks)</li>
            <li>Foundations: Data, Data, Everywhere (Google)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
