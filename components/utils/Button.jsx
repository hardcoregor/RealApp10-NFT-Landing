import React from 'react'

const Button = ({ classes,text }) => {
  return (
      <div className={`z-100 flex sm:text-4xl sm:h-[100px] sm:w-[280px] sm:text-center sm:flex sm:justify-center md:w-[180px] md:h-[64px] justify-center items-center text-white text-[30px] md:text-[30px] bg-outline bg-no-repeat bg-cover bg-[center_top_-0px] h-[70px] w-[200px]
       ${classes} cursor-pointer`}>{text}</div>
  )
}

export default Button