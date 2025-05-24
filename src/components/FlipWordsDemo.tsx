"use client";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { motion } from "framer-motion";
export function FlipWordsDemo() {
  const words = [
    "Secure", 
    "Modern", 
    "Scalable"
    ];

  return (
    <div className="h-[10rem] ">
      <div className="flex flex-col justify-center items-start px-4">
        <motion.p 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1}}
          className='md:text-5xl text-start text-3xl font-medium text-neutral-300'>Graphic Design is <br /> </motion.p>
          <FlipWords words={words} />
        </div>
    </div>
  );
}
