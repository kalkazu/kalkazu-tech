import Navbar from "@/components/Navbar";
import SlideSection from "@/components/SlideSection";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <div className="text-4xl mt-32 pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Build your App <br /> With Us !
      </div>
      <SlideSection />
    </div>
  );
};

export default page;
