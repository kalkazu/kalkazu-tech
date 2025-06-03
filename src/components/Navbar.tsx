'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import DropDownMenu from './DropDownMenu'

const Navbar = () => {
  const [isDropDownisible, setIsDropDownVisible] = useState(false);
  const toggleDropDow = () => {
    setIsDropDownVisible(toggleVisible => !toggleVisible)
  }
  const closeDropDow = () => {
    setIsDropDownVisible(toggleVisible => !toggleVisible)
  }
  return (
    <div className='flex justify-center items-center mt-10'>
        <div className='px-5 md:p-2 flex items-center max-w-[1100px] justify-center gap-20 z-50  border border-b-gray-100 rounded-full'>
            <div className=''>
                <Link
                  className='cursor-pointer flex justify-center items-center gap-2 flex-row'
                  href="/"
                >
                    <Image 
                      priority
                      src="/images/kalkazutechlogo.png"
                      alt='Logo'
                      width={100}
                      height={100}
                      className='w-20 h-20 md:w-24 md:h-24'
                    />
                    <p className="-ml-5 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Kalkazu Tech</p>
                </Link>
            </div>
            <div className={`cursor-pointer hidden md:flex space-x-10
               items-center  text-center bg-clip-text text-transparent 
               bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50
              `}>
                <Link href="/" className='hover:text-gray-50'>Home</Link>
                <Link href="/websites" className='hover:text-gray-50'>Websites</Link>
                <Link href="/appservice" className='hover:text-gray-50'>Apps</Link>
                <Link href="/graphicdesign" className='hover:text-gray-50'>Graphic</Link>
                <Link href="/shopify" className='hover:text-gray-50'>Shopify</Link>
                <Link href="/wordpress" className='hover:text-gray-50'>Wordpress</Link>
            </div>

            <div className='flex md:hidden'>
                {isDropDownisible ? (
                  // display an x icon when the drop is visible
                  <div 
                  onClick={toggleDropDow}
                  className='cursor-pointer w-8 h-8 text-slate-300' 
                  >
                    <X />
                    <DropDownMenu onClose={closeDropDow} />
                  </div>
                ): (
                  <AlignJustify 
                    onClick={toggleDropDow}
                    className='w-8 h-8 text-slate-300 cursor-pointer'
                  />
                )}
            </div>

            <div className='hidden md:flex mr-10'>
             <Link href='/contactus' className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Contact
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar