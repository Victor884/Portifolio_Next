'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'
import { useEffect, useState } from 'react'
import { useScrollSpy } from '@/app/hooks/useScrollSpy'

const NAV_ITEMS = [
  { label: 'Início', href: '/#inicio', id: 'inicio' },
  { label: 'Projetos', href: '/#projetos', id: 'projetos' },
  { label: 'Habilidades', href: '/#habilidades', id: 'habilidades' },
  { label: 'Currículo', href: '/#curriculo', id: 'curriculo' },
  { label: 'Contato', href: '/#contato', id: 'contato' },
]

const ACCENTS = {
  inicio: '#7c3aed',
  projetos: '#0ea5e9',
  habilidades: '#22c55e',
  curriculo: '#f59e0b',
  contato: '#ef4444',
}

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const activeSection = useScrollSpy(NAV_ITEMS.map(item => item.id))

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
      setScrolled(scrollTop > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (activeSection && ACCENTS[activeSection as keyof typeof ACCENTS]) {
      document.documentElement.style.setProperty('--accent', ACCENTS[activeSection as keyof typeof ACCENTS])
    }
  }, [activeSection])

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-0.5 bg-[var(--accent)] z-50 transition-all duration-300" style={{ width: `${progress}%` }} />
      <header className={`sticky top-0 z-50 h-24 w-full flex items-center justify-center transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              width={58}
              height={49}
              src="/images/logo.svg"
              alt="Logo GB Dev"
            />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-10">
            {NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} isActive={activeSection === item.id} />
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
