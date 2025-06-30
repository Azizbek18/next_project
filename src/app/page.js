import AboutSection from '@/components/aboutsection'
import FeautureSection from '@/components/feauturesection'
import HelpSection from '@/components/helpsection'
import Hero from '@/components/hero'
import ServiceSection from '@/components/servisesection'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Hero/>
      <HelpSection/>
      <FeautureSection/>
      <AboutSection/>
      <ServiceSection/>
    </div>
  )
}

export default HomePage