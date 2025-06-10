import CardBlog from '@/components/blogComponents/CardBlog'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className=''>
            <div className='bg-neutral-900 -mt-20 h-[700px]'>
              <Navbar />
             <div className='mt-58'>
                <h1 className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                  Create, Grow, and <br /> scale your business
                </h1>
                <div className='flex flex-col justify-center items-center'>
                    <Image 
                      src="/logo.png" 
                      alt='logo profile' 
                      width={100} 
                      height={100}
                      className=''
                    />
                    <p className="text-xl -mt-5 pb-5 md:text-xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                      Kalkazu Tech
                   </p>
                </div>
             </div>
            </div>
            <div>
                <div>
                    <Image 
                        src="/images/thumb.png" 
                        alt='logo profile' 
                        width={800} 
                        height={100}
                        className='max-w-[800px] w-full mx-auto -mt-48'
                    />
                    <h1 className="text-2xl text-center mt-5 pb-5 md:text-3xl px-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                      Learn negotiate
                    </h1>
                    <p className="text-xl block mx-auto pb-5 max-w-[1000px] md:text-xl px-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt rutrum arcu,
                      quis mattis enim luctus non. Vestibulum pulvinar dignissim mi, sed rhoncus dolor. Vivamus
                      non pretium metus, et accumsan nibh. Etiam ut lorem et risus posuere aliquet at ac elit.
                      Ut convallis ex mattis commodo varius. Nullam iaculis ipsum a diam suscipit, ut finibus
                      nisi convallis. Aliquam blandit vestibulum tristique. Sed augue urna, blandit in viverra in,
                      pellentesque vitae augue. Duis tempus dolor eu augue pharetra sagittis. Maecenas velit tellus,
                      fermentum at neque eget, porta placerat massa.
                      <br/> 
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt rutrum arcu,
                      quis mattis enim luctus non. Vestibulum pulvinar dignissim mi, sed rhoncus dolor. Vivamus
                      non pretium metus, et accumsan nibh. Etiam ut lorem et risus posuere aliquet at ac elit.
                      Ut convallis ex mattis commodo varius. Nullam iaculis ipsum a diam suscipit, ut finibus
                      nisi convallis. Aliquam blandit vestibulum tristique. Sed augue urna, blandit in viverra in,
                      pellentesque vitae augue. Duis tempus dolor eu augue pharetra sagittis. Maecenas velit tellus,
                      fermentum at neque eget, porta placerat massa.
                       <br />
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt rutrum arcu,
                      quis mattis enim luctus non. Vestibulum pulvinar dignissim mi, sed rhoncus dolor. Vivamus
                      non pretium metus, et accumsan nibh. Etiam ut lorem et risus posuere aliquet at ac elit.
                      Ut convallis ex mattis commodo varius. Nullam iaculis ipsum a diam suscipit, ut finibus
                      nisi convallis. Aliquam blandit vestibulum tristique. Sed augue urna, blandit in viverra in,
                      pellentesque vitae augue. Duis tempus dolor eu augue pharetra sagittis. Maecenas velit tellus,
                      fermentum at neque eget, porta placerat massa.
                    </p>
                </div> 
            </div>
            <div className='flex flex-col'>
                <div className='text-center'>
                    <h1 className="text-2xl mt-5 pb-5 md:text-3xl px-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                      Check this Out
                    </h1>
                </div>
                <div className='flex flex-col gap-3 md:gap-4 md:flex-row md:flex-wrap justify-center items-center'>
                  <CardBlog />
                  <CardBlog />
                  <CardBlog />
                </div>
            </div>
        </div>
        <div className="">
         <Footer />
        </div>
    </div>
  )
}

export default page