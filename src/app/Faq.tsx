'use client';
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import FaqAccordion from "@/components/FaqAccordion";
import { faqInformation } from "../dataBase/data.js"
const Faq = () => {
  return (
    <div className="mb-10">
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Websites that <br /> works !
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          Creating, Design and developing websites that work for your business.
        </p>
      </div>
      <div className="w-[680px] flex flex-col justify-center items-center mx-auto">
        <Accordion type="single" collapsible className="w-full">
            {
                faqInformation.map((info, index) => {
                    return (
                        <FaqAccordion
                          key={index + 1}
                          value={info.value} 
                          titleTrigger={info.titleTrigger}
                          accordionContent={info.accordionContent}
                          />
                    )
                })
            }
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
