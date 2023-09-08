import { Link } from 'react-scroll';
import { List1 } from './List1'
import React from "react";
import { useState } from 'react';
import {X,Menu} from 'lucide-react'
import './Navbar.css'
export default function Navbar() {
  const[isOpen,setIsOpen] = useState(false);
  const toggleNavbar = () =>{
    setIsOpen(!isOpen)
  };
 
      
  return (
    <div class="flex justify-around pt-8 px-8 bg-black lg:bg-transparent lg:fixed top-0 left-0 w-full h-[6rem] z-50">
   
     <h1 className=' text-gray-300 text-2xl cursor-pointer lg:flex hidden'>
    Portfolio
      </h1>
      <div className=''>
    <ul className='nav '>
    {
      List1.map(({path,name})=>(
        <li className="ml-12 text-gray-400 font-bold text-xl cursor-pointer hover:text-gray-200 ease-in duration-300 " key={name}  >
        <Link to={path} smooth={true} duration={500}>{name}</Link>
      </li>
      ))}
</ul>
</div> 
  <div className='md:hidden ml-[250px] absolute'>
       <button className='mt-8 text-white flex items-center ease-in duration-300' onClick={toggleNavbar}>{isOpen ? <X/> :<Menu/>}</button> 
      </div>
    
   
  {isOpen &&
  (
    <div className='flex basis-full flex-col text-center ml-[-25px] mt-16 flex-wrap  md:hidden  ease-in duration-300'>
    <ul className='flex flex-col bg-white py-8  ease-in duration-300'>
        {
      List1.map(({index,path,name})=>(
        <li className=" font-serif text-black font-bold hover:text-gray-200 ease-in duration-300 " key={index}>
          <Link to={path} >{name}</Link>
            </li>
      ))}
        </ul>
    </div>
  )}
  </div>
     
   
  )
}
