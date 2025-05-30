
import Navbar from "@/components/Navbar";
import Image from "next/image";


import React from "react";
import Footer from "@/components/Footer";
import SlideShopify from "@/components/SlideShopify";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
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
      <SlideShopify />
      <Footer />
    </div>
  );
};

export default page;
