import { ProjectCard } from '../project-card'

const MOCK_PROJECTS = [
  {
    title: 'Project One',
    description:
      'A short description about project one. Built with Next.js and Tailwind.',
    techs: ['Next.js', 'TypeScript', 'Tailwind'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
  },
  {
    title: 'Project Two',
    description:
      'A short description about project two. API integration and nice UI.',
    techs: ['React', 'Axios', 'Zod'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'A short description about project three. Focus on performance.',
    techs: ['Vite', 'Framer Motion'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
  },
  {
    title: 'Project Four',
    description:
      'A short description about project four. Design and accessibility.',
    techs: ['Tailwind', 'Accessibility'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
  },
]

export const ProjectsSection = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-emerald-400 font-mono">Projects</p>
          <h2 className="text-4xl font-medium mt-2">Selected Work</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Aqui estão alguns projetos que mostram minhas habilidades em
            desenvolvimento web, UI e integração com APIs.
          </p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_PROJECTS.map((p, idx) => (
            <ProjectCard key={`project-${idx}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
