"use client";
import { useState } from 'react'
import {motion} from "framer-motion"


function CardAnimated() {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5]);

    const handleNext = () => {
       setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 6);
          return updatedIndexes;
       })
    };
    const imgs = [
        "/images/3dportfolio.png",
        "images/bank.png",
        "images/xora.png",
        "images/xora.png",
        "images/titanium.png",
        "images/lp.png",
    ];
    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1',
        'right2',
    ];
    const variants = {
       center: {x: '0%', scale: 1, zIndex: 5}, 
       left1: {x: '-50%', scale: 0.7, zIndex: 2}, 
       left: {x: '-90%', scale: 0.5, zIndex: 1}, 
       right: {x: '90%', scale: 0.5, zIndex: 1}, 
       right1: {x: '-50%', scale: 0.7, zIndex: 2}, 
       right2: {x: '50%', scale: 0.7, zIndex: 2}, 
    }
  return (

       <div className='flex items-center mt-20 flex-col justify-start bg-black/[0.96] mb-20 overflow-hidden'>
        {imgs.map((image, index) => (
          <motion.img 
            key={index}
            src={image}
            alt={image}
            className={'rounded-[12px]'}
            initial='center'
            animate={
              positions[positionIndexes[index]]
            }
            variants={variants}
            transition={{ duration: 0.5 }}
            style={{maxWidth: "600px", width: "100%", position: 'absolute'}}
          />
        ))};
        <div className='flex justify-center md:mt-20'>
          <button className='text-black mt-[320px] cursor-pointer bg-neutral-400 rounded-md p-3' onClick={handleNext}>Next</button>
        </div>
       </div>

  )
}

export default CardAnimated