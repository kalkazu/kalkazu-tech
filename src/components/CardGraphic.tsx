'use client';
import {useMotionValue, useTransform, motion} from "framer-motion"
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'


const CardGraphic = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
    const colors = [
        {value: '#b6a179'},
        {value: '#272425'},
        {value: '#6389cb'},
        {value: '#f2c758'},
        {value: '#ffffff'},
    ];
  return (
    <div style={{ perspective: 2000 }}>
        <motion.div 
          style={{ x, y, rotateX, rotateY, z:100 }} 
          drag
          dragElastic={0.18}
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
          whileTap={{cursor: 'grabbing'}}
          className='w-[326px] min-h-[500px] md:w-[426px] md:min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] relative'
          >
             {/* card logo */}
             <div className='mb-6'>
                <Image 
                   src="/images/logo.svg"
                   alt='logo nike'
                   width={100}
                   height={100}
                 />
             </div>
             {/* card title */}
             <h1 className='text-3xl mb-6 font-extrabold'>
                Nike Air Max Pre-Day
             </h1>
             {/* card Subtitle */}
             <p className='max-w-[300px] text-[#000000] mb-6'>
                Taking the classic look of heritage Nike Running into new real, 
                the nike Air Max Pre-Day brings you a fast-paced look that&apos;s ready for today&apos;s world.
             </p>
             {/* btn & price wrapper */}
             <div className='flex gap-x-[20px] mb-12'>
                <Link href="#" className='bg-[#2d2b2c] text-white text-base font-small py-[10px] px-[25px] rounded-lg'>
                    add to bag
                </Link>
                <div className='text-14xl md:text-[24px] font-bold text-[#000000] mt-6'>$490.00</div>
             </div>
             {/* colors */}
             <ul className='flex gap-x-[10px]'>
                {colors.map((color, index) => {
                    return (
                        <li 
                        key={index} 
                        style={{backgroundColor: color.value}} 
                        className='w-8 h-8 rounded-full cursor-pointer'>

                        </li>
                    )
                })}
             </ul>
             {/* card image */}
             <motion.div 
               style={{ x, y, rotateX, rotateY, z: 1000000 }}
               className='absolute top-12 -right-64 w-[620px]'
              >
                <Image 
                    src="/images/nike.png" 
                    alt='nike shoes' 
                    draggable="false" 
                    width={620}
                    height={620}
                />
             </motion.div>
        </motion.div>
    </div>
  )
}

export default CardGraphic