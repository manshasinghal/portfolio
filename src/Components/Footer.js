import React from 'react'
import { List3 } from './List3';
import { Link } from 'react-scroll';
import className from 'classnames';
export default function Footer() {
    const InputClasses = className('mt-1 mr-4 hover:translate-y-[-2px] ease-in duration-300 text-2xl mt-4');

  return (
    <div className='bg-green-400 w-full flex-col text-center'>
      <div>
      <p className='text-xl font-semibold pt-8'>Free feel to connect on social media</p>
      <div className='cursor-pointer flex justify-center'>
      {
        List3.map(({icon,link})=>(
           <a href={link} className={InputClasses}  target="_blank"> {icon}</a>
        ))
      }
   


       
        </div>
        <div>
        <Link to='contact' smooth={true} duration={500}>
        <button className='mt-4 mb-4 border-black font-semibold text-black border-2 bg-transparant  ease-in duration-300  rounded-md p-2 w-[100px] hover:bg-black hover:text-white'>Let's Talk</button>
        </Link>
       </div>
      </div>
    </div>
  )
}
