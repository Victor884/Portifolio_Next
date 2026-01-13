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
    name: 'Next.js',
    category: 'Frontend',
    level: 'Advanced',
    description: 'SSR, SSG, routing and app dir',
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Components, hooks and performance',
  },
  {
    name: 'TypeScript',
    category: 'Tools',
    level: 'Advanced',
    description: 'Type-safe code and definitions',
  },
  {
    name: 'Tailwind',
    category: 'Frontend',
    level: 'Advanced',
    description: 'Utility-first CSS',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Intermediate',
    description: 'APIs and server-side logic',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    level: 'Intermediate',
    description: 'Relational DB',
  },
  {
    name: 'Framer Motion',
    category: 'Tools',
    level: 'Intermediate',
    description: 'Animations and interactions',
  },
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
