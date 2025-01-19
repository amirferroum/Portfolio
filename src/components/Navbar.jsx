import React from 'react'
import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import {FaRegCopyright} from "react-icons/fa"
import { AnimatePresence,motion,useScroll } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=' mb-20 flex item-center justify-between py-6'>
       <div  className="flex items-center justify-center group p-4">
<div className="flex items-center justify-center pr-1 group-hover:rotate-360 cursor-pointer duration-500 ">
  <FaRegCopyright size={15}/>
  </div>
  <div className="flex justify-between w-[130px] h-[30px] whitespace-nowrap overflow-hidden cursor-pointer">
  
  <motion.h1 
  className="text-xl font-semibold"
  onClick={()=>{router.push('/')}}
  whileHover={{x : -80,transition: {duration: 0.4,ease: [0.76, 0, 0.24, 1], delay: 0.05}}}
  >Code by Amir Ferroum</motion.h1>
 
  </div>
</div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl'>
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
        <FaSquareXTwitter/>
        </div>
    </nav>
  )
}

export default Navbar