"use client";





import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";




const page = () => {
  return (
    <div className="w-screen h-screen bg-black/[0.96] overflow-hidden">
      <Navbar />
      <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Some of my Job <br /> I hope you enjoy it
      </div>
      <Footer />
    </div>
  );
};

export default page;
