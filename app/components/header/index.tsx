'use client'

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
          <Link href="/" aria-label="Ir para o início">
            <div className="flex items-center gap-2">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#header-logo-gradient)" />
                <path d="M12 12L20 20L12 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 26H30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="header-logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7c3aed"/>
                    <stop offset="1" stopColor="#0ea5e9"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Dev
              </span>
            </div>
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
