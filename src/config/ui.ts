export const UI_TEXT = {
  buttons: {
    download: 'Download',
    downloadGooglePlay: 'Download on Google Play',
    learnMore: 'Learn More',
    backToHome: 'Back to Home',
  },
  sections: {
    app: 'App',
    legal: 'Legal',
    support: 'Support',
  },
  hero: {
    tagline: 'Take Control of Your Digital Life',
    description: 'Lock your phone to focus, study, and reconnect with what truly matters. Emergency calling, usage tracking, and privacy-first design.',
  },
  features: {
    title: 'Powerful Features for Digital Wellness',
    subtitle: 'Everything you need to build healthier digital habits and stay focused on what matters most.',
  },
  footer: {
    tagline: 'Take control of your digital life with privacy-first design and powerful focus tools.',
  },
  labels: {
    comingSoon: 'Coming Soon',
  },
  alt: {
    logo: 'Keep Me Out Logo',
    quickLock: 'Keep Me Out Quick Lock Feature',
    schedule: 'Keep Me Out Schedule Feature',
  },
  pages: {
    help: {
      title: 'Keep Me Out — Help Center',
      sections: {
        troubleshooting: 'Fix A Problem',
        faq: 'FAQ',
      },
    },
    privacy: {
      title: 'Privacy Policy',
    },
  },
} as const

export type UIText = typeof UI_TEXT