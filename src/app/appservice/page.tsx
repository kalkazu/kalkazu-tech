"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Slides from "@/components/Slides";
import SlideSection from "@/components/SlideSection";
import Image from "next/image";
import React from "react";
import { imgSectionHero } from "@/dataBase/data.js";
import GridAppSection from "@/components/GridAppSection";

const page = () => {
  return (
    <div className="w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Build your App <br /> With Us !
      </div>
      <Image
        src="/images/appvideo.gif"
        alt="App video intrduction"
        width={100}
        height={100}
        className="w-full md:w-[1080px] p-5 mx-auto"
      />
      <div>
        <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This are <br /> Our work !
        </div>
        <Slides props={imgSectionHero} />
      </div>
      <div>
        <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
           Check our <br /> Media !
        </div>
        <GridAppSection />
      </div>
      <div className="mb-5">
        <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Check our <br /> Services!
        </div>
        <div className="flex justify-center ">
          <div className="p-5 flex md:gap-7 md:grid md:grid-cols-2 overflow-hidden flex-col md:flex-row">
          <SlideSection
            title={"Blog App"}
            image={"/images/blogapp.webp"}
            alt="Blog app"
            className={"w-full h-full md:w-[350px] md:h-[300px] rounded-lg"}
            href={"#"}
            children={"See Online"}
          />
          <SlideSection
            title={"Blog App"}
            image={"/images/blogapp.webp"}
            alt="Blog app"
            className={"w-full h-full md:w-[350px] md:h-[300px] rounded-lg"}
            href={"#"}
            children={"See Online"}
          />
          <SlideSection
            title={"Blog App"}
            image={"/images/blogapp.webp"}
            alt="Blog app"
            className={"w-full h-full md:w-[350px] md:h-[300px] rounded-lg"}
            href={"#"}
            children={"See Online"}
          />
          <SlideSection
            title={"Blog App"}
            image={"/images/blogapp.webp"}
            alt="Blog app"
            className={"w-full h-full md:w-[350px] md:h-[300px] rounded-lg"}
            href={"#"}
            children={"See Online"}
          />
          </div>
        </div>
      </div>
      <div>
        <div className="text-4xl my-25 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This is our App <br /> Development kills
        </div>
        <div className="w-full flex justify-center items-center md:max-w-[968px] md:mx-auto">
          <div className="flex justify-center items-center flex-wrap gap-3">
            <Skills 
             image={"expo_pf61bd"} 
             alt={"Expo logo"} 
             children={"Expo"}
             className={"size-10"}
             />
             <Skills 
             image={"reactnative_kwkrbj"} 
             alt={"React Native logo"} 
             children={"React Native"}
             className={"size-8"}
             />
             <Skills 
             image={"redux_bjahms"} 
             alt={"Redux logo"} 
             children={"Redux"}
             className={"size-8"}
             />
             <Skills 
             image={"mongodb_pyvnnx"} 
             alt={"Mongo db Logo"} 
             children={"MongoDB"}
             className={"size-8"}
             />
             <Skills 
             image={"expressjss_mhhuu2"} 
             alt={"Expressjs logo"} 
             children={"Express Js"}
             className={"size-8"}
             />
             <Skills 
             image={"zod_gxlrwo"} 
             alt={"Zodjs logo"} 
             children={"Zod Js"}
             className={"size-8"}
             />
             <Skills 
             image={"jwt_x1dpop"} 
             alt={"Jaison web token logo"} 
             children={"Jwt"}
             className={"size-8"}
             />
             <Skills 
             image={"postgress_g3tkor"} 
             alt={"Postgres logo"} 
             children={"Postgres"}
             className={"size-8"}
             />
             <Skills 
             image={"neopostgress_h9a40z"} 
             alt={"Neo Postgres logo"} 
             children={"Neo"}
             className={"size-8"}
             />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
