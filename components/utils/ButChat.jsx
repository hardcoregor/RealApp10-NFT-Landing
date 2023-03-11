import React from 'react'

const ButChat = ({ classes,text }) => {
  return (
      <div className={`mt-4 flex justify-center items-center text-white text-[30px] bg-butOut bg-no-repeat bg-cover bg-[center_top_0px] h-[53px] w-[175px] ${classes} cursor-pointer`}>{text}</div>
  )
}

export default ButChat