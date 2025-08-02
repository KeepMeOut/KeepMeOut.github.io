import React from 'react'
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import FeaturesSection from '@/components/sections/FeaturesSection'
import Footer from '@/components/sections/Footer'

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