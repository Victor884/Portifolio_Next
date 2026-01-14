'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Modal } from '@/app/components/ui/modal'

type Skill = {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools' | 'Dados'
  level?: string
  description?: string
}

export const SkillBadge = ({ skill }: { skill: Skill }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="text-primary-300 bg-primary-900/50 text-sm py-1 px-3 rounded-lg"
      >
        {skill.name}
      </motion.button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        {skill.level && (
          <p className="text-sm text-gray-400">Level: {skill.level}</p>
        )}
        {skill.description && (
          <p className="text-sm text-gray-300 mt-2">{skill.description}</p>
        )}
      </Modal>
    </>
  )
}
