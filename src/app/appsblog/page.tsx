import AppGridSection from "@/components/blogComponents/AppGridSection";
import CardBlog from "@/components/blogComponents/CardBlog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col">
          <div className="mt-42 text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
             All that you need <br /> to know about App's World
            <p className="text-xl mt-6 pb-2 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              All week we publishing all that you need know about Apps
            </p>
          </div>
          <div className="flex gap-1 md:flex-row flex-col items-center jutify-center mx-auto">
            <input
              type="email"
              placeholder="Subscribe our Email box"
              name="newsletter"
              className="text-white w-full max-w-[350px] h-[60px] border border-neutral-500 rounded-lg placeholder:text-neutral-600 pl-3"
            />
            <button className="border w-[160px] h-[58px] rounded-lg text-md mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Subscribe
            </button>
          </div>
        </div>
        <div className="my-32">
            <div className="">
               <h1 className="text-3xl md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                 Published recently
                </h1>
               <AppGridSection />
            </div>
            <div className="mt-20">
              <div className="mx-auto mt-32">
                  <div className="max-w-[1200px] w-full flex flex-col justify-center">
                      <h1 className="text-3xl text-center md:ml-15 mb-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                        More About AI
                      </h1>
                      <div className="flex mx-auto flex-col justify-center md:flex-row gap-3 flex-wrap">
                      <CardBlog />
                      <CardBlog />
                      <CardBlog />
                      </div>
                   </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
