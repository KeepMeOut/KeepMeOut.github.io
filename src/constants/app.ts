export const APP_CONFIG = {
  NAME: 'Keep Me Out',
  TAGLINE: 'Take Control of Your Digital Life',
  DESCRIPTION: 'Lock your phone to focus, study, and reconnect with what truly matters. Emergency calling, usage tracking, and privacy-first design.',
  AUTHOR: 'Vikesh Dass',
  VERSION: '1.0.0',
  CONTACT_EMAIL: 'kmo-support@googlegroups.com',
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
  LOGO: '/assets/logos/logo_icon.svg',
  LOGO_BLACK: '/assets/logos/logo-black.svg',
  LOGO_ICON: '/assets/logos/logo_icon.svg',
  LOGO_ICON_PNG: '/assets/logos/logo_icon.png',
  FAVICON: '/favicon.svg',
  SCREENSHOTS: {
    QUICK_LOCK: '/assets/images/keepmeout-quicklock.webp',
    SCHEDULE: '/assets/images/keepmeout-schedule.webp',
  },
  ICONS: {
    FEATURE_01: '/assets/icons/feature-tile-icon-01.svg',
    FEATURE_02: '/assets/icons/feature-tile-icon-02.svg',
    FEATURE_03: '/assets/icons/feature-tile-icon-03.svg',
    FEATURE_04: '/assets/icons/feature-tile-icon-04.svg',
    FEATURE_05: '/assets/icons/feature-tile-icon-05.svg',
    FEATURE_06: '/assets/icons/feature-tile-icon-06.svg',
  },
} as const