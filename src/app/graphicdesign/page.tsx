"use client";
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing';


import { WobbleCardDemo } from '@/components/WobbleCardDemo'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
        <Navbar />
        <HeroSection />

        <Footer />
    </div>
  )
}

export default page