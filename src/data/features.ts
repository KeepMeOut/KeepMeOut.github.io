import { Feature } from '@/types'
import { ASSETS } from '@/constants/app'

export const FEATURES: Feature[] = [
  {
    id: 'quick-lock',
    title: 'Quick Lock',
    description: 'The core function of our application. In just two steps choose a period of time and lock yourself out. Emergency contacts stay available.',
    iconPath: ASSETS.ICONS.FEATURE_01,
  },
  {
    id: 'schedule-lock',
    title: 'Schedule Lock',
    description: 'Easily plan your lock times in a seven day cycle. Manage your digital consumption and keep an overview over your schedules.',
    iconPath: ASSETS.ICONS.FEATURE_02,
  },
  {
    id: 'emergency-calling',
    title: 'Emergency Calling',
    description: 'You can add important contacts to your emergency contacts list, so you can still easily reach them during lock times.',
    iconPath: ASSETS.ICONS.FEATURE_05,
  },
  {
    id: 'app-usage',
    title: 'App Usage',
    description: 'Get an organized overview over which Apps you use for what amount of time. Knowledge is the first step to improvement!',
    iconPath: ASSETS.ICONS.FEATURE_03,
  },
  {
    id: 'allow-apps',
    title: 'Allow Apps',
    description: 'Choose certain Apps that you really need to be excluded from locking. This feature has been requested by lots of users.',
    iconPath: ASSETS.ICONS.FEATURE_04,
    isComingSoon: true,
  },
  {
    id: 'easy-settings',
    title: 'Easy Settings',
    description: 'Find all important settings concerning your locks, connected device settings, as well as language settings in one place.',
    iconPath: ASSETS.ICONS.FEATURE_06,
  },
]