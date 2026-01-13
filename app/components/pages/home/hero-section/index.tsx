import { Button } from '@/app/components/button'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from 'react-icons/tb'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

const MOCK_CONTACT_INFO = [
  {
    url: 'https://github.com/Victor884',
    icon: <TbBrandGithub size={18} />,
  },
  {
    url: 'https://br.linkedin.com/in/joaomatosdev',
    icon: <TbBrandLinkedin size={18} />,
  },
  {
    url: 'https://wa.me/qr/GRHABF6NAH5QG1',
    icon: <TbBrandWhatsapp size={18} />,
  },
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 lg:pb-[110px]">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row pt-32">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-emerald-400 font-mono">
            Hello, I&apos;m João Victor
          </p>
          <h2 className="text-4xl font-medium mt-2">I&apos;m a Data Analyst</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            atque est molestias dolore explicabo. Odio, dolor eius obcaecati
            inventore ipsam ut ex saepe nostrum rerum enim odit aliquid. Ut,
            dolore!
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge key={index} name="Next.js" />
            ))}
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
