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
  {
    id: 'premium-features',
    question: 'What\'s the difference between free and premium versions?',
    answer: 'While the free version is limited to 2 schedule locks, the premium version is ads-free and enables you to schedule as many locks as you wish, making it effortless to plan your week and boost productivity.',
  },
  {
    id: 'device-administrator',
    question: 'What permissions does the app need?',
    answer: 'You need to enable device administrator permissions for the lock feature to work properly. This allows the app to prevent uninstallation during active lock periods.',
  },
  {
    id: 'lock-duration',
    question: 'How long can I lock my phone for?',
    answer: 'You can set lock durations from minutes to hours, depending on your focus needs. The app is flexible to accommodate both short study sessions and longer work periods.',
  },
  {
    id: 'emergency-contact-setup',
    question: 'How do I set up emergency contacts?',
    answer: 'You can add important contacts to your emergency contacts list in the app settings. These contacts will remain accessible even during lock periods for urgent communication.',
  },
  {
    id: 'multiple-devices',
    question: 'Can I use Keep Me Out on multiple devices?',
    answer: 'Yes, you can install Keep Me Out on multiple Android devices. Each device will have its own independent lock settings and schedules.',
  },
  {
    id: 'lock-bypass',
    question: 'Can I bypass the lock once it\'s activated?',
    answer: 'The lock is designed to be secure and cannot be easily bypassed. This ensures you stay focused during your set lock periods. However, emergency contacts and calls remain accessible.',
  },
  {
    id: 'battery-optimization',
    question: 'Does the app affect battery life?',
    answer: 'Keep Me Out is optimized for minimal battery usage. The app runs efficiently in the background and won\'t significantly impact your device\'s battery performance.',
  },
  {
    id: 'bug-reporting',
    question: 'I have encountered a bug/problem with your app, where can I report it?',
    answer: 'Please write a short description of your problem to kmo-support@googlegroups.com. Please be aware that due to the amount of mail we get, a reply may take some time.',
  },
  {
    id: 'receiving-calls',
    question: 'Can I still receive calls when my phone is in "lock mode"?',
    answer: 'Yes, since the issue of an emergency could arise outside of your influence, we feel this is important. If you want to block contacts from calling you, we advise you to use your phone\'s privacy settings instead.',
  },
  {
    id: 'making-calls',
    question: 'Can I call people while my phone is in lock mode?',
    answer: 'You can enable "emergency calling" in the app settings. That way you can add contacts to your emergency contact list, so you can easily reach them during lock times.',
  },
  {
    id: 'add-emergency-contacts',
    question: 'How can I add emergency contacts?',
    answer: 'Open Settings on your device. Search for "Emergency Contacts". Add contacts from your contact list.',
  },
  {
    id: 'app-exemptions',
    question: 'Can I disable the lock for specific apps?',
    answer: 'We are currently developing a feature that lets users exempt apps from lock mode. Stay tuned for updates!',
  },
  {
    id: 'feature-suggestions',
    question: 'I have a feature idea/suggestion for your app, where can I share it?',
    answer: 'We welcome you to contact us at kmo-support@googlegroups.com. Please be aware that due to the amount of mail we get, a reply is not guaranteed and may take some time.',
  },
  {
    id: 'scheduled-lock-doze',
    question: 'Why is the scheduled lock not triggering on my KMO app when the device is not in use?',
    answer: 'The scheduled lock feature might not trigger when your device is idle due to Android\'s Doze mode and App Standby restrictions. Doze mode is a power-saving feature that restricts certain activities when the device is idle, which includes scheduled lock activities.',
  },
  {
    id: 'doze-mode-effects',
    question: 'What happens during Doze mode that affects the scheduled lock feature?',
    answer: 'During Doze mode, the device limits access to resources to conserve battery life. As a result, scheduled tasks, such as the lock feature in the KMO app, may not be triggered until the user interacts with the device by moving, unlocking, or glancing at the lock screen.',
  },
  {
    id: 'doze-mode-workaround',
    question: 'How can I ensure that the scheduled lock works even when the device is in Doze mode?',
    answer: 'If you find that the scheduled lock is not activating as expected, try unlocking or looking at the lock screen. This interaction with the device will prompt the system to exit Doze mode, allowing the scheduled lock feature to be activated and function as intended.',
  },
  {
    id: 'lock-screen-necessity',
    question: 'Why is a lock screen necessary for the proper functioning of the scheduled lock feature?',
    answer: 'The lock screen serves as a secure barrier to protect your device and its features. For the scheduled lock feature to work effectively, it relies on the lock screen to display notifications and activate the lock. Without a lock screen, the scheduled lock feature may not operate as intended.',
  },
  {
    id: 'lock-screen-setup',
    question: 'Do I need to have a lock screen set up on my phone for the scheduled lock feature to work properly?',
    answer: 'Yes, it is recommended to have a pin, pattern, or another form of lock screen security set up on your device for the scheduled lock feature to work seamlessly. Having a lock screen ensures that notifications are displayed correctly and allows the lock to function as intended.',
  },
  {
    id: 'optimal-lock-screen',
    question: 'What type of lock screen should I set up for optimal performance?',
    answer: 'You can choose any secure lock screen option available on your device, such as a pin, pattern, password, or biometric authentication (fingerprint or facial recognition). The key is to have a form of security that ensures device privacy while allowing the scheduled lock feature to work seamlessly.',
  },
  {
    id: 'app-without-lock-screen',
    question: 'Can I still use the KMO app without setting up a lock screen on my device?',
    answer: 'While the KMO app may still function without a lock screen, it is highly recommended to set up a lock screen for an optimal experience. Having a lock screen enhances device security, ensures notifications are properly displayed, and allows the scheduled lock feature to operate seamlessly.',
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