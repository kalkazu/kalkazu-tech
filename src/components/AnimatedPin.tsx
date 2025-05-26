import React from "react";
import { AnimatedPinDemo } from "./AnimatedPinDemo";


const AnimatedPin = () => {
  return (
    <div>
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        This is my portfolio <br /> wordpress website
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <AnimatedPinDemo 
          title="Ecommerce" 
          content="We can help you to build your Ecommerce from scratch" 
          urlTitle="Preview online"
          href="https://www.google.com"
        />
        <AnimatedPinDemo 
          title="Your Blog"
          content="We can help you to share your knoledge per intire world !"
          urlTitle="Preview online"
          href="https://www.google.com"
        />
        <AnimatedPinDemo 
         title="Ladding Sells Page"
         content="We can help you to scale your sells with the best marketing sells page"
         urlTitle="Preview online"
         href="https://www.google.com"

        />
        <AnimatedPinDemo 
          title="Other projects"
          content="We can scale your project to you achive your dream business"
          urlTitle="Preview online"
          href="https://www.google.com"
        />
      </div>
    </div>
  );
};

export default AnimatedPin;
