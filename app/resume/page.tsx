import { DownloadResumeButton } from '@/app/components/ui/download-resume'

const CV_TEXT = `JOÃO VICTOR V. MATOS
joaovictor27032004udf@gmail.com
(61) 99996-2703
Brasília – DF
LinkedIn: (link)
GitHub: https://github.com/Victor884

RESUMO PROFISSIONAL
Analista de Dados Jr com experiência prática em análise de dados, geração de insights estratégicos e desenvolvimento de dashboards no setor financeiro. Atuante na automação de processos e pipelines de dados utilizando Python, SQL, Power BI, Spark e Power Automate, promovendo maior eficiência operacional e qualidade nas entregas. Proativo, com forte capacidade analítica, aprendizado rápido e excelente comunicação escrita, habilitado a transformar dados complexos em informações claras e acionáveis para suporte à decisão.

EXPERIÊNCIA PROFISSIONAL
Analista de Dados (Estágio) — Banco do Brasil (Dec 2022 — Presente) — Brasília, DF
- Extração, manipulação e consulta de dados utilizando SQL para análises operacionais e suporte aos fluxos automatizados.
- Criação, otimização e manutenção de mais de 10 dashboards estratégicos, reduzindo o tempo de consulta em 60%.
- Desenvolvimento de automações com Power Automate para disparo automático de mensagens baseadas em alterações de KPIs.
- Desenvolvimento de scripts em Python (Pandas, PyAutoGUI) para automação de rotinas de ETL e relatórios.
- Processamento distribuído de dados com Apache Spark e Databricks.

EDUCAÇÃO
Bacharelado em Ciência da Computação — Centro Universitário do Distrito Federal (UDF) (Ago 2022 — Em andamento)

CERTIFICAÇÕES
- Santander Tech+ - Back-End (Ada)
- Git e Versionamento (Ada)
- SQL - Structured Query Language (FGV)
- Databricks Fundamentals (Databricks)
- Foundations: Data, Data, Everywhere (Google)

HABILIDADES TÉCNICAS
- Análise e Manipulação de Dados: Power BI, SQL, MySQL, Excel, Google Sheets, Python (Pandas, PyAutoGUI), Databricks, Spark, Google Analytics, Big Data, Looker
- Automação e Processos: Power Automate, KPIs, ETL, Pipelines de Dados
- Desenvolvimento: JavaScript, React, Node.js, Next.js, Tailwind, Docker, Git/GitHub, Figma

PROJETOS (seleção)
- Instagram Data Analysis - EDA: análise de métricas de alcance/engajamento com Python (Pandas, Matplotlib, Plotly).
- PrevisaoTempoGUI: aplicativo Python com Tkinter para consulta da previsão do tempo via OpenWeatherMap.
- Análise Estatística de Dados de Suicídio: limpeza, análise e visualização de dados públicos (2014-2018).

IDIOMAS
- Inglês: Técnico
`

export default function ResumePage() {
  return (
    <main className="w-full py-20">
      <div className="container">
        <div className="max-w-3xl">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">JOÃO VICTOR V. MATOS</h1>
              <p className="text-sm text-gray-400 mt-1">
                Analista de Dados Jr — Brasília, DF
              </p>
              <p className="text-sm text-gray-400 mt-1">
                joaovictor27032004udf@gmail.com · (61) 99996-2703
              </p>
              <p className="text-sm text-gray-400 mt-1">
                GitHub:{' '}
                <a
                  href="https://github.com/Victor884"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Victor884
                </a>
              </p>
            </div>

            <div className="mt-2">
              <DownloadResumeButton text={CV_TEXT} />
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-lg font-semibold">Resumo Profissional</h2>
            <p className="text-gray-400 mt-2">
              Analista de Dados Jr com experiência prática em análise de dados,
              geração de insights estratégicos e desenvolvimento de dashboards
              no setor financeiro. Atuante na automação de processos e pipelines
              de dados utilizando Python, SQL, Power BI, Spark e Power Automate,
              promovendo maior eficiência operacional e qualidade nas entregas.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Experiência</h2>
            <div className="mt-3 bg-gray-900/60 p-4 rounded border border-gray-800">
              <h3 className="font-semibold">
                Analista de Dados (Estágio) — Banco do Brasil
              </h3>
              <p className="text-sm text-gray-400">
                Dec 2022 — Presente · Brasília, DF
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-400 text-sm space-y-1">
                <li>
                  Extração, manipulação e consulta de dados utilizando SQL para
                  análises operacionais e suporte aos fluxos automatizados.
                </li>
                <li>
                  Criação, otimização e manutenção de mais de 10 dashboards
                  estratégicos, reduzindo o tempo de consulta em 60%.
                </li>
                <li>
                  Desenvolvimento de automações com Power Automate para disparo
                  automático de mensagens baseadas em alterações de KPIs.
                </li>
                <li>
                  Desenvolvimento de scripts em Python (Pandas, PyAutoGUI) para
                  automação de rotinas de ETL e relatórios.
                </li>
                <li>
                  Processamento distribuído de dados com Apache Spark e
                  Databricks.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Educação</h2>
            <div className="mt-3 bg-gray-900/60 p-4 rounded border border-gray-800">
              <h3 className="font-semibold">
                Bacharelado em Ciência da Computação — Centro Universitário do
                Distrito Federal (UDF)
              </h3>
              <p className="text-sm text-gray-400">Ago 2022 — Em andamento</p>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Certificações</h2>
            <ul className="mt-2 text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Santander Tech+ - Back-End (Ada)</li>
              <li>Git e Versionamento (Ada)</li>
              <li>SQL - Structured Query Language (FGV)</li>
              <li>Databricks Fundamentals (Databricks)</li>
              <li>Foundations: Data, Data, Everywhere (Google)</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Habilidades Técnicas</h2>
            <div className="mt-2 grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-sm text-gray-400">
              <div>
                <strong className="text-gray-200">Análise e Manipulação</strong>
                <p>
                  Power BI, SQL, MySQL, Excel, Google Sheets, Python (Pandas,
                  PyAutoGUI), Databricks, Spark, Google Analytics, Big Data,
                  Looker
                </p>
              </div>
              <div>
                <strong className="text-gray-200">Automação e Processos</strong>
                <p>Power Automate, KPIs, ETL, Pipelines de Dados</p>
              </div>
              <div>
                <strong className="text-gray-200">Desenvolvimento</strong>
                <p>
                  JavaScript, React, Node.js, Next.js, Tailwind, Docker,
                  Git/GitHub, Figma
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Projetos</h2>
            <div className="mt-3 space-y-3 text-gray-400 text-sm">
              <div>
                <strong>Instagram Data Analysis - EDA</strong>
                <p className="mt-1">
                  Análise exploratória de métricas de alcance/engajamento com
                  Python, Pandas, Plotly, Matplotlib.
                </p>
              </div>

              <div>
                <strong>PrevisaoTempoGUI</strong>
                <p className="mt-1">
                  Aplicativo Python com Tkinter para consulta da previsão do
                  tempo via OpenWeatherMap.
                </p>
              </div>

              <div>
                <strong>Análise Estatística de Dados de Suicídio</strong>
                <p className="mt-1">
                  Limpeza, análise e visualização de dados públicos (2014-2018)
                  para identificação de padrões demográficos e temporais.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold">Idiomas</h2>
            <p className="text-gray-400 text-sm mt-2">Inglês (Técnico)</p>
          </section>
        </div>
      </div>
    </main>
  )
}
