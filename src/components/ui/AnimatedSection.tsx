'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedComponentProps } from '@/types'

interface AnimatedSectionProps extends AnimatedComponentProps {
  variants?: any
  initial?: string
  animate?: string
  whileInView?: string
  viewport?: any
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variants,
  initial = 'initial',
  animate = 'animate',
  whileInView,
  viewport,
  delay = 0,
  duration = 0.6,
}) => {
  const defaultVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay }
    },
  }
  
  const animationProps: any = {
    variants: variants || defaultVariants,
    initial,
    ...(whileInView ? { whileInView } : { animate }),
  }
  
  if (viewport) {
    animationProps.viewport = viewport
  }
  
  return (
    <motion.div className={className} {...animationProps}>
      {children}
    </motion.div>
  )
}

export default AnimatedSection