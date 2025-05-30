
import SlideSection from "@/components/SlideSection";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Build your buiness <br /> with our services
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          We&apos;ll going to hold your hand and build with your buiness dream !
        </p>
         <div className="flex justify-center">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-1 md:gap-4">
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
    </div>
  );
};

export default Services;
