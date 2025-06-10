"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeGridSection from "@/components/HomeGridSection";

const stores = [
  {
    image: "/images/teezzstore.png",
    quote: "This beautiful Female store made only to you see our work...",
    name: "> Teezz Store",
    button: "https://ads2fb-y8.myshopify.com/?pb=0"
  },
  {
    image: "/images/boardbeach.png",
    quote: "This beautiful board surf store made only to you see our work...",
    name: "> Board Beach",
    button: "https://smu5pz-8p.myshopify.com/?pb=0"
  },
];

const Shopify = () => {
  return (
    <div>
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Check our<br /> Website Portfolio
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          Create the stunning websites<br/> like this for your business
        </p>
      </div>
      <div className="md:flex items-center justify-center">
        <HomeGridSection />
      </div>
    </div>
  );
};

export default Shopify;
