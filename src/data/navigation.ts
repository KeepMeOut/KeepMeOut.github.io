import { NavigationItem } from '@/types'
import { ROUTES, EXTERNAL_LINKS, APP_CONFIG } from '@/constants/app'

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    id: 'features',
    label: 'Features',
    href: ROUTES.FEATURES,
  },
  {
    id: 'help',
    label: 'Help',
    href: ROUTES.HELP,
  },
  {
    id: 'privacy',
    label: 'Privacy',
    href: ROUTES.PRIVACY,
  },
]

export const FOOTER_NAVIGATION = {
  app: [
    {
      id: 'features',
      label: 'Features',
      href: ROUTES.FEATURES,
    },
    {
      id: 'download',
      label: 'Download',
      href: EXTERNAL_LINKS.GOOGLE_PLAY,
      isExternal: true,
    },
  ],
  legal: [
    {
      id: 'privacy',
      label: 'Privacy Policy',
      href: ROUTES.PRIVACY,
    },
    {
      id: 'app-ads',
      label: 'App-ads.txt',
      href: '/app-ads.txt',
    },
    {
      id: 'changelog',
      label: 'Changelog',
      href: EXTERNAL_LINKS.CHANGELOG,
    },
    {
      id: 'uninstall',
      label: 'Uninstall Guide',
      href: EXTERNAL_LINKS.UNINSTALL_GUIDE,
    },
  ],
  support: [
    {
      id: 'email',
      label: APP_CONFIG.CONTACT_EMAIL,
      href: EXTERNAL_LINKS.CONTACT_EMAIL,
      isExternal: true,
    },
    {
      id: 'help-center',
      label: 'Help Center',
      href: ROUTES.HELP,
    },
  ],
}