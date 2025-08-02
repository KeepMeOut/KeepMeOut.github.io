'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import FeatureCard from '@/components/ui/FeatureCard'
import { FEATURES } from '@/data/features'
import { UI_TEXT } from '@/config/ui'

const FeaturesSection: React.FC = () => {
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
  
  return (
    <Section id="features" background="white" padding="lg">
      <motion.div className="text-center mb-16" {...fadeInUp}>
        <h2 className="heading-section mb-4">
          {UI_TEXT.features.title}
        </h2>
        <p className="text-subtitle max-w-2xl mx-auto">
          {UI_TEXT.features.subtitle}
        </p>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {FEATURES.map((feature, index) => (
          <FeatureCard 
            key={feature.id} 
            feature={feature} 
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  )
}

export default FeaturesSection