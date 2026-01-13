import { ExperienceCard } from '../experience-card'

const MOCK_EXPERIENCES = [
  {
    company: 'Banco do Brasil',
    role: 'Analista de Dados (Estágio)',
    period: 'Dec 2022 — Presente',
    description:
      'Extração, manipulação e consulta de dados utilizando SQL; criação, otimização e manutenção de mais de 10 dashboards estratégicos (reduzindo tempo de consulta em 60%); desenvolvimento de automações com Power Automate; scripts em Python (Pandas, PyAutoGUI) para ETL; processamento distribuído com Apache Spark/Databricks; identificação e correção de inconsistências em bases de dados.',
    techs: [
      'SQL',
      'Power BI',
      'Python',
      'Pandas',
      'Spark',
      'Databricks',
      'Power Automate',
    ],
  },
]

export const ExperienceSection = () => {
  return (
    <section className="w-full pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-emerald-400 font-mono">Experience</p>
          <h2 className="text-4xl font-medium mt-2">Where I worked</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Resumo das experiências profissionais relevantes, focando em
            tecnologias e resultados.
          </p>
        </div>

        <div className="mt-8 grid gap-6">
          {MOCK_EXPERIENCES.map((exp, idx) => (
            <ExperienceCard key={`exp-${idx}`} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
