import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight, HiOutlineMail } from 'react-icons/hi'

const MOCK_CONTACT_INFO = [
  {
    url: 'mailto:joaovictor27032004udf@gmail.com',
    icon: <HiOutlineMail size={18} />,
  },
  {
    url: 'tel:+5561999962703',
    icon: <TbBrandWhatsapp size={18} />,
  },
  {
    url: 'https://github.com/Victor884',
    icon: <TbBrandGithub size={18} />,
  },
]

export const HeroSection = () => {
  return (
    <section id="inicio" data-theme="inicio" className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 lg:pb-[110px] scroll-mt-32">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row pt-32">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-primary-300 font-mono">
            Olá, sou João Victor
          </p>
          <h2 className="text-4xl font-medium mt-2">Analista de Dados</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Profissional com experiência em análise de dados, geração de insights estratégicos e desenvolvimento de dashboards para o setor financeiro. Atuação em automação de processos e construção de pipelines utilizando Python, SQL, Power BI, Spark e Power Automate, contribuindo para maior eficiência operacional e qualidade nas entregas. Perfil proativo, com forte capacidade analítica, aprendizado rápido e comunicação clara, transformando dados complexos em informações objetivas e acionáveis para apoiar a tomada de decisões.
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
              <TechBadge name="Power BI" />
              <TechBadge name="Python" />
              <TechBadge name="SQL" />
              <TechBadge name="Excel" />
              <TechBadge name="Power Automate" />
              <TechBadge name="ETL" />
              <TechBadge name="Erwin" />
              <TechBadge name="Spark" />
              <TechBadge name="Git/GitHub" />
              <TechBadge name="IBM DB2" />
          </div>
          <div className="flex items-center mt-6 lg:mt-10 sm:gap-5 flex-col sm:flex-row">
            <Link
              href="/#contato"
              className="w-max shadow-button bg-primary-600 text-gray-50 px-4 py-3 flex items-center gap-2 justify-center rounded-lg font-medium hover:bg-primary-500 transition-colors"
            >
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Link>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {MOCK_CONTACT_INFO.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="origin-center">
          <Image
            width={420}
            height={404}
            src="/images/profile-pic.png"
            alt="Hero Image"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
