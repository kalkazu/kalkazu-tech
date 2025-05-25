"use client";
import Image from "next/image";
import { GlareCard } from "../components/ui/glare-card";

export function GlareCardDemo({src, alt, title}: any) {
  return (
    <div className="bg-black/[0.96]">
      <GlareCard className="flex flex-col bg-black/[0.96] items-center justify-center">
         <Image 
            src={src}
            alt={alt}
            width={100} 
            height={100} 
            className="w-[100px] h-[100px]"
           />
        <p className="text-white font-bold text-xl mt-4">{title}</p>
      </GlareCard>
    </div>
  );
}
