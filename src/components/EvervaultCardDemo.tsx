"use client";
import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { useMotionValue, useTransform, motion} from "framer-motion";


export function EvervaultCardDemo() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <div style={{ perspective: 2000 }}>
        <motion.div
            style={{ x, y, rotateX, rotateY, z:100 }} 
            drag
            dragElastic={0.18}
            dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            whileTap={{cursor: 'grabbing'}}
            className="border border-white/[0.2] flex flex-col items-start max-w-md mx-auto p-4 relative h-[35rem]"
        >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

        <EvervaultCard text="hover" />

        <h2 className="text-white mt-4 text-sm font-light">
           Hover over this card to reveal an awesome effect. Running out of copy
           here.
        </h2>
        <p className="text-sm border font-light border-white/[0.2] rounded-full my-4 text-white px-4 py-1">
            what you think ?
        </p>
        </motion.div>

    </div>
  );
}
