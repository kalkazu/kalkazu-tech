"use client";
import { CldImage } from 'next-cloudinary';
import React from 'react'


const Footer = () => {
  return (
    <div className='bg-black/[0.97] flex flex-col justify-center w-full mx-auto'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around p-5'>
        <div className='flex flex-col'>
          <div  className='flex items-center gap-2 justify-center'>
            <CldImage
              src={"kalkazu_transparent_bqr6rh"} 
              alt="Kalkazu tech" 
              width={100} 
              height={100} 
              className=''
            />
            <p className="-ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Kalkazu Tech</p>
          </div>
            <div className='text-center'>
              <p className="font-thing opacity-50 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Evolve that magic happens</p>
            </div>
        </div>
        <div>
            <div className='text-center mt-5'>
                <h2 className="font-bold -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Our Services</h2>
                <p className="font-thin -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Websites</p>
                <p className="font-thin -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Apps</p>
                <p className="font-thin -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Graphic Design</p>
                <p className="font-thin -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Shopify</p>
                <p className="font-thin -ml-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Wordpress</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer