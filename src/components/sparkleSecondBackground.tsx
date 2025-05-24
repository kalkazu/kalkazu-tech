"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { TabsDemo } from "./TabsDemo";

export function SparkleSecondBackground() {
  return (
    <div className="h-screen relative w-full bg-black overflow-hidden rounded-md">
      <div className="flex flex-col items-center justify-center w-full h-[40rem]">
        <div className="w-full absolute inset-0 h-screen">

          <TabsDemo />
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
}
