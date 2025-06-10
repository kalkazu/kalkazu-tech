import React from 'react'
import CardBlog from './blogComponents/CardBlog'

const SectionBlog = () => {
  return (
    <div className='mt-32'>
        <div>
            <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
             Check Our Blog for <br /> you get in about tech
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
                Create the stunning App<br />
                like this for your business
            </p>
        </div>
        <div className='mt-20 flex flex-col justify-center items-center'>
            <div className='flex gap-3 flex-col md:flex-row md:flex-wrap md:justify-center md:items-center'>
                <CardBlog />
                <CardBlog />
                <CardBlog />
            </div>
        </div>
    </div>
  )
}

export default SectionBlog