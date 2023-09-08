import React from "react";
import a1 from './Pictures/c1.webp'
import { motion} from 'framer-motion';
import { m, LazyMotion, domAnimation } from "framer-motion";
import './About.css'

export default function About() {
  return (
    <div className="pt-44 bg-black text-white pl-11 flex " id='about'>
  
    <div>
  
   <div>
   <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className=" text-[60px]  font-bold font-mono"
      >
      <h1 className=" font-md text-xl">INTRODUCTION</h1>
      <h1 className=" text-[60px]  font-bold font-mono">ABOUT ME</h1>
      </m.div>
            </LazyMotion>
        
        
           
      </div> 
      <p className="pt-16 text-green-400 text-lg lg:text-normal lg:whitespace-nowrap">Hello there, I'm so happy you are here!</p>
      <div className=" font-medium text-s  pt-8  w-[300px] lg:w-normal lg:whitespace-nowrap">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, x: -90 },
            visible: { opacity: 1, x: 0 },
          }}
        >

      <p className="">
        {" "}
        A passionate full stack developer I have a strong fascination for{" "}
        <br></br>creating visually appealing and user-friendly websites that
        leave a <br></br>lasting impression. 
      </p></motion.div>
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -90 },
            visible: { opacity: 1, x: 0 },
          }}
        >
      <p className="mt-8">
        {" "}
       I'm also 
        dedicated to honing my problem-solving abilities through my <br></br>Data
        Structures and Algorithms (DSA) practice. This helps me not
        only <br></br> write efficient code but also fosters a deep understanding
        of <br></br>programming principles. Throughout my academic journey,
      </p></motion.div>
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
      <p className="mt-8">
        Outside of my regular activities, I'm into drawing <br></br>whenever I
        have some free time. I'm also a huge book lover <br></br>and enjoy
        dancing for fun.
      </p></motion.div>
      <div className=" mt-8 lg:mt-8">
        <button className="border-green-700 border-[2px] rounded-2xl  p-2 w-[120px] bg-green-700 ">
          Check My CV
        </button>
      </div>
      </div>
    </div>
    
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 90 },
            visible: { opacity: 1, x: 0 },
          }}
        > 
    <div className=" mt-12 ml-[300px]">
       <img className="img" src={a1} alt=""
     
       />
      </div>
      </motion.div>
    </div>
  
  );
}
