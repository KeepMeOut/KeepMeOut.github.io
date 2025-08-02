'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Feature } from '@/types'

interface FeatureCardProps {
  feature: Feature
  index?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index = 0 }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }
  
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 text-center"
      variants={cardVariants}
      transition={{ delay: index * 0.1 }}
    >
      <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
        <img
          src={feature.iconPath}
          alt={`${feature.title} icon`}
          className="w-12 h-12"
        />
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {feature.title}
        {feature.isComingSoon && (
          <span className="ml-2 text-sm font-normal text-accent-600 bg-accent-100 px-2 py-1 rounded-full">
            Coming Soon
          </span>
        )}
      </h3>
      
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  )
}

export default FeatureCard