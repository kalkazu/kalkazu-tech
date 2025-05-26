import React from 'react'
import { FlipWordsDemo } from './FlipWordsDemo'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        {/* Desktop View */}
        <div className='flex-col hidden md:flex c-space'>
           <div className='flex flex-col items-start'>
               <div>
                <FlipWordsDemo />
               </div>
           </div>
        </div>
        {/* Mobile View */}
        <div className='flex flex-col space-y-6 md:hidden'>
         <div><FlipWordsDemo /></div>
        </div>
    </div>
  )
}

export default HeroText