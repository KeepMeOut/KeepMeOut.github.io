import React from 'react'
import { SectionProps } from '@/types'

const Section: React.FC<SectionProps> = ({
  children,
  id,
  background = 'white',
  padding = 'lg',
  className = '',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-500',
    gradient: 'bg-gradient-to-br from-gray-50 to-blue-50',
  }
  
  const paddingStyles = {
    none: '',
    sm: 'py-8 px-4 sm:px-6 lg:px-8',
    md: 'py-12 px-4 sm:px-6 lg:px-8',
    lg: 'py-16 px-4 sm:px-6 lg:px-8',
    xl: 'py-24 px-4 sm:px-6 lg:px-8',
  }
  
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}

export default Section