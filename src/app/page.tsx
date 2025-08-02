import React from 'react'
import { Header, Footer } from '@/components/layout'
import Hero from '@/components/sections/Hero'
import FeaturesSection from '@/components/sections/FeaturesSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}