'use client'

import { Button } from '@/app/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

export const ContactSection = () => {
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

        <form className="mt-8 max-w-lg mb-32">
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
            ></textarea>
          </div>
          <Button type="submit" className="w-max shadow-button ">
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </motion.div>
    </section>
  )
}