import Gallery from '@/components/Gallery'
import React from 'react'

const Websites = () => {
  return (
    <div>
        <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Websites that <br /> works !
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
            Creating, Design and developing websites that work for your business.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
         <Gallery title={"Portal Job"} content={"Job platform with all features that one platform need."} image={"/images/portaljob.png"}/>
         <Gallery title={"Page Bank"} content={"This beautiful webite is to you see what we can make with your online business."} image={"/images/bank.png"}/>
         <Gallery title={"Iphone Titanium"} content={"This beautiful lading page wa made for you understand that our work is serious."} image={"/images/titanium.png"}/>
         <Gallery title={"3D Portfolio"} content={"This beautiful website is to see that we have all that we need to become your online buiness reality."} image={"/images/3dportfolio.png"}/>
        </div>
    </div>
  )
}

export default Websites