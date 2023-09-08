import React, { useState } from 'react';
import { List2 } from './List2';
import {BiLogoGithub} from 'react-icons/bi'
import { motion } from "framer-motion";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-black w-full h-full pt-24 pl-12' id='projects'>
    <div className='mb-16'>
    <div>
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className=" text-[60px]  font-bold font-mono"
      >
      <h2 className='text-slate-400 text-xl font-bold mb-4'>Projects</h2>
      <h1 className='text-white font-semibold text-[40px] mb-4'>My Projects</h1>
      </m.div>
          </LazyMotion>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.6 }}
        variants={{
          hidden: { opacity: 0, x: -90 },
          visible: { opacity: 1, x: 0 },
        }}
      >
      <p className='text-white font-bold mb-4'>Here some of my projects, the rest are available on GitHub </p>
      </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.6 }}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
      >
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
    
        {List2.map(({ bg, name ,para , link1 , link2}, index) => (
          <div
            key={index}
            className=' mt-6  sm:gap-10 relative group w-[301px] h-[400px] rounded-t-[30px]  mt-8  hover:opacity-100 transition-opacity duration-300 ease-in-out bg-slate-950 border-slate-900 shadow-md shadow-slate-400'
           
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
           <img className='w-[301px] h-[250px] rounded-t-[30px]' src={bg} alt="" />
           <p className='text-white text-center mt-4 font-semibold lg:font-bold text-xl'>{name}</p>
           <p className='text-white  mt-4 font-normal text-sm ml-2'>{para}</p>

          <div
              className='absolute inset-0 flex text-center hover:opacity-100 '
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out', 
              }}
            >
                <div className='bg-gradient-to-r from-black via-green-500 to-black w-[301px] h-[250px] rounded-t-[30px] pt-28 opacity-100 transition-opacity ease-in duration-300 '>
                
           <div className='flex justify-center'>
                    <a className='border-black text-white rounded-lg bg-black font-semibold text-2xl px-8 pt-1 mr-4 cursor-pointer' href={link1} target='blank'>See Demo</a>
                    <a className='text-5xl cursor-pointer'href={link2} target='blank'><BiLogoGithub/></a>
                  </div>
                </div>
              </div>
            
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
}