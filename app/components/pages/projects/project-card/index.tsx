type Project = {
  title: string
  description: string
  techs: string[]
  repoUrl?: string
  demoUrl?: string
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="bg-gray-900/60 p-5 rounded-lg border border-gray-800 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-400 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.techs.map((t) => (
          <span
            key={t}
            className="text-emerald-400 bg-emerald-900/50 text-xs py-1 px-2 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-100 underline"
          >
            Live
          </a>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 hover:text-gray-100"
          >
            Repo
          </a>
        )}
      </div>
    </article>
  )
}
