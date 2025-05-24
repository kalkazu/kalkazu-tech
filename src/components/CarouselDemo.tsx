"use client";

import { Carousel } from "../components/ui/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Teezz Store",
      button: "See Online",
      src: "/images/teezzstore.png",
      href: "https://ads2fb-y8.myshopify.com/?pb=0",
    },
    {
      title: "Urban Dreams",
      button: "See Online",
      src: "/images/teezzstore.png",
      href: "https://ads2fb-y8.myshopify.com/?pb=0",
    },
    {
      title: "Teezz Store",
      button: "See Online",
      src: "/images/teezzstore.png",
      href: "https://ads2fb-y8.myshopify.com/?pb=0",
    },
    {
      title: "Desert Whispers",
      button: "See Online",
      src: "/images/teezzstore.png",
      href: "https://ads2fb-y8.myshopify.com/?pb=0",
    },
  ];
  return (
    <div className="relative overflow-hidden bg-black/[0.96] w-full h-full py-20">
      <div className="p-4 mx-auto z-10 w-full py-20 md:pt-32 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          This is <br /> my portfolio !
        </div>
      </div>
      <Carousel slides={slideData} />
    </div>
  );
}
