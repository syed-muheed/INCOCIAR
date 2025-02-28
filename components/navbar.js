import React from 'react'
import Padding from './padding'

const Navbar = () => {
  return (
    <Padding className={" flex justify-center items-center text-[14px] h-[4rem] relative bg-white"}>
        <div className=' flex  justify-center items-center text-[#78777B]'>
            <div>Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Locations</div>
        </div>
        <div className=' p-0.5 rounded-full contactbtn absolute right-[1rem] md:right-[2rem] xl:right-[3rem] top-[50%] -translate-y-1/2 '><div className=' px-2 py-1  bg-white rounded-full '><span className='linear-text-gradient'>Contact Us</span></div></div>
    </Padding>
  )
}

export default Navbar
