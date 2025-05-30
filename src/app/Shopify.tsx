"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          Shopify Store <br /> works !
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-w-lg text-center mx-auto px-4">
          Creating the best Shopify websites for your business.
        </p>
      </div>
      <div className="md:flex items-center justify-center px-10 ">
        {stores.map((store, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
          >
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={store.image}
                alt="shopify store"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
              <p className="text-neutral-300 w-[400px] font-bold text-lg mt-4 text-center ">
                &quot;{store.quote}&quot;
              </p>
              <p className="text-neutral-300 font-bold text-lg mt-4">
                {" "}
                - {store.name}
              </p>
              <div className="mt-5">
                <Link type="button" href={`${store.button}`} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>{`See Store`}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                      ></path>
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopify;
