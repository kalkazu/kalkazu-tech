"use client";
import { CldImage } from 'next-cloudinary'
import Image from 'next/image'
import React from 'react'

const Skills = ({image, alt, className, children}: any) => {
  return (
    <div className='border mt-3 w-[160px] h-[50px] rounded-full flex justify-center items-center'>
        <div className='flex flex-row justify-center items-center gap-2'>
            <div>
                <CldImage
                 src={image} 
                 alt={alt} 
                 width={100} 
                 height={100} 
                 className={className} />
            </div>
            <div>
                <p className='text-white'>{children}</p>
            </div>
        </div>
    </div>
  )
}

export default Skills