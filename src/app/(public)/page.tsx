import Banner from '@/components/Banner'
import Choose from '@/components/Choose'
import CTA from '@/components/CTA'
import Testimonials from '@/components/Testimonials'
import Work from '@/components/ui/Work'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <Work />
      <Choose />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home
