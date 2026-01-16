import { useEffect, useState } from 'react'

export const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100 // Compensar header
      let current = 'inicio'

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollY >= elementTop - 100) { // Margem de 100px
            current = id
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Chamar inicialmente

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeSection
}