import React from 'react'

const Padding = ({children,className}) => {
  return (
    <div className={` px-[1rem] md:px-[2rem] xl:px-[3rem] ${className}`}>
      {children}
    </div>
  )
}

export default Padding
