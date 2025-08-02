'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, ExternalLink } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.svg"
                alt="Keep Me Out Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">Keep Me Out</span>
            </Link>
            
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            {...fadeInUp}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg mb-8">
                <strong>Keep Me Out</strong> as a free application which is ad-supported with an in-app purchases to remove ads from app. This Service is provided by <strong>Vikesh Dass</strong> at almost no cost and is intended for use as is. If you choose to use these Service, then you agree to the policies defined here. I will not use or share your information with anyone except as described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Collection and Usage</h2>
              <p className="mb-8">
                For a better experience while using these Service, Keep Me Out may require you to provide <strong>Read Contacts</strong> permission which will only be <strong>used to read user's contacts so as to allow user to make an emergency call</strong> while the Keep Me Out Service for device lock is running. Keep me out doesn't store these contacts anywhere permanently neither does it upload this information anywhere. Its strictly fetched while the application runs and is cleared as soon as the user exits the application. Please note this app does use third party services that may collect information used to identify you.
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
                  href="mailto:keepmeout.help@gmail.com" 
                  className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>keepmeout.help@gmail.com</span>
                </a>{' '}
                or click 'Contact for support' within app options menu at the{' '}
                <a 
                  href="https://play.google.com/store/apps/details?id=vikesh.dass.lockmeout" 
                  className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Keep Me Out Google Playstore page</span>
                  <ExternalLink className="w-4 h-4" />
                </a>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="/logo.svg"
              alt="Keep Me Out Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">Keep Me Out</span>
          </div>
          <p className="text-gray-400 mb-4">
            Take control of your digital life with privacy-first design and powerful focus tools.
          </p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Keep Me Out by Vikesh Dass. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}