export interface Feature {
  id: string
  title: string
  description: string
  iconPath: string
  isComingSoon?: boolean
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface Step {
  id: string
  stepNumber: string
  title: string
  description: string
}

export interface Benefit {
  id: string
  title: string
  description: string
}

export interface SocialLink {
  id: string
  label: string
  url: string
  isExternal?: boolean
}

export interface NavigationItem {
  id: string
  label: string
  href: string
  isExternal?: boolean
}

export interface VideoGuide {
  id: string
  title: string
  embedId: string
  description?: string
}

export interface TroubleshootingItem {
  id: string
  title: string
  steps: string[]
  videoGuides?: VideoGuide[]
}

// Component Props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number
  duration?: number
}

// Layout Props
export interface SectionProps extends BaseComponentProps {
  id?: string
  background?: 'white' | 'gray' | 'primary' | 'gradient'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

// Button Variants
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  isExternal?: boolean
}