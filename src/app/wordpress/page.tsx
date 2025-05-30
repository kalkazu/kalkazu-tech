"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Skills from "@/components/Skills";
import SlideWordpress from "@/components/SlideWordPress";

import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <div>
        <Image
          src="/images/wordpresslogo.png"
          alt="Wordpress 3d logo"
          width={500}
          height={500}
          className="mx-auto w-[500px] h-[500px]"
        />
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Your Wordpress, <br /> Ecommerce or Website
        </div>
      </div>
      <SlideWordpress />
      <div className="flex flex-col mb-6">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Our Wordpress, <br /> Skills !
        </div>
        <div className="flex flex-wrap md:flex-row justify-center items-center gap-6">
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
          <Skills
            image={"/images/wordpress.png"}
            alt={"Wordpress logo"}
            className={"w-[35px] h-[35px] ml-2 rounded-full"}
            children={"Wordpress"}
          />
        </div>
      </div>

      <Pricing />
      <Footer />
    </div>
  );
};

export default page;
