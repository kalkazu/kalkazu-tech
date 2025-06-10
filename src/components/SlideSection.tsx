"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"


const SlideSection = ({title, image, alt, content, className, href, children}: any) => {
  return (
    <motion.div className='p-5 rounded-lg border max-w-[380px] bg-gradient-to-b bg-neutral-900 bg-opacity-50 backdrop-blur-md'>
        <div>
            <div>
                <Image
                src={image} 
                alt={alt}
                width={500} 
                height={500}
                className={className}
                />
            </div>
              <div>
                <h2 className='text-4xl mt-5 pb-5 md:text-4xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>{title}</h2>
                <p>{content}</p>
              </div>
              <Link href={href} target='_blank' className='flex text-white justify-center items-center border w-[150px] h-[40px] rounded-full mx-auto text-center hover:bg-neutral-300 hover:text-neutral-500'>
                {children}
              </Link>
        </div>
    </motion.div>
  )
}

export default SlideSection