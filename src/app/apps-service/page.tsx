import { BackgroundBeamsWithCollisionDemo } from '@/components/BackgroundBeamsWithCollisionDemo'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black/[0.96] relative'>
      <Navbar />
      <BackgroundBeamsWithCollisionDemo />
    </div>
  )
}

export default page