'use client'

import { useState, useMemo } from 'react'
import { SkillBadge } from '../skill-badge'
import { motion } from 'framer-motion'

type LocalSkill = {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools' | 'Dados'
  level?: string
  description?: string
}

const SKILLS: LocalSkill[] = [
  // ===== Dados =====
  {
    name: 'Power BI',
    category: 'Dados',
    level: 'Advanced',
    description: 'Dashboards e relatórios',
  },
  {
    name: 'SQL',
    category: 'Dados',
    level: 'Advanced',
    description: 'Consultas e otimização',
  },
  { name: 'MySQL', category: 'Dados', level: 'Intermediario' },
  {
    name: 'Python (Pandas)',
    category: 'Dados',
    level: 'Advanced',
    description: 'ETL e automações',
  },
  { name: 'Databricks', category: 'Dados', level: 'Intermediario' },
  { name: 'Apache Spark', category: 'Dados', level: 'Intermediario' },
  { name: 'Google Analytics', category: 'Dados', level: 'Intermediario' },
  { name: 'Looker', category: 'Dados', level: 'Intermediario' },
  { name: 'Excel', category: 'Dados', level: 'Advanced' },
  { name: 'Google Sheets', category: 'Dados', level: 'Intermediario' },

  // ===== Tools =====
  { name: 'Power Automate', category: 'Tools', level: 'Intermediario' },
  { name: 'Excel', category: 'Tools', level: 'Advanced' },
  { name: 'Google Sheets', category: 'Tools', level: 'Intermediario' },

  // ===== Frontend =====
  { name: 'Next.js', category: 'Frontend', level: 'Intermediario' },
  { name: 'React', category: 'Frontend', level: 'Intermediario' },
  { name: 'TypeScript', category: 'Frontend', level: 'Intermediario' },
  { name: 'Tailwind', category: 'Frontend', level: 'Intermediario' },

  // ===== Backend =====
  {
    name: 'JavaScript (Node.js)',
    category: 'Backend',
    level: 'Intermediario',
  },
  { name: 'Python', category: 'Backend', level: 'Intermediario' },
  { name: 'Docker', category: 'Backend', level: 'Intermediario' },
  { name: 'Git/GitHub', category: 'Backend', level: 'Intermediario' },
  
];


const CATEGORIES = ['All', 'Frontend', 'Backend', 'Tools', 'Dados'] as const
export const SkillsSection = () => {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All')
  const [query, setQuery] = useState('')

  const filtered = SKILLS.filter(
    (s) =>
      (category === 'All' || s.category === category) &&
      s.name.toLowerCase().includes(query.toLowerCase()),
  )

  // Deduplicate skills by name (case-insensitive) so duplicates across categories don't repeat
  const uniqueSkills = useMemo(() => {
    const map = new Map<string, LocalSkill>()
    for (const s of filtered) {
      const key = s.name.toLowerCase()
      if (!map.has(key)) map.set(key, s)
    }
    return Array.from(map.values())
  }, [filtered])

  return (
    <section id="habilidades" data-theme="habilidades" className="w-full pt-24 scroll-mt-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-primary-300 font-mono">Habilidades</p>
          <h2 className="text-4xl font-medium mt-2">Tecnologias & Ferramentas</h2>
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
                  ? 'bg-primary-700 text-gray-50'
                  : 'bg-gray-800 text-gray-400'
              }`}
            >
              {c}
            </button>
          ))}

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome..."
            aria-label="Buscar skills por nome"
            className="ml-auto w-full max-w-xs px-3 py-1 rounded bg-gray-800 text-sm text-gray-200 placeholder-gray-500"
          />
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
          {uniqueSkills.map((s) => (
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
