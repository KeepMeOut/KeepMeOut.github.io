import React from 'react'
import { Download } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { MAIN_NAVIGATION } from '@/data/navigation'
import { EXTERNAL_LINKS } from '@/constants/app'
import { UI_TEXT } from '@/config/ui'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/95">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex items-center spacing-nav">
            {MAIN_NAVIGATION.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="link-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              href={EXTERNAL_LINKS.GOOGLE_PLAY}
              variant="primary"
              icon={<Download className="w-4 h-4" />}
              isExternal
            >
              {UI_TEXT.buttons.download}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header