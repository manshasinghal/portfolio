import React from 'react'
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./project";
import Contact from "./Contact";
import Footer from "./Footer";
export default function Goto() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}
