import React from "react";
import l1 from "./Pictures/C++.png";
import l2 from "./Pictures/C.png";
import l3 from "./Pictures/css.svg";
import l4 from "./Pictures/Html.png";
import l5 from "./Pictures/js.png";
import l6 from "./Pictures/python.png";
import l7 from "./Pictures/mongodb.svg";
import l8 from "./Pictures/express.webp";
import l9 from "./Pictures/node.webp";
import l10 from "./Pictures/react.png";
import l11 from "./Pictures/tailwind.svg";
import { motion } from "framer-motion";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function Skills() {
  return (
    <div className="bg-black w-full h-screen pt-24 pl-4 lg:pl-12  ">
    
        <div>
        <div>
        <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className=" text-[60px]  font-bold font-mono"
      >
       
          <h2 className="text-slate-400 text-xl font-bold mb-4">Skills</h2>
          <h1 className="text-white font-semibold text-[40px] mb-4">
            My Skills
          </h1> 
          </m.div>
          </LazyMotion>
          </div>
          <div>
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
          <p className="text-white font-bold mb-4">
            I like to take responsbility to make attractive websites using
            modern frontend architecture
          </p>
          <div className="flex-col">
            <div>
              <h1 className="Uppercase text-slate-400 text-lg mb-8 font-bold">
                LANGUAGES AND TOOLS
              </h1>
            </div>
            <div className="flex ">
              <img className="mr-6 w-[60px] h-[60px]" src={l2} alt="" />
              <img className="mr-6 w-[60px] h-[60px]" src={l1} alt="" />
              <img className="mr-4 w-[60px] h-[60px]" src={l3} alt="" />
              <img
                className="mr-1 w-[80px] h-[80px] mt-[-16px]"
                src={l4}
                alt=""
              />
              <img className="mr-4 w-[100px] h-[60px]" src={l5} alt="" />
              <img className="mr-4 w-[60px] h-[60px]" src={l6} alt="" />
            </div>
            <div>
              <h1 className="Uppercase text-slate-400 text-lg mb-8 font-bold">
                LIBRARIES AND FRAMEWORK
              </h1>
            </div>
            <div className="flex">
              <img
                className="mr-4 w-[70px] h-[70px] mt-[-8px]"
                src={l10}
                alt=""
              />
              <img className="mr-6 w-[60px] h-[60px]" src={l8} alt="" />
              <img className="mr-4 w-[60px] h-[60px]" src={l9} alt="" />
              <img className="mr-4 w-[60px] h-[60px]" src={l11} alt="" />
            </div>
            <div>
              <h1 className="Uppercase text-slate-400 text-lg mb-2 font-bold mt-4">
                DATABASES
              </h1>
            </div>
            <div className="flex  ">
              <img className="mr-6 w-[60px] h-[60px]" src={l7} alt="" />
            </div>
          </div>
          </motion.div>
        </div>

        </div>
     
    </div>
  );
}
