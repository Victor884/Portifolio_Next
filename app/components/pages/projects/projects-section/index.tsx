'use client'

import { ProjectCard } from '../project-card'
import { motion } from 'framer-motion'

const MOCK_PROJECTS = [
  {
    title: 'Instagram Data Analysis - EDA',
    description:
      'Projeto de Análise Exploratória de Dados focado em métricas de alcance e engajamento no Instagram.',
    longDescription:
      'Este projeto consiste numa Análise Exploratória de Dados (EDA) detalhada sobre métricas de alcance e engajamento do Instagram. O objetivo principal é identificar padrões estatísticos que explicam o crescimento de um perfil e a eficiência de diferentes fontes de tráfego.',
    techs: [
      'Python',
      'Pandas',
      'NumPy',
      'Plotly',
      'Matplotlib',
      'Seaborn',
      'WordCloud',
    ],
    repoUrl: 'https://github.com/Victor884/Instagram-Post-Performance-Analytics',
  },
  {
    title: 'PrevisaoTempoGUI',
    description:
      'Aplicativo web interativo para consulta e visualização de dados meteorológicos em tempo real, utilizando a API OpenWeather. O projeto integra um pipeline ETL robusto em Python para coleta, transformação e armazenamento de dados climáticos, incluindo clima atual e previsões horárias/diárias para múltiplas cidades.',
    techs: [
      'Python', 
      'Streamlit', 
      'OpenWeatherMap API', 
      'ETL', 
      'APIs', 
      'Matplotlib', 
      'Git/GitHub'
    ],
    repoUrl: 'https://github.com/Victor884/PrevisaoTempoGUI',
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
    repoUrl: 'https://github.com/Victor884/Analysis_of_Suicide_Data_in_Brazil_-2014-2018-',
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projetos" data-theme="projetos" className="w-full pt-24 scroll-mt-32">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <p className="text-primary-300 font-mono">Projetos</p>
          <h2 className="text-4xl font-medium mt-2">Projetos em destaque</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Aqui estão alguns projetos que mostram minhas habilidades em
            desenvolvimento web, UI e integração com APIs.
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          viewport={{ once: true }}
        >
          {MOCK_PROJECTS.map((p, idx) => (
            <motion.div
              key={`project-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
