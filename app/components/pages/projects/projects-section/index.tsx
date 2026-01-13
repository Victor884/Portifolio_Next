import { ProjectCard } from '../project-card'

const MOCK_PROJECTS = [
  {
    title: 'Instagram Data Analysis - EDA',
    description:
      'Projeto de Análise Exploratória de Dados focado em métricas de alcance e engajamento no Instagram.',
    longDescription:
      'Análise detalhada com distribuição de impressões, correlações entre interações, e análise de hashtags; principais insights incluíram correlação de 0.85 entre visitas ao perfil e ganho de seguidores.',
    techs: [
      'Python',
      'Pandas',
      'NumPy',
      'Plotly',
      'Matplotlib',
      'Seaborn',
      'WordCloud',
    ],
    repoUrl: 'https://github.com/Victor884',
  },
  {
    title: 'PrevisaoTempoGUI',
    description:
      'Aplicativo Python com interface Tkinter para consulta da previsão do tempo via API OpenWeatherMap.',
    techs: ['Python', 'Tkinter', 'OpenWeatherMap API'],
    repoUrl: 'https://github.com/Victor884',
  },
  {
    title: 'Análise Estatística de Dados de Suicídio',
    description:
      'Projeto de análise estatística de dados públicos (2014-2018) envolvendo limpeza, visualização e testes estatísticos para identificar padrões demográficos e temporais.',
    techs: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'SciPy',
      'Statsmodels',
    ],
    repoUrl: 'https://github.com/Victor884',
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
