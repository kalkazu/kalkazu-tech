"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="-top-1/4 md:left-70 md:-top-1/4" fill="white" />
      <div>
        <Image 
         src="/images/wordpresslogo.png" 
         alt="Wordpress 3d logo" 
         width={100} height={100}
         className="mx-auto w-[300px] h-[300px]"
         />
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Your Wordpress, <br /> Ecommerce or Website
        </div>
      </div>
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
};

export default page;
