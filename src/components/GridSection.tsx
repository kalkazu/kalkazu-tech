import React from 'react'
import { twMerge } from 'tailwind-merge'
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi"
import { SiBehance, SiLinkedin, SiYoutube} from "react-icons/si"
import {motion, MotionProps} from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'

const GridSection = () => {
  return (
    <div className='min-hscreen bg-zinc-900 px-4 py-12 text-zinc-50'>
       <div className='mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense'>
           <HeaderBlock />
           <SocialsBlock />
           <AboutBlock />
           <LocationBlock />
           <EmailListBlock />
       </div> 
    </div>
  )
}
type Props = {
    className?: string;
} & MotionProps;
const Block = ({className, ...rest}: Props) => {
    return (
        <motion.div 
        className={twMerge("col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6", className)}
        {...rest}
        />
    );
};

const HeaderBlock = () => {
    return (
        <Block className='col-span-12 row-span-2 md:col-span-6 p-2'>
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

const SocialsBlock = () => {
    return (
        <>
            <Block 
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className='col-span-6 bg-red-500 md:col-span-3'>
                <Link 
                href={"#"}
                className='grid h-full place-content-center text-3xl text-white'
                >
                    <SiYoutube />
                </Link>           
            </Block>
            <Block 
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className='col-span-6 bg-blue-500 md:col-span-3'>
                <Link 
                href={"#"}
                className='grid h-full place-content-center text-3xl text-white'
                >
                    <SiLinkedin />
                </Link>           
            </Block>
            <Block 
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className='col-span-6 bg-neutral-900 md:col-span-3'>
                <Link 
                href={"#"}
                className='grid h-full place-content-center text-3xl text-white'
                >
                    <SiBehance />
                </Link>           
            </Block>
            <Block 
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className='col-span-6 bg-neutral-900 md:col-span-3'>
                <Link 
                href={"#"}
                className='grid h-full place-content-center text-3xl text-white'
                >
                    <FiMail />
                </Link>           
            </Block>
        </>
    )
};

const AboutBlock = () => {
    return (
        <>
        <Block className='col-span-12 text-3xl leading-snug'>
            <div>
                <Image 
                  src={"/logo.png"}
                  alt="Kalkazu logo"
                  width={500}
                  height={500}
                  className='w-[200px] h-[200px]'
                />
                <div>
                    <h2>About Us</h2>
                    <p>
                         Lorem Ipsum has been the industry's 
                         standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of 
                         type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries,
                    </p>
                </div>
            </div>
        </Block>
        </>
    )
};

const LocationBlock = () => {
    return (
        <>
          <Block className='col-span-12 flex flex-col items-center gap-4 md:col-span-3'>
             <FiMail className='text-3xl' />
             <p className='text-center text-lg text-zinc-400'>CyberSpace</p>
          </Block>
        </>
    )
};

const EmailListBlock = () => {
    return (
        <>
         <Block className='col-span-12 md:col-span-9'>
          <p className='mb-3 text-lg'>Join my mailing list</p>
          <form
           onSubmit={(event) => event.preventDefault()}
           className='flex items-center gap-2'
           >
            <input 
              type='email'
              placeholder='Enter your Email'
              className='w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0'
            />
            <button 
              type='submit'
              className='flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300'
            ><FiMail /> Join the List</button>
          </form>

         </Block>
        </>
    )
};

export default GridSection