'use client'

import { ExperienceCard } from '../experience-card'
import { motion } from 'framer-motion'

const MOCK_EXPERIENCES = [
  {
    company: 'Banco do Brasil',
    role: 'Analista de Dados (Estágio)',
    period: 'Ago 2024 — Presente',
    description:
      'Criação, otimização e manutenção de mais de 10 dashboards estratégicos, incluindo dashboard para quantificação de cota de aprendizes conforme a Lei 10.097/2000, reduzindo o tempo de consulta em 60%; Desenvolvimento de dashboard para monitoramento de usuários em eventos presenciais e online, bem como verificação de palestrantes em seus respectivos eventos; Criação de automações com Power Automate para disparo automático de mensagens baseadas em alterações de KPIs em dashboards, agilizando a comunicação e resposta a demandas; Análise de dados e geração de insights estratégicos para suporte à tomada de decisão da diretoria. Desenvolvimento de scripts em Python (Pandas, PyAutoGUI) para automação de rotinas de ETL e relatórios, aumentando a eficiência operacional; Processamento distribuído de dados utilizando Apache Spark e Databricks para tarefas complexas de transformação; Extração, manipulação e consulta de dados utilizando SQL para análises operacionais e suporte aos fluxos automatizados; Atuação em equipe utilizando metodologias ágeis Scrum e Kanban para organização e entrega contínua de projetos',
    techs: [
      'SQL',
      'Power BI',
      'Python',
      'Pandas',
      'Spark',
      'Databricks',
      'Power Automate',
    ],
  },
]

export const ExperienceSection = () => {
  return (
    <section id="curriculo" data-theme="curriculo" className="w-full pt-24 scroll-mt-32">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <p className="text-primary-300 font-mono">Currículo</p>
          <h2 className="text-4xl font-medium mt-2">Experiência, formação e certificados</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Resumo das experiências profissionais relevantes, focando em
            tecnologias e resultados.
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-6"
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
          {MOCK_EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`exp-${idx}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
