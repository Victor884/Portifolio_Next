'use client'

import { useState } from 'react'
import { SkillBadge } from '../skill-badge'
import { motion } from 'framer-motion'

type LocalSkill = {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools'
  level?: string
  description?: string
}

const SKILLS: LocalSkill[] = [
  {
    name: 'Power BI',
    category: 'Tools',
    level: 'Advanced',
    description: 'Dashboards e relatórios',
  },
  {
    name: 'SQL',
    category: 'Tools',
    level: 'Advanced',
    description: 'Consultas e otimização',
  },
  { name: 'MySQL', category: 'Tools', level: 'Intermediate' },
  { name: 'Excel', category: 'Tools', level: 'Advanced' },
  { name: 'Google Sheets', category: 'Tools', level: 'Intermediate' },
  {
    name: 'Python (Pandas)',
    category: 'Tools',
    level: 'Advanced',
    description: 'ETL e automações',
  },
  { name: 'Databricks', category: 'Tools', level: 'Intermediate' },
  { name: 'Apache Spark', category: 'Tools', level: 'Intermediate' },
  { name: 'Power Automate', category: 'Tools', level: 'Intermediate' },
  { name: 'Google Analytics', category: 'Tools', level: 'Intermediate' },
  { name: 'Looker', category: 'Tools', level: 'Intermediate' },
  { name: 'Next.js', category: 'Frontend', level: 'Advanced' },
  { name: 'React', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Tools', level: 'Advanced' },
  { name: 'Tailwind', category: 'Frontend', level: 'Advanced' },
]

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools'] as const

export const SkillsSection = () => {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All')

  const filtered = SKILLS.filter(
    (s) => category === 'All' || s.category === category,
  )

  return (
    <section className="w-full pt-16">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-emerald-400 font-mono">Skills</p>
          <h2 className="text-4xl font-medium mt-2">What I use</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Habilidades separadas por categorias — clique em uma badge para ver
            mais detalhes.
          </p>
        </div>

        <div className="mt-4 flex gap-2 items-center">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-1 rounded ${
                category === c
                  ? 'bg-emerald-700 text-gray-50'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {filtered.map((s) => (
            <motion.div
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 6 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <SkillBadge skill={s} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
