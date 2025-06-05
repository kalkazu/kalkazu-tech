import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-32 h-screen w-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              Get in Touch
            <p className="text-xl my-5 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
              We are waiting for your contact us to help<br /> you build your business
              dream.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-20 md:justify-between max-w-[1100px]">
          <div className="w-[50%] flex flex-col md:justify-center md:items-start mx-auto">
            <div>
              <h2 className="text-xl mb-1 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                Whatsapp
              </h2>
              <Link href={"#"} className="hover:underline text-neutral-500">
                +55 82 988728435
              </Link>
            </div>
            <div className="mt-5">
              <h2 className="text-xl mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                Email Address
              </h2>
              <p className="hover:underline text-neutral-500">
                contact@kalkazu.tech
              </p>
            </div>
          </div>
          <div className="w-[50%] mx-auto mt-15 flex-col flex justify-center items-center">
            <div className="mb-4">
                <h2 className="text-xl mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    How can we help you ?
                </h2>
            </div>
            <form action="">
              <div>
                <div>
                  <span className="text-sm mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    Your Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="nameUser"
                    className="text-white border border-neutral-500 rounded-lg py-2 placeholder:text-neutral-600 pl-3"
                  />
                </div>
                <div className="mt-2">
                  <span className="text-sm mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    Your Name
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="nameUser"
                    className="text-white border border-neutral-500 rounded-lg py-2 placeholder:text-neutral-600 pl-3"
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <span className="text-sm mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    Your Subject
                  </span>
                  <input
                    type="text"
                    placeholder="What is your subject ?"
                    name="subject"
                    className="text-white border border-neutral-500 rounded-lg py-2 placeholder:text-neutral-600 pl-3"
                  />
                </div>
                <div className="mt-2">
                  <span className="text-sm mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    Your Message
                  </span>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    className="border text-white border-neutral-500 rounded-lg py-2 placeholder:text-neutral-600 pl-3"
                  ></textarea>
                </div>
              </div>
              <div className="mt-3">
                <button className="border w-[160px] h-[50px] rounded-lg text-md mb-1 md:text text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
                    Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
