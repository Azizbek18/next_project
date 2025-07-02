import AboutSection from '@/components/aboutsection'
import CTASectionPage from '@/components/ctasection'
import FeautureSection from '@/components/feauturesection'
import HelpSection from '@/components/helpsection'
import Hero from '@/components/hero'
import LatestSection from '@/components/latestsection'
import ServiceSection from '@/components/servisesection'
import VideoSectionPage from '@/components/videosection'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Hero/>
      <HelpSection/>
      <FeautureSection/>
      <AboutSection/>
      <ServiceSection/>
      <CTASectionPage/>
      <VideoSectionPage/>
      <LatestSection/>
    </div>
  )
}

export default HomePage