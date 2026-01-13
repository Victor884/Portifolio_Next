import { HeroSection } from './components/pages/home/hero-section'
import { ProjectsSection } from './components/pages/projects/projects-section'
import { ExperienceSection } from './components/pages/experience/experience-section'
import { EducationSection } from './components/pages/education/education-section'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  )
}
