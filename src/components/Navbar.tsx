'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menus } from '@/dataBase/data';
import DesktopMenu from './DesktopMenu';
import MobMenu from './MobMenu';

const Navbar = () => {
  const [isDropDownisible, setIsDropDownVisible] = useState(false);
  const toggleDropDow = () => {
    setIsDropDownVisible(toggleVisible => !toggleVisible)
  }
  const closeDropDow = () => {
    setIsDropDownVisible(toggleVisible => !toggleVisible)
  }
  return (
    <div className='relative flex justify-center items-center my-10 px-5'>
        <div className='fixed top-10 z-50 bg-black px-5 md:p-2 flex items-center w-full max-w-[1100px] justify-between gap-2  border border-b-gray-100 rounded-full'>
            <div className=''>
                <Link
                  className='cursor-pointer flex justify-center items-center gap-1 flex-row'
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
                    <p className="-ml-5 text-start bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Kalkazu Tech</p>
                </Link>
            </div>
            {/* menus */}
            {/* {Desktop Menu} */}
            <ul className='gap-x-1 lg:flex lg:flex-center hidden'>
              {
                  Menus.map((menu) => (
                  <DesktopMenu menu={menu} key={menu.name}/>
                  ))
              }
            </ul>
            <div className="flex-center gap-x-5">
              <div className="lg:hidden">
                <MobMenu Menus={Menus} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar