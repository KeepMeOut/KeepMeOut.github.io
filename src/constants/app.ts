export const APP_CONFIG = {
  NAME: 'Keep Me Out',
  TAGLINE: 'Take Control of Your Digital Life',
  DESCRIPTION: 'Lock your phone to focus, study, and reconnect with what truly matters. Emergency calling, usage tracking, and privacy-first design.',
  AUTHOR: 'Vikesh Dass',
  VERSION: '1.0.0',
  CONTACT_EMAIL: 'keepmeout.help@gmail.com',
  GOOGLE_PLAY_URL: 'https://play.google.com/store/apps/details?id=vikesh.dass.lockmeout',
  WEBSITE_URL: 'https://keepmeout.app',
} as const

export const ROUTES = {
  HOME: '/',
  PRIVACY: '/privacy',
  HELP: '/help',
  FEATURES: '#features',
} as const

export const EXTERNAL_LINKS = {
  GOOGLE_PLAY: APP_CONFIG.GOOGLE_PLAY_URL,
  PRIVACY_POLICY_OLD: '/kmo-privacy-policy.html',
  CHANGELOG: '/kmo-changelog.html',
  UNINSTALL_GUIDE: '/kmo-uninstall.html',
  CONTACT_EMAIL: `mailto:${APP_CONFIG.CONTACT_EMAIL}`,
} as const

export const ASSETS = {
  LOGO: '/logo.svg',
  LOGO_BLACK: '/logo-black.svg',
  LOGO_ICON: '/logo-icon.svg',
  FAVICON: '/favicon.ico',
  SCREENSHOTS: {
    QUICK_LOCK: '/keepmeout-quicklock.webp',
    SCHEDULE: '/keepmeout-schedule.webp',
  },
  ICONS: {
    FEATURE_01: '/feature-tile-icon-01.svg',
    FEATURE_02: '/feature-tile-icon-02.svg',
    FEATURE_03: '/feature-tile-icon-03.svg',
    FEATURE_04: '/feature-tile-icon-04.svg',
    FEATURE_05: '/feature-tile-icon-05.svg',
    FEATURE_06: '/feature-tile-icon-06.svg',
  },
} as const