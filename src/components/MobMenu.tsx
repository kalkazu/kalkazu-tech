import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function MobMenu({ Menus }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button
        className="lg:hidden z-[999] text-white relative"
        onClick={toggleDrawer}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 z-50 right-0 top-0 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="mt-32">
          <li>
            <Link href={"/"} className='text-center text-white gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl'>
              Home
            </Link>
          </li>
          {Menus.map(({ name, subMenu }: any, i: any) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, href, icon: Icon, alt }: any) => (
                      <Link
                        href={href}
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <CldImage 
                          src={Icon}
                          alt={alt}
                          width={50}
                          height={50}
                        />
                        {name}
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
          <li className="my-3">
            <Link
              href={"/blog"}
              className="text-center text-white gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
            >
              Blog
            </Link>
          </li>
          <li className="my-3">
            <Link
              href={"/contact"}
              className="flex-center text-white gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
