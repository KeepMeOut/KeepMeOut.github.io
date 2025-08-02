'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { APP_CONFIG, ASSETS, ROUTES, EXTERNAL_LINKS } from '@/constants/app'
import { UI_TEXT } from '@/config/ui'

const Hero: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  
  return (
    <Section background="gradient" padding="lg">
      <div className="text-center">
        <motion.h1 
          className="heading-hero mb-6"
          {...fadeInUp}
        >
          {UI_TEXT.hero.tagline.split(' ').slice(0, 4).join(' ')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            {UI_TEXT.hero.tagline.split(' ').slice(-2).join(' ')}
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-subtitle mb-8 max-w-3xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {UI_TEXT.hero.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <Button
            href={EXTERNAL_LINKS.GOOGLE_PLAY}
            variant="primary"
            size="lg"
            icon={<Download className="w-5 h-5" />}
            className="animate-pulse"
            isExternal
          >
            {UI_TEXT.buttons.downloadGooglePlay}
          </Button>
          
          <Button
            href={ROUTES.FEATURES}
            variant="secondary"
            size="lg"
          >
            {UI_TEXT.buttons.learnMore}
          </Button>
        </motion.div>
        
        <motion.div 
          className="relative max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src={ASSETS.SCREENSHOTS.QUICK_LOCK}
                alt={UI_TEXT.alt.quickLock}
                className="rounded-2xl shadow-2xl mx-auto w-full max-w-xs"
              />
            </div>
            <div className="relative">
              <img
                src={ASSETS.SCREENSHOTS.SCHEDULE}
                alt={UI_TEXT.alt.schedule}
                className="rounded-2xl shadow-2xl mx-auto w-full max-w-xs"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Hero