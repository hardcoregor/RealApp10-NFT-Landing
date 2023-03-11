import React from 'react'
import outline from '../../assets/addons/buttonOutline.png'

const Button = ({ classes,text }) => {
  return (
      <div className={`flex justify-center items-center text-white text-[30px] bg-outline bg-no-repeat bg-cover bg-[center_top_-10px] h-[70px] w-[200px] ${classes} cursor-pointer`}>{text}</div>
  )
}

export default Button