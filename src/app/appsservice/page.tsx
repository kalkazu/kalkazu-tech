import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import SlideSection from "@/components/SlideSection";
import Image from "next/image";
import React from "react";

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
      <div className="mb-5">
        <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Build your App <br /> With Us !
        </div>
        <div className="p-5 flex md:gap-10 overflow-hidden flex-col md:flex-row">
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
      <div>
        <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This is our App <br /> Development kills
        </div>
        <Skills />
      </div>
      <Footer />
    </div>
  );
};

export default page;
