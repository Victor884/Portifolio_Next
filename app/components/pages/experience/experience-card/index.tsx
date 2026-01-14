'use client'

import { motion } from 'framer-motion'

type Experience = {
  company: string
  role: string
  period: string
  description?: string
  techs?: string[]
}

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="bg-gray-900/60 p-5 rounded-lg border border-gray-800"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{experience.role}</h3>
          <p className="text-sm text-gray-400">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-500">{experience.period}</div>
      </div>

      {experience.description && (
        (() => {
          const parts = experience.description
            .split(/;|\n/)
            .map((s) => s.trim())
            .filter(Boolean)

          if (parts.length === 1) {
            return (
              <p className="text-sm text-gray-400 mt-3">{parts[0]}</p>
            )
          }

          return (
            <ul className="list-disc list-inside mt-3 text-gray-400 text-sm space-y-1">
              {parts.map((p, i) => (
                <li key={`desc-${i}`}>{p}</li>
              ))}
            </ul>
          )
        })()
      )}

      {experience.techs && (
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.techs.map((t) => (
            <span
              key={t}
              className="text-primary-300 bg-primary-900/50 text-xs py-1 px-2 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}
