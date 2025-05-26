'use client';
import AnimatedPin from '@/components/AnimatedPin';
import Features from '@/components/Features';
import Footer from '@/components/Footer'
import { HeroParallaxDemo } from '@/components/HeroParallaxDemo';
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing';
import { Spotlight } from '@/components/ui/spotlight';
import React from 'react'

const page = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="-top-1/4 md:left-70 md:-top-1/4" fill="white" />
        <Features />
        <Pricing />
        <Footer />
    </div>
  )
}

export default page