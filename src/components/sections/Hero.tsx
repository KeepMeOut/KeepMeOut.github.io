'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import { APP_CONFIG, ASSETS, ROUTES, EXTERNAL_LINKS } from '@/constants/app'

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
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          {...fadeInUp}
        >
          {APP_CONFIG.TAGLINE.split(' ').slice(0, 4).join(' ')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            {APP_CONFIG.TAGLINE.split(' ').slice(-2).join(' ')}
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          {APP_CONFIG.DESCRIPTION}
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
            Download on Google Play
          </Button>
          
          <Button
            href={ROUTES.FEATURES}
            variant="secondary"
            size="lg"
          >
            Learn More
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
                alt="Keep Me Out Quick Lock Feature"
                className="rounded-2xl shadow-2xl mx-auto w-full max-w-xs"
              />
            </div>
            <div className="relative">
              <img
                src={ASSETS.SCREENSHOTS.SCHEDULE}
                alt="Keep Me Out Schedule Feature"
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