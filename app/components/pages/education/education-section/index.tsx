import { EducationCard } from '../education-card'

const MOCK_EDUCATION = [
  {
    institution: 'Centro Universitário do Distrito Federal',
    degree: 'Ciência da Computação - Bacharelado',
    period: '2022 - Em Andamento',
    description:
      'Foco em Desenvolvimento Backend, Ciência de Dados e Engenharia de Software.',
  }
]

export const EducationSection = () => {
  return (
    <section className="w-full pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-primary-300 font-mono">Escolaridade</p>
          <h2 className="text-4xl font-medium mt-2">Formação Acadêmica</h2>
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
