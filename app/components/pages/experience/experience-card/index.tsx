type Experience = {
  company: string
  role: string
  period: string
  description?: string
  techs?: string[]
}

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <article className="bg-gray-900/60 p-5 rounded-lg border border-gray-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{experience.role}</h3>
          <p className="text-sm text-gray-400">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-500">{experience.period}</div>
      </div>

      {experience.description && (
        <p className="text-sm text-gray-400 mt-3">{experience.description}</p>
      )}

      {experience.techs && (
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.techs.map((t) => (
            <span
              key={t}
              className="text-emerald-400 bg-emerald-900/50 text-xs py-1 px-2 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}
