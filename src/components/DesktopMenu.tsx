import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopMenu({ menu }: any) {
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      onHoverStart={() => {
        toggleHoverMenu();
      }}
      onHoverEnd={toggleHoverMenu}
      key={menu.name}
    >
      <span className="flex-center text-white gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] text-white group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu mt-15"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-white">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <Link href={submenu.href} className="flex-center gap-x-4 group/menubox">
                    <div className="bg-white w-fit p-2 rounded-md group-hover/menubox:bg-gray-700 group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold text-neutral-200">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}