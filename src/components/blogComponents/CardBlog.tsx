import { ArrowBigRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const CardBlog = () => {
  return (
    <div className='p-5 w-[360px] bg-neutral-900 rounded-md'>
        <div className='relative rounded-md'>
            <Image 
              src={"/images/thumb.png"} 
              alt='image' 
              width={100} 
              height={100}
              className='w-full max-w-[350px] rounded-md'
            />
            <p className="absolute bottom-2 left-2 text-sm bg-neutral-900 text-white py-1 px-4 w-[50px] rounded-lg">
              Dev
            </p>
        </div>
        <div>
            <div>
                <h2 className="text-xl mt-6 pb-2 md:text bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">Google launched his AI</h2>
                <p className='text-neutral-300'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.  
                </p>
            </div>
            <div className='mt-3'>
                <Link href={"#"} className='text-white flex flex-row gap-1'>
                  See More
                  <ArrowBigRight className='text-white'/>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default CardBlog