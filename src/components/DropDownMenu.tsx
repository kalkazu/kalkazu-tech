import React from 'react'
import { motion } from 'framer-motion'
import Link from "next/link"
interface DropDownMenuProps {
    onClose: () => void;
}
const DropDownMenu: React.FC<DropDownMenuProps> = () => {
  return (
    <motion.div
      className={`w-screen h-screen bg-gradient-to-b from-neutral-50 to-neutral-400
        bg-opacity-50 text-slate-300 p-6
        space-y-4 absolute top-28 left-0 right-0 z-50 rounded-t-3xl`}
        initial={{ opacity: 0, y: '-80%'}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: '-100%'}}
        transition={{ duration: 0.5}}
    >
      <div className='flex flex-col space-y-10'>
            <Link href="/websites" className='text-black text-2xl'>
            Websites
            </Link>
            <Link href="/apps" className='text-black text-2xl'>Apps</Link>
            <Link href="/graphic-design" className='text-black text-2xl'>Graphic</Link>
            <Link href="/shopify" className='text-black text-2xl'>Shopify</Link>
            <Link href="/wordpress" className='text-black text-2xl'>Wordpress</Link>
      </div>
    </motion.div>
  )
}

export default DropDownMenu