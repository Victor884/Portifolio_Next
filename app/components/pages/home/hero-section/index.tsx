import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'
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
            Analista de Dados Jr com experiência prática em análise de dados, geração de insights estratégicos e desenvolvimento de dashboards no
            setor financeiro. Atuante na automação de processos e pipelines de dados utilizando Python, SQL, Power BI, Spark e Power Automate,
            promovendo maior eficiência operacional e qualidade nas entregas. Proativo, com forte capacidade analítica, aprendizado rápido e excelente
            comunicação escrita, habilitado a transformar dados complexos em informações claras e acionáveis para suporte à decisão.
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
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>
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
