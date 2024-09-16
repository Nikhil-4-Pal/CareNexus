import React from 'react'
import Hero from './Hero'
import Marquee from './QuickServices/Marquee'
import ReviewSection from './Review/ReviewSection'
import Partener from './Partener/Partener'


function Home() {
  return (
    <>
      <Hero />
      <Marquee  />
      <ReviewSection />
      <Partener />
    </>
  )
}

export default Home