import React from 'react'
import Image from 'next/image'
import src from "@/public/images/agency.png"
import Padding from '@/components/padding'
import { syne } from '@/components/fonts'

const Agency = () => {
  return (
    <Padding className={" py-20 md:flex gap-[1.8rem] lg:gap-[5rem] items-center"}>
      <div className=' h-[25rem] md:h-[21rem] md:w-[18rem] lg:h-[35rem] lg:w-[35rem] object-cover'><Image alt='alt' className='h-full w-full object-cover' src={src}/> </div>
      <div className=' pt-[4rem] md:pt-0 flex flex-col gap-[1.3rem]'>
        <div className={` ${syne.className} text-[1.5rem] w-[25rem] lg:text-[2rem] leading-[34px] lg:leading-10 font-semibold lg:w-[30rem]`}>At our agency, we turn your dreams into reality</div>
        <div className='flex text-[#595959] flex-col gap-[1.4rem]'>
            <div className='max-w-[25rem] lg:max-w-[30rem]'>We believe in transforming your vision into something tangible, merging creativity with practicality to deliver results that exceed expectations. Every project we undertake is a step towards making your dream come to life</div>
            <div className='max-w-[24rem]  lg:max-w-[27.5rem]'>Our team of experts collaborates with you at every stage, ensuring your ideas are nurtured and shaped into something extraordinary. Together, we build not just projects, but lasting impressions</div>
        </div>
      </div>
    </Padding>
  )
}

export default Agency
