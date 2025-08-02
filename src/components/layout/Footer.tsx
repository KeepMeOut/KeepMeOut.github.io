import React from 'react'
import { Mail, ExternalLink } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import Section from '@/components/ui/Section'
import BackToTopButton from '@/components/ui/BackToTopButton'
import { FOOTER_NAVIGATION } from '@/data/navigation'
import { APP_CONFIG } from '@/constants/app'
import { UI_TEXT } from '@/config/ui'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <>
      <BackToTopButton />
      <Section background="gray" padding="lg" className="footer-dark">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="mb-4">
            <Logo variant="default" showText size="md" className="text-white" />
          </div>
          <p className="text-gray-400">
            {UI_TEXT.footer.tagline}
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">{UI_TEXT.sections.app}</h4>
          <ul className="space-y-2 text-gray-400">
            {FOOTER_NAVIGATION.app.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className="hover:text-white transition-colors flex items-center space-x-1"
                  {...(item.isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  <span>{item.label}</span>
                  {item.isExternal && <ExternalLink className="w-3 h-3" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">{UI_TEXT.sections.legal}</h4>
          <ul className="space-y-2 text-gray-400">
            {FOOTER_NAVIGATION.legal.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">{UI_TEXT.sections.support}</h4>
          <ul className="space-y-2 text-gray-400">
            {FOOTER_NAVIGATION.support.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.href}
                  className="hover:text-white transition-colors flex items-center space-x-2"
                  {...(item.isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  })}
                >
                  {item.id === 'email' && <Mail className="w-4 h-4" />}
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; {currentYear} {APP_CONFIG.NAME} by {APP_CONFIG.AUTHOR}. All rights reserved.</p>
      </div>
      </Section>
    </>
  )
}

export default Footer