import HeroImg from "/assets/hero.webp"
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  textVariant,
  scaleIn,
  fadeIn
} from "./animations/Animate"

export default function HeroSection() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex items-center flex-col lg:flex-row mb-[300px] lg:mb-0 h-screen gap-[55px] overflow-x-hidden">

      <motion.div
        variants={slideFromLeft}
        className="relative w-[100%] h-full bg-primary-75">

        {/* corners✅ */}
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white top-[3px] left-[1px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white bottom-[3px] left-[1px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white top-[3px] right-[2px]"></div>
        <div className="absolute w-5 h-5 border-2 border-neutral-800 rounded-full bg-white bottom-[3px] right-[2px]"></div>

        <div className="w-full h-full p-2 overflow-hidden">
          <motion.img
            variants={fadeIn}
            src={HeroImg}
            className="object-cover w-full h-full border-2 border-black"
            alt="Students in computer Lab"
          />
        </div>
      </motion.div>

      <motion.div
        variants={slideFromRight}
        className="w-[100%] flex flex-col gap-[30px]">

        <div className="text-center lg:text-start">
          <motion.div
            variants={textVariant}
            className="flex justify-center lg:justify-start">
            <p className="border-b-2 border-black w-fit">Welcome to ESSA Nyarugunga</p>
          </motion.div>
          <motion.h2
            variants={textVariant}
            className="text-[38px] lg:text-[48px] mt-2 text-text-15 font-extrabold leading-[60px]">
            Where Young Minds Blossom and <span className="text-primary-65">Dreams Take Flight</span>
          </motion.h2>
        </div>

        <motion.p
          variants={fadeIn}
          className="text-center lg:text-start lg:font-medium text-[#333333] text-xl font-semibold leading-normal">
          Quia facere sapiente eius iure et of obcaecati rem voluptatum necessitatibus aperiam! Harum ad quisquam omnis praesentium, molestias, consequuntur voluptatem dolor ratione unde deleniti expedita dignissimos labore. Iure fugiat, aperiam sapiente itaque sunt mollitia facilis.
        </motion.p>

        <div
          className="flex items-center justify-center w-full">
          <div className="flex flex-col w-full sm:flex-row bg-[#ffeee5] justify-between border-2 border-neutral-800 gap-[15px] shadow-[8px_8px_0px_1px_rgba(255,190,153,1.00)] rounded-xl  px-[50px] py-6">
            {/* Analytics items */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center w-full py-3 border-b-2 border-black cursor-default sm:border-b-0 sm:items-start">
              <h1 className="text-neutral-800 text-[44px] font-extrabold leading-[66px]">6.9K</h1>
              <span className="text-neutral-800 text-lg font-medium leading-[27px]">Students passed</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center w-full py-3 cursor-default sm:items-start">
              <h1 className="text-neutral-800 text-[44px] font-extrabold leading-[66px]">1015</h1>
              <span className="text-neutral-800 text-lg font-medium leading-[27px]">Students</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center w-full py-3 border-b-2 border-black cursor-default sm:border-b-0 sm:items-start">
              <h1 className="text-neutral-800 text-[44px] font-extrabold leading-[66px]">4</h1>
              <span className="text-neutral-800 text-lg font-medium leading-[27px]">Trades</span>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  )
}
