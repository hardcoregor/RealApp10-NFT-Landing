import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';

const Prologue = () => {
  return (
    <div className='w-full h-full bg-prologue bg-no-repeat bg-cover bg-[center_top_0px]'>
      <div className='flex flex-col'>
        <div className='flex justify-center pt-[80px]'>
          <Image
            src={logo}
            alt="prolog"
          />
        </div>
        <div className='text-white'>
          asdasdasd
        </div>
      </div>
    </div>
  )
}

export default Prologue