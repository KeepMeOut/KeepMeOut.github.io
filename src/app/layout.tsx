import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Keep Me Out - Digital Wellbeing & Focus App',
  description: 'Lock your phone to focus, study, and reconnect with what truly matters. Emergency calling, usage tracking, and privacy-first design.',
  keywords: 'digital wellbeing, focus app, phone lock, distraction blocking, productivity, Android app',
  authors: [{ name: 'Vikesh Dass' }],
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
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif', color: '#111827' }}>{children}</body>
    </html>
  )
}