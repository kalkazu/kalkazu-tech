
import GridSection from "@/components/GridSection";
import React from "react";

const Graphic = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Check our <br /> Social media
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          We create stunning visuals for your brand. From logos to social media
          posts, we&apos;ve got you covered.
        </p>
      </div>
      <div className="">
        <div className="">
           <GridSection />
        </div>    
      </div>
    </div>
  );
};

export default Graphic;
