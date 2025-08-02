import React from 'react'
import Link from 'next/link'
import { APP_CONFIG, ASSETS, ROUTES } from '@/constants/app'

interface LogoProps {
  variant?: 'default' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
  className?: string
}

const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  size = 'md',
  showText = true,
  className = '',
}) => {
  const logoSrc = {
    default: ASSETS.LOGO,
    icon: ASSETS.LOGO_ICON,
  }
  
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
  }
  
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }
  
  return (
    <Link href={ROUTES.HOME} className={`flex items-center space-x-2 ${className}`}>
      <img
        src={logoSrc[variant]}
        alt={`${APP_CONFIG.NAME} Logo`}
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={`font-bold text-gray-900 ${textSizeClasses[size]}`}>
          {APP_CONFIG.NAME}
        </span>
      )}
    </Link>
  )
}

export default Logo