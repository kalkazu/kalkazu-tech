import CardBlog from "@/components/blogComponents/CardBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col">
          <div className="mt-42 text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            The best place to you <br />getting know about tech
            <p className="text-xl mt-6 pb-2 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Welcome to Our Blog,<br/> all week we have the best articles for you.
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col items-center jutify-center mx-auto">
            <input
              type="email"
              placeholder="Subcribe our Email box"
              name="newsletter"
              className="text-white w-full max-w-[350px] h-[60px] border border-neutral-500 rounded-lg placeholder:text-neutral-600 pl-3"
            />
            <button className="border w-[160px] h-[58px] rounded-lg text-md mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-15">
        <div className="flex gap-3 flex-row justify-center items-center">
          <div>
            <ArrowBigLeft className="text-white md:cursor-pointer" />
          </div>
          <div>
            <ul className="flex gap-2 flex-row">
              <li className="text-white bg-neutral-900 h-[30px] rounded-lg flex justify-center items-center w-[80px]">
                <Link href={"/devBlog"}>Dev</Link>
              </li>
              <li className="text-white bg-neutral-900 h-[30px] rounded-lg flex justify-center items-center w-[80px]">
                <Link href={"/ai"}>AI</Link>
              </li>
              <li className="text-white bg-neutral-900 h-[30px] rounded-lg flex justify-center items-center w-[80px]">
                <Link href={"/appsblog"}>Apps</Link>
              </li>
            </ul>
          </div>
          <div>
            <ArrowBigRight className="text-white md:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-32 flex justify-center items-center">
          <div className="max-w-[1200px] w-full flex flex-col justify-center">
            <h1 className="text-xl ml-15 mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Highlights
            </h1>
            <div className="flex flex-col justify-center md:flex-row gap-3 flex-wrap">
              <CardBlog />
              <CardBlog />
              <CardBlog />
            </div>
          </div>
      </div>
      <div className="mt-32 flex justify-center items-center">
          <div className="max-w-[1200px] w-full flex flex-col justify-center">
            <h1 className="text-xl ml-15 mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              The News about Dev's World
            </h1>
            <div className="flex flex-col justify-center md:flex-row gap-3 flex-wrap">
              <CardBlog />
              <CardBlog />
              <CardBlog />
            </div>
          </div>
      </div>
      <div className="mt-32 flex justify-center items-center">
          <div className="max-w-[1200px] w-full flex flex-col justify-center">
            <h1 className="text-xl ml-15 mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              The News about AI's World
            </h1>
            <div className="flex flex-col justify-center md:flex-row gap-3 flex-wrap">
              <CardBlog />
              <CardBlog />
              <CardBlog />
            </div>
          </div>
      </div>
      <div className="my-32 flex justify-center items-center">
          <div className="max-w-[1200px] w-full flex flex-col justify-center">
            <h1 className="text-xl ml-15 mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              The News about App's World
            </h1>
            <div className="flex flex-col justify-center md:flex-row gap-3 flex-wrap">
              <CardBlog />
              <CardBlog />
              <CardBlog />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
