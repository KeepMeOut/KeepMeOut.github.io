import React from 'react'
import { Download } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { MAIN_NAVIGATION } from '@/data/navigation'
import { EXTERNAL_LINKS } from '@/constants/app'

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          <nav className="hidden md:flex items-center space-x-8">
            {MAIN_NAVIGATION.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-600 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <Button
            href={EXTERNAL_LINKS.GOOGLE_PLAY}
            variant="primary"
            icon={<Download className="w-4 h-4" />}
            isExternal
          >
            Download
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header