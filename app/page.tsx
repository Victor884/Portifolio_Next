import { HeroSection } from './components/pages/home/hero-section'
import { ProjectsSection } from './components/pages/projects/projects-section'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  )
}
