"use client";

import CardAnimated from "@/components/CardAnimated";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import SlideSection from "@/components/SlideSection";
import { CldImage } from "next-cloudinary";



const page = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <Navbar />
      <div className="flex flex-col">
        <CldImage
          src={"codesimbol_uxm0dn"}
          alt="Code simbol"
          width={500}
          height={500}
          className="mx-auto mt-20"
        />
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-300 to-neutral-800 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-5 font-bold ">
          Create your Website, <br />
          100% Customized
        </h2>
        <p className="ext-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Here you see all what we kalkazian create with our pattern <br />
          Shopify, we can create exacly what you want create.
        </p>
      </div>
      <CardAnimated />
      <div>
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This is my <br /> Programming skills !
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
            <SlideSection
              title={"Blog App"}
              image={"/images/blogapp.webp"}
              alt="Blog app"
              className={"w-full h-full md:w-[350px] md:h-[300px] rounded-lg text-white"}
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
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This is my <br /> Programming skills !
        </div>
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <Skills
            image={"reactjs_pjxj09"}
            alt={"React logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"React Js"}
          />
          <Skills
            image={"redux_bjahms"}
            alt={"Redux logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"Redux Js"}
          />
          <Skills
            image={"node-js_cf76wv"}
            alt={"Nodejs logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"Node Js"}
          />
          <Skills
            image={"expressjss_mhhuu2"}
            alt={"Express js logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"Express Js"}
          />
          <Skills
            image={"postgress_g3tkor"}
            alt={"Postgres logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"Postgres"}
          />
          <Skills
            image={"mongodb_pyvnnx"}
            alt={"Mongo DB Logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"MongoDB"}
          />
          <Skills
            image={"tailwindcss_gd4sf9"}
            alt={"Tailwindcss logo"}
            className={"w-[40px] h-[40px] text-white"}
            children={"Tailwind Css"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
