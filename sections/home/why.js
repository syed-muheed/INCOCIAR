import React from 'react'
import src from "../../public/images/why1.png"
import { syne } from '@/components/fonts'


const Why = () => {
  return (
    <div className={` ${syne.className}`}>
      <div className=' flex h-[56rem]'>
        <div className=' h-full w-[73.5%] '>
            <div className=' h-[35%] flex'>
            <div style={{ backgroundImage: "url(/images/why1.png)"}} className=" bg-cover  w-[35%] "></div>
            <div className=' bg-[#A3886E] text-[5rem] leading-[5rem] w-[65%] font-medium text-center flex items-center justify-center  text-[#7A2100] '><div>Why Choose <span className=' text-[white]'> Incociar ?</span></div></div>
            </div>
            <div className='h-[65%] flex'>
            <div style={{ backgroundImage: "url(/images/why3.png)"}} className=' bg-cover w-[60%] h-full '></div>
            <div style={{ backgroundImage: "url(/images/why4.png)"}} className=' bg-cover w-[40%] h-full'></div>
            </div>
        </div>
        <div className=' h-full w-[26.5%] '>
            <div style={{ backgroundImage: "url(/images/why2.png)"}} className=' bg-cover h-[57%]'></div>
            <div className=' bg-[#7A2100] h-[43%]'></div>
            
        </div>
      </div>
    </div>
  )
}

export default Why
