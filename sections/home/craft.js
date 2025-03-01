import React from 'react'
import Image from 'next/image'
import bgimg from "../../public/images/Craft.png"

const Craft = () => {
  return (
    <div className=' h-[200vh] pt-[10rem]'>
      <div className='  h-screen sticky top-0  flex items-center justify-center' >
        <Image alt='Craft' src={bgimg}/>
      </div>
    </div>
  )
}

export default Craft
