'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react'
import { UI_TEXT } from '@/config/ui'
import { APP_CONFIG, ASSETS, EXTERNAL_LINKS } from '@/constants/app'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="header-blur">
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src={ASSETS.LOGO}
                alt={UI_TEXT.alt.logo}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">{APP_CONFIG.NAME}</span>
            </Link>
            
            <Link href="/" className="flex items-center space-x-2 link-primary">
              <ArrowLeft className="w-4 h-4" />
              <span>{UI_TEXT.buttons.backToHome}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="card-white"
            {...fadeInUp}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{UI_TEXT.pages.privacy.title}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">
                <strong>{APP_CONFIG.NAME}</strong> as a free application which is ad-supported with an in-app purchases to remove ads from app. This Service is provided by <strong>{APP_CONFIG.AUTHOR}</strong> at almost no cost and is intended for use as is. If you choose to use these Service, then you agree to the policies defined here. I will not use or share your information with anyone except as described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Collection and Usage</h2>
              <p className="mb-8">
                For a better experience while using these Service, {APP_CONFIG.NAME} may require you to provide <strong>Read Contacts</strong> permission which will only be <strong>used to read user's contacts so as to allow user to make an emergency call</strong> while the {APP_CONFIG.NAME} Service for device lock is running. {APP_CONFIG.NAME} doesn't store these contacts anywhere permanently neither does it upload this information anywhere. Its strictly fetched while the application runs and is cleared as soon as the user exits the application. Please note this app does use third party services that may collect information used to identify you.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third party Service Providers used in this application</h2>
              <ul className="mb-8">
                <li>To assist in analyzing how the Services are being used and which areas need improvement: Google Analytics and Messaging.</li>
                <li>To serve advertisement: Google ads</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Privacy Policy</h2>
              <p className="mb-8">
                I may update these Privacy Policies from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new or updated Privacy Policies on this page. These changes are effective immediately, after they are posted on this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="mb-8">
                If you have any questions or comments about this Privacy Policy, please contact me at{' '}
                <a 
                  href={EXTERNAL_LINKS.CONTACT_EMAIL} 
                  className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>{APP_CONFIG.CONTACT_EMAIL}</span>
                </a>{' '}
                or click 'Contact for support' within app options menu at the{' '}
                <a 
                  href={EXTERNAL_LINKS.GOOGLE_PLAY} 
                  className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{APP_CONFIG.NAME} Google Playstore page</span>
                  <ExternalLink className="w-4 h-4" />
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-dark section-padding">
        <div className="container-max text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src={ASSETS.LOGO}
              alt={UI_TEXT.alt.logo}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">{APP_CONFIG.NAME}</span>
          </div>
          <p className="text-gray-400 mb-4">
            {UI_TEXT.footer.tagline}
          </p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} {APP_CONFIG.NAME} by {APP_CONFIG.AUTHOR}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}