'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const AccordionItem = ({ title, children, isOpen, onClick }: {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClick: () => void
}) => (
  <motion.div 
    className="border border-gray-200 rounded-lg mb-4"
    variants={fadeInUp}
  >
    <button
      onClick={onClick}
      className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg"
    >
      <span className="font-semibold text-gray-900">{title}</span>
      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
    </button>
    {isOpen && (
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="px-6 py-4 bg-white rounded-b-lg"
      >
        {children}
      </motion.div>
    )}
  </motion.div>
)

export default function HelpPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

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

      {/* Help Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            {...fadeInUp}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Keep Me Out — Help Center</h1>
            
            {/* Fix A Problem Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Fix A Problem</h2>
              
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <AccordionItem
                  title="Lock Breaking After Restart"
                  isOpen={openAccordion === 'restart'}
                  onClick={() => toggleAccordion('restart')}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Video Guide</h3>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Realme Device Guide:</p>
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/a7JIHTYZmq4"
                        title="Realme Lock Breaking Fix"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                    <p>We recommend following our device specific video guide above.</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Enter the app information by long pressing the Keep Me Out app icon and tapping on the "App info" button.</li>
                      <li>Select "Battery Usage" from the following info screen.</li>
                      <li>Enable "Allow auto-launch" from the privacy permissions.</li>
                      <li>Remember you need to also enable the option "Keep Locked After Device Reboot / Restart" from the in-app settings screen.</li>
                    </ol>
                  </div>
                </AccordionItem>

                <AccordionItem
                  title="How to Uninstall the App"
                  isOpen={openAccordion === 'uninstall'}
                  onClick={() => toggleAccordion('uninstall')}
                >
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Video Guide</h3>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">Samsung Device Guide:</p>
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/V41SmJuoedc"
                        title="Samsung Uninstall Guide"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    </div>
                    <p>We recommend following our device specific video guide above.</p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Open the Keep Me Out Settings screen from the icon in the top right.</li>
                      <li>Disable the option "Device Administrator".</li>
                      <li>Uninstall the app from your phone's home screen.</li>
                    </ol>
                  </div>
                </AccordionItem>
              </motion.div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">FAQ</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">I have encountered a bug / problem with your app, where can I report it?</h3>
                  <p className="text-gray-600">
                    Please write a short description of your problem to{' '}
                    <a 
                      href="mailto:keepmeout.help@gmail.com" 
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                    >
                      <Mail className="w-4 h-4" />
                      <span>keepmeout.help@gmail.com</span>
                    </a>
                    . Please be aware that due to the amount of mail we get, a reply may take some time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Keep Me Out store or read my personal data?</h3>
                  <p className="text-gray-600">
                    At eudaiTec we value your privacy and don't believe in storing or selling personal or sensitive user data, as a principle.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I still receive calls when my phone is in "lock mode"?</h3>
                  <p className="text-gray-600">
                    Yes, since the issue of an emergency could arise outside of your influence, we feel this is important. If you want to block contacts from calling you, we advise you to use your phone's privacy settings instead.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I call people while my phone is in lock mode?</h3>
                  <p className="text-gray-600">
                    You can enable "emergency calling" in the app settings. That way you can add contacts to your emergency contact list, so you can easily reach them during lock times.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I add emergency contacts?</h3>
                  <p className="text-gray-600">
                    Open Settings on your device. Search for "Emergency Contacts". Add contacts from your contact list.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I disable the lock for specific apps?</h3>
                  <p className="text-gray-600">
                    We are currently developing a feature that lets users exempt apps from lock mode. Stay tuned for updates!
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">I have a feature idea / suggestion for your app, where can I share it?</h3>
                  <p className="text-gray-600">
                    We welcome you to contact us at{' '}
                    <a 
                      href="mailto:keepmeout.help@gmail.com" 
                      className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center space-x-1"
                    >
                      <Mail className="w-4 h-4" />
                      <span>keepmeout.help@gmail.com</span>
                    </a>
                    . Please be aware that due to the amount of mail we get, a reply is not guaranteed and may take some time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is the scheduled lock not triggering on my KMO app when the device is not in use?</h3>
                  <p className="text-gray-600">
                    The scheduled lock feature in the KMO app might not be triggering as expected when your device is not in use due to Android's Doze mode and App Standby restrictions. Doze mode is a power-saving feature that restricts certain activities when the device is idle. According to Android's documentation, in Doze mode, the system prevents CPU-intensive tasks, and this includes scheduled lock activities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens during Doze mode that affects the scheduled lock feature?</h3>
                  <p className="text-gray-600">
                    During Doze mode, the device limits access to resources to conserve battery life. As a result, scheduled tasks, such as the lock feature in the KMO app, may not be triggered until the user interacts with the device by moving, unlocking, or glancing at the lock screen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I ensure that the scheduled lock works even when the device is in Doze mode?</h3>
                  <p className="text-gray-600">
                    If you find that the scheduled lock is not activating as expected, try unlocking or looking at the lock screen. This interaction with the device will prompt the system to exit Doze mode, allowing the scheduled lock feature in the KMO app to be activated and function as intended for the remaining scheduled time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Why is a lock screen necessary for the proper functioning of the scheduled lock feature?</h3>
                  <p className="text-gray-600">
                    The lock screen serves as a secure barrier to protect your device and its features. For the scheduled lock feature to work effectively, it relies on the lock screen to display notifications and activate the lock. Without a lock screen, the scheduled lock feature may not operate as intended, and notifications may not be presented on the lock screen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need to have a lock screen set up on my phone for the scheduled lock feature in the KMO app to work properly?</h3>
                  <p className="text-gray-600">
                    Yes, it is recommended to have a pin, pattern, or another form of lock screen security set up on your device for the scheduled lock feature in the KMO app to work seamlessly. Having a lock screen ensures that notifications from the scheduled lock feature are displayed correctly on the lock screen, and it allows the lock to be activated and function as intended.
                  </p>
                </div>
              </div>
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