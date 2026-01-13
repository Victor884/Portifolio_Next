import { ProjectCard } from '../project-card'

const MOCK_PROJECTS = [
  {
    title: 'Project One',
    description:
      'A short description about project one. Built with Next.js and Tailwind.',
    longDescription:
      'Project One is a portfolio site built with Next.js and Tailwind. Implements responsive design, accessibility and good SEO practices.',
    techs: ['Next.js', 'TypeScript', 'Tailwind'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
    imageUrl: '/images/project-1.png',
  },
  {
    title: 'Project Two',
    description:
      'A short description about project two. API integration and nice UI.',
    longDescription:
      'Project Two focuses on API integration, validation and robust error handling.',
    techs: ['React', 'Axios', 'Zod'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
    imageUrl: '/images/project-2.png',
  },
  {
    title: 'Project Three',
    description:
      'A short description about project three. Focus on performance.',
    longDescription:
      'Project Three is an optimized SPA with attention to bundle size and lighthouse scores.',
    techs: ['Vite', 'Framer Motion'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
    imageUrl: '/images/project-3.png',
  },
  {
    title: 'Project Four',
    description:
      'A short description about project four. Design and accessibility.',
    longDescription:
      'Project Four emphasizes design systems and accessible components.',
    techs: ['Tailwind', 'Accessibility'],
    repoUrl: 'https://github.com/Victor884',
    demoUrl: '#',
    imageUrl: '/images/project-4.png',
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
