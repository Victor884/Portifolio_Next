import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from './components/header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <head>
        <title>João Victor - Desenvolvedor Frontend</title>
        <meta name="description" content="Portfólio de João Victor, desenvolvedor frontend especializado em React, Next.js e interfaces modernas." />
        <meta name="keywords" content="desenvolvedor frontend, React, Next.js, portfólio" />
        <meta name="author" content="João Victor" />
        <meta property="og:title" content="João Victor - Desenvolvedor Frontend" />
        <meta property="og:description" content="Portfólio de João Victor, desenvolvedor frontend especializado em React, Next.js e interfaces modernas." />
        <meta property="og:image" content="/images/profile-pic.png" />
        <meta property="og:url" content="https://seu-site.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
