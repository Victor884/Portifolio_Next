'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/app/components/ui/modal'

type Project = {
  title: string
  description: string
  longDescription?: string
  techs: string[]
  repoUrl?: string
  demoUrl?: string
  imageUrl?: string
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.article
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onClick={() => setOpen(true)}
        className="bg-gray-900/60 p-5 rounded-lg border border-gray-800 cursor-pointer h-full flex flex-col justify-between min-h-[200px]"
      >
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-400 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techs.map((t) => (
            <span
              key={t}
              className="text-primary-300 bg-primary-900/50 text-xs py-1 px-2 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-4 text-sm text-gray-400">
          {project.demoUrl && <span className="underline">Live</span>}
          {project.repoUrl && <span className="hover:text-gray-100">Repo</span>}
        </div>
      </motion.article>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.imageUrl && (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full mt-3 rounded"
          />
        )}
        <p className="text-sm text-gray-300 mt-3">
          {project.longDescription ?? project.description}
        </p>

        <div className="flex items-center gap-3 mt-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-100 underline"
            >
              Open demo
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 hover:text-gray-100"
            >
              Open repo
            </a>
          )}
        </div>
      </Modal>
    </>
  )
}
