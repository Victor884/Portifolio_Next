type Education = {
  institution: string
  degree: string
  period: string
  description?: string
}

export const EducationCard = ({ education }: { education: Education }) => {
  return (
    <article className="bg-gray-900/60 p-5 rounded-lg border border-gray-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-sm text-gray-400">{education.institution}</p>
        </div>
        <div className="text-sm text-gray-500">{education.period}</div>
      </div>

      {education.description && (
        <p className="text-sm text-gray-400 mt-3">{education.description}</p>
      )}
    </article>
  )
}
