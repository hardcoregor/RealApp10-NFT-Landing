import React from 'react'

const Button = ({ classes,text }) => {
  return (
      <div className={`flex sm:text-5xl sm:h-[100px] sm:w-[280px] sm:text-center sm:flex sm:justify-center md:w-[180px] md:h-[60px] justify-center items-center text-white text-[30px] md:text-[40px] bg-outline bg-no-repeat bg-cover bg-[center_top_-10px] h-[70px] w-[200px]
       ${classes} cursor-pointer`}>{text}</div>
  )
}

export default Button