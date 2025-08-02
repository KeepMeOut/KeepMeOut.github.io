import { Step, Benefit, FAQItem, TroubleshootingItem } from '@/types'

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    id: 'step-1',
    stepNumber: '1',
    title: 'Set Your Focus Duration',
    description: 'Choose how long you want to stay focused - from minutes to hours.',
  },
  {
    id: 'step-2',
    stepNumber: '2',
    title: 'Lock Your Device',
    description: 'Activate the lock and put your phone aside. Focus on what truly matters.',
  },
  {
    id: 'step-3',
    stepNumber: '3',
    title: 'Stay Productive',
    description: 'Enjoy distraction-free time while emergency contacts remain accessible.',
  },
]

export const BENEFITS: Benefit[] = [
  {
    id: 'better-focus',
    title: 'Better Focus',
    description: 'Eliminate phone distractions during important tasks',
  },
  {
    id: 'reduced-screen-time',
    title: 'Reduced Screen Time',
    description: 'Build healthier relationships with technology',
  },
  {
    id: 'improved-productivity',
    title: 'Improved Productivity',
    description: 'Accomplish more in less time',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'emergency-calls',
    question: 'Can I make emergency calls when my phone is locked?',
    answer: 'Yes! You can add important contacts to your emergency contacts list, so you can still easily reach them during lock times.',
  },
  {
    id: 'data-privacy',
    question: 'Does Keep Me Out store my personal data?',
    answer: 'No, Keep Me Out doesn\'t store any personalized data on our servers. Your privacy and security are our top priorities.',
  },
  {
    id: 'android-versions',
    question: 'What Android versions are supported?',
    answer: 'Keep Me Out supports Android 8.0 (Oreo) and later versions, including Android 9.0 (Pie) and newer.',
  },
  {
    id: 'recurring-locks',
    question: 'Can I schedule recurring lock periods?',
    answer: 'Absolutely! You can easily plan your lock times in a seven-day cycle with our Schedule Lock feature.',
  },
  {
    id: 'app-cost',
    question: 'Is the app free to use?',
    answer: 'Keep Me Out is a free application with ad support. There\'s an in-app purchase option to remove ads for an uninterrupted experience.',
  },
]

export const TROUBLESHOOTING_ITEMS: TroubleshootingItem[] = [
  {
    id: 'restart-issue',
    title: 'Lock Breaking After Restart',
    steps: [
      'Enter the app information by long pressing the Keep Me Out app icon and tapping on the "App info" button.',
      'Select "Battery Usage" from the following info screen.',
      'Enable "Allow auto-launch" from the privacy permissions.',
      'Remember you need to also enable the option "Keep Locked After Device Reboot / Restart" from the in-app settings screen.',
    ],
    videoGuides: [
      {
        id: 'realme-restart',
        title: 'Realme Device Guide',
        embedId: 'a7JIHTYZmq4',
      },
    ],
  },
  {
    id: 'uninstall-app',
    title: 'How to Uninstall the App',
    steps: [
      'Open the Keep Me Out Settings screen from the icon in the top right.',
      'Disable the option "Device Administrator".',
      'Uninstall the app from your phone\'s home screen.',
    ],
    videoGuides: [
      {
        id: 'samsung-uninstall',
        title: 'Samsung Device Guide',
        embedId: 'V41SmJuoedc',
      },
    ],
  },
]