
'use client'

import { useState } from 'react'
import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = new FormData(e.currentTarget)

    // Honeypot anti-spam
    if (form.get('website')) {
      setStatus('error')
      setErrorMsg('Falha no envio.')
      return
    }

    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const t = await res.text()
        throw new Error(t || 'Falha ao enviar')
      }

      setStatus('success')
      e.currentTarget.reset()
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err?.message ?? 'Erro ao enviar sua mensagem.')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contato" data-theme="contato" className="w-full pt-16 pb-16 scroll-mt-32">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl">
          <p className="text-primary-300 font-mono">Contato</p>
          <h2 className="text-4xl font-medium mt-2">Vamos conversar?</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Estou disponível para oportunidades de trabalho ou projetos interessantes. Envie uma mensagem!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mb-32">
          {/* Honeypot */}
          <input name="website" type="text" className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <Button type="submit" className="w-max shadow-button" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            <HiArrowNarrowRight size={18} />
          </Button>

          {status === 'success' && (
            <p className="mt-3 text-green-400 text-sm">✅ Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-red-400 text-sm">
              Não foi possível enviar. {errorMsg && `Detalhes: ${errorMsg}`}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
