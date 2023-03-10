import Image from 'next/image'
import React from 'react'
import disc from '../assets/socials/disc.png'
import tw from '../assets/socials/tw.png'
import play from '../assets/socials/play.png'

const Header = () => {
  return (
    <div className='h-[75px] flex justify-center items-center px-[60px] text-white border-b-[1px] border-white border-opacity-50'>
      <div className='bg-black opacity-20 h-[75px] w-full absolute -z-10' />
      <div className='flex w-full h-full justify-between items-center'>
        <span className='font-medium text-3xl cursor-pointer'>Adventure Pickle</span>
        <div className=' text-3xl text-white'>
          <span className='mr-[63px] cursor-pointer'>Background</span>
          <span className='mr-[63px] cursor-pointer'>Collection</span>
          <span className='mr-[63px] cursor-pointer'>Project</span>
          <span className='mr-[63px] cursor-pointer'>Loop Chronicles</span>
          <span className=' cursor-pointer'>F.A.Q.</span>
        </div>
        <div className='flex'>
          <Image
            src={tw}
            alt="discord"
            className="mr-[46px] cursor-pointer"
            style={{objectFit:"contain"}}
          />
          <Image
            src={disc}
            alt="discord"
            height={32}
            className="mr-[46px] cursor-pointer"
            style={{objectFit:"contain"}}
          />
          <Image
            src={play}
            className=" cursor-pointer"
            style={{objectFit:"contain"}}
          />
        </div>
      </div>
    </div>
  )
}

export default Header