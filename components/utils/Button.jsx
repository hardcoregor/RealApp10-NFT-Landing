import React from 'react'

const Button = ({ classes,text }) => {
  return (
      <div className={`z-100 flex sm:text-4xl sm:text-center sm:flex sm:justify-center md:w-[180px] md:h-[64px] justify-center items-center text-white text-[30px] md:text-[30px] bg-outline bg-no-repeat bg-cover bg-[center_top_-0px] xs:mb-[150px] xs:h-[60px] xs:w-[170px] s:h-[71px] s:w-[200px] sm:h-[60px] sm:w-[170px]
       ${classes} cursor-pointer`}>{text}</div>
  )
}

export default Button