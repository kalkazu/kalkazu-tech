"use client";

import Pricing from "@/components/CardPricing";
import Footer from "@/components/Footer";
import { GlareCardDemo } from "@/components/GlareCardDemo";
import { SparklesBackground } from "@/components/sparklesBackground";
import { TimelineDemo } from "@/components/TimeLineDemo";

import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen bg-black/[0.96]">
      <SparklesBackground />
      <TimelineDemo />
      <div className="bg-black/[0.96]">
        <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            This is my <br /> Code Skills
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
            This is all programming lenguage skills that i have knowledge
          </p>
        </div>
        <div className="flex flex-col gap-10 md:gap-10 md:flex-wrap md:flex-row justify-center md:justify-center items-center md:items-center mx-auto">
        <GlareCardDemo src={"/images/js.png"} alt={"JavaScript logo"} title={"JavaScript"}/>
        <GlareCardDemo src={"/images/node-js.png"} alt={"Node Js logo"} title={"Node Js"}/>
        <GlareCardDemo src={"/images/react.png"} alt={"React Js logo"} title={"React"}/>
        <GlareCardDemo src={"/images/redux.png"} alt={"Redu Js logo"} title={"Redux"}/>
        <GlareCardDemo src={"/images/expressjs.png"} alt={"Express Js logo"} title={"Express Js"}/>
        <GlareCardDemo src={"/images/mongodb.png"} alt={"MongoDb logo"} title={"Mongo DB"}/>
        </div>
        <Pricing />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default page;
