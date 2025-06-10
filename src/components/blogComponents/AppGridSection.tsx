"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge'
import {motion, MotionProps} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const AppGridSection = () => {
  return (
    <div className='min-hscreen bg-black px-4 py-12 text-zinc-50'>
       <motion.div 
       initial="initial"
       animate="animate"
       transition={{
        staggerChildren: 0.05,
       }}
       className='mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense'>
           <HeaderBlock />
           <HeaderBlock01 />
           <HeaderBlock02 />
           <HeaderBlock03 />
       </motion.div> 
    </div>
  )
}
type Props = {
    className?: string;
} & MotionProps;
const Block = ({className, ...rest}: Props) => {
    return (
        <motion.div 
        variants={{
            initial: {
                scale: 0.5,
                y: 50,
                opacity: 0,
            },
            animate: {
              scale: 1,
              y: 0,
              opacity: 1, 
            }
        }}
        transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        }}
        className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
        {...rest}
        />
    );
};

const HeaderBlock = () => {
    return (
        <Block className='col-span-12 md:row-span-2 md:col-span-6 p-2'>
           <div>
              <Image 
               src={'/images/3dportfolio.png'} 
               alt='3d Portfolio' 
               width={100} 
               height={100} 
               className='mb-4 w-full h-full rounded-lg'
               />
               <div>
                <h2 className='mb-2 text-4xl font-medium leading-tight'>Hello world</h2>
                <p> 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                </p>
               </div>
           </div>
        </Block>
    )
};
const HeaderBlock01 = () => {
    return (
        <Block className='col-span-12 md:row-span-2 md:col-span-6 p-2'>
           <div>
              <Image 
               src={'/images/3dportfolio.png'} 
               alt='3d Portfolio' 
               width={100} 
               height={100} 
               className='mb-4 w-full h-full rounded-lg'
               />
               <div>
                <h2 className='mb-2 text-4xl font-medium leading-tight'>Hello world</h2>
                <p> 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                </p>
               </div>
           </div>
        </Block>
    )
};
const HeaderBlock02 = () => {
    return (
        <Block className='col-span-12 md:row-span-2 md:col-span-6 p-2'>
           <div>
              <Image 
               src={'/images/3dportfolio.png'} 
               alt='3d Portfolio' 
               width={100} 
               height={100} 
               className='mb-4 w-full h-full rounded-lg'
               />
               <div>
                <h2 className='mb-2 text-4xl font-medium leading-tight'>Hello world</h2>
                <p> 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                </p>
               </div>
           </div>
        </Block>
    )
};
const HeaderBlock03 = () => {
    return (
        <Block className='col-span-12 md:row-span-2 md:col-span-6 p-2'>
           <div>
              <Image 
               src={'/images/3dportfolio.png'} 
               alt='3d Portfolio' 
               width={100} 
               height={100} 
               className='mb-4 w-full h-full rounded-lg'
               />
               <div>
                <h2 className='mb-2 text-4xl font-medium leading-tight'>Hello world</h2>
                <p> 
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries,
                </p>
               </div>
           </div>
        </Block>
    )
};

export default AppGridSection