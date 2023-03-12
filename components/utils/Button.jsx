import React from 'react'

const Button = ({ classes,text }) => {
  return (
      <div className={`flex justify-center items-center text-white text-[30px] md:text-[40px] bg-outline bg-no-repeat bg-cover bg-[center_top_-10px] h-[70px] md:h-[105px] w-[200px]
      md:w-[300px] ${classes} cursor-pointer`}>{text}</div>
  )
}

export default Button