import { HeroSection } from './components/pages/home/hero-section'
import { ProjectsSection } from './components/pages/projects/projects-section'
import { ExperienceSection } from './components/pages/experience/experience-section'
import { SkillsSection } from './components/pages/skills/skills-section'
import { ContactSection } from './components/pages/contact/contact-section'
import { Footer } from './components/footer'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </>
  )
}
