
import SlideSection from "@/components/SlideSection";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Check Our <br /> Apps Portfolio
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
            Create the stunning App<br />
            like this for your business
        </p>
         <div className="mt-10">
            <div className="flex flex-row flex-wrap gap-3 justify-center items-center">
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
