import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'Keep Me Out - Digital Wellbeing & Focus App',
  description: 'Lock your phone to focus, study, and reconnect with what truly matters. Emergency calling, usage tracking, and privacy-first design.',
  keywords: 'digital wellbeing, focus app, phone lock, distraction blocking, productivity, Android app',
  authors: [{ name: 'Vikesh Dass' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'Keep Me Out - Take Control of Your Digital Life',
    description: 'Lock your phone to focus, study, and reconnect with what truly matters.',
    type: 'website',
    url: 'https://keepmeout.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keep Me Out - Digital Wellbeing App',
    description: 'Lock your phone to focus, study, and reconnect with what truly matters.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="m-0 p-0 font-sans text-gray-900 dark:text-gray-100 dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}