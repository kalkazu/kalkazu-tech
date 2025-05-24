"use client";
import { AnimatedTestimonialsDemo } from '@/components/AnimatedTestimonialsDemo';
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing';
import { ThreeDCardDemo } from '@/components/ThreeDCardDemo';

import { WobbleCardDemo } from '@/components/WobbleCardDemo'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto'>
        <Navbar />
        <HeroSection />
        <WobbleCardDemo />
        <AnimatedTestimonialsDemo />
        <div className='flex flex-col'>
          <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              this is <br /> my portfolio !
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <ThreeDCardDemo 
              title={"Ecommerce"} 
              content={"This beautiful ecommerce can be yours if you want let your store beautiful"} 
              image={"/images/threejs.png"}
            />
            <ThreeDCardDemo 
              title={"Ecommerce"} 
              content={"This beautiful ecommerce can be yours if you want let your store beautiful"} 
              image={"/images/threejs.png"}
            />
            <ThreeDCardDemo 
              title={"Ecommerce"} 
              content={"This beautiful ecommerce can be yours if you want let your store beautiful"} 
              image={"/images/threejs.png"}
            />
            <ThreeDCardDemo 
              title={"Ecommerce"} 
              content={"This beautiful ecommerce can be yours if you want let your store beautiful"} 
              image={"/images/threejs.png"}
            />
          </div>
        </div>
        <Pricing />
        <Footer />
    </div>
  )
}

export default page