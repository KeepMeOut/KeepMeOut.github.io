'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { FAQ_ITEMS, TROUBLESHOOTING_ITEMS } from '@/data/content'
import { UI_TEXT } from '@/config/ui'
import { APP_CONFIG, ASSETS } from '@/constants/app'
import { buildYouTubeEmbedUrl } from '@/utils/youtube'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const AccordionItem = ({ title, children, isOpen, onClick }: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClick: () => void
}) => (
  <motion.div 
    className="border border-gray-200 rounded-lg mb-4"
    variants={fadeInUp}
  >
    <button
      onClick={onClick}
      className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
    >
      <span className="font-semibold text-gray-900">{title}</span>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="px-6 py-4 bg-white rounded-b-lg"
      >
        {children}
      </motion.div>
    )}
  </motion.div>
)

export default function HelpPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="header-blur">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={ASSETS.LOGO}
                alt={UI_TEXT.alt.logo}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">{APP_CONFIG.NAME}</span>
            </Link>
            
            <Link href="/" className="flex items-center space-x-2 link-primary">
              <ArrowLeft className="w-4 h-4" />
              <span>{UI_TEXT.buttons.backToHome}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Help Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card-white"
            {...fadeInUp}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{UI_TEXT.pages.help.title}</h1>
            
            {/* Fix A Problem Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{UI_TEXT.pages.help.sections.troubleshooting}</h2>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {TROUBLESHOOTING_ITEMS.map((item) => (
                  <AccordionItem
                    key={item.id}
                    title={item.title}
                    isOpen={openAccordion === item.id}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <div className="space-y-4">
                      {item.videoGuides && item.videoGuides.length > 0 && (
                        <>
                          <h3 className="text-lg font-semibold">Video Guide</h3>
                          {item.videoGuides.map((video) => (
                            <div key={video.id} className="bg-gray-100 rounded-lg p-4">
                              <p className="text-sm text-gray-600 mb-2">{video.title}:</p>
                              <iframe
                                width="100%"
                                height="315"
                                src={buildYouTubeEmbedUrl(video.embedId)}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-lg"
                              />
                            </div>
                          ))}
                          <p>We recommend following our device specific video guide above.</p>
                        </>
                      )}
                      <ol className="list-decimal list-inside space-y-2">
                        {item.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </AccordionItem>
                ))}
              </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{UI_TEXT.pages.help.sections.faq}</h2>
              
              <div className="space-y-8">
                {FAQ_ITEMS.map((faq) => (
                  <div key={faq.id}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-dark section-padding">
        <div className="container-max text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={ASSETS.LOGO}
              alt={UI_TEXT.alt.logo}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">{APP_CONFIG.NAME}</span>
          </div>
          <p className="text-gray-400 mb-4">
            {UI_TEXT.footer.tagline}
          </p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {APP_CONFIG.NAME} by {APP_CONFIG.AUTHOR}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}