import React from "react";

import Navbar from "./Navbar";
import Image from "next/image";

export function BackgroundLinesDemo() {
    
  return (
    <div className="relative flex flex-col items-center bg-black/[0.96]">
      <div className="">
        <Navbar />
      </div>
      <div className="flex items-center justify-center w-full min-h-1/2 absolute top-0 flex-col px-4">
      <div className="">
        <Image 
        src={"/images/shopifylogo.png"} 
        alt="Realistic Shopify logo" 
        width={500}
        height={500}
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto"
        />
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-300 to-neutral-800 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Your Shopify, <br />Ecommerce or Website
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Here you see all what we kalkazian create with our pattern <br />
          Shopify, we can create exacly what you want create.
        </p>
      </div>
      </div>
    </div>
  );
}
