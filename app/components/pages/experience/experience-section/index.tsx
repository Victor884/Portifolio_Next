import { ExperienceCard } from '../experience-card'

const MOCK_EXPERIENCES = [
  {
    company: 'Acme Corp',
    role: 'Frontend Engineer',
    period: 'Jan 2022 - Present',
    description:
      'Building performant interfaces and component systems using Next.js and Tailwind.',
    techs: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    company: 'Startup XYZ',
    role: 'Full Stack Developer',
    period: 'Jul 2020 - Dec 2021',
    description: 'Worked on APIs, data modelling and responsive UIs.',
    techs: ['Node.js', 'Express', 'PostgreSQL'],
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
