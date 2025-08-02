import React from 'react'
import Link from 'next/link'
import { ButtonProps } from '@/types'
import { THEME } from '@/config/theme'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  isExternal = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantStyles = {
    primary: `bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`,
    secondary: `bg-white hover:bg-gray-50 text-primary-500 border-2 border-primary-500 focus:ring-primary-500 hover:scale-105 active:scale-95`,
    outline: `border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 focus:ring-gray-500`,
    ghost: `text-gray-600 hover:text-primary-500 hover:bg-gray-100 focus:ring-gray-500`,
  }
  
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`
  
  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  )
  
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {content}
        </a>
      )
    }
    
    return (
      <Link href={href} className={combinedClassName} {...props}>
        {content}
      </Link>
    )
  }
  
  return (
    <button
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button