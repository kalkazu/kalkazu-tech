"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Graphic from "./Graphic";
import Shopify from "./Shopify";
import Services from "./Services";
import Faq from "./Faq";
import Footer from "@/components/Footer";
import Image from "next/image";
import { imgSectionHero } from "@/dataBase/data";
import Slides from "@/components/Slides";
import SectionBlog from "@/components/SectionBlog";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      {/* <Spotlight className="-top-1/4 md:left-70 md:-top-1/4" fill="white" /> */}
      <div className="p-4 mx-auto z-10 w-full pt-10 md:pt-32 px-2">
        <div>
          <Image
            src={"/images/kalkazuvideotransparent.gif"}
            alt="Kalkazu video logo"
            width={500}
            height={500}
            className="mx-auto -mt-8"
          />
        </div>
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <p className="text-xl pb-2 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Welcome to Kalkazu Tech
          </p>
          Create, Grow, and <br /> scale your business
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
          creatives who are excited to help you grow your business
        </p>
        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
        >
          Book a call
        </Link>
        <div className="w-full pt-20">
          <Slides props={imgSectionHero} />
          <Graphic />
          <Shopify />
          <Services />
          <SectionBlog />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
}
