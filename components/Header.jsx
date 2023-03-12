import Image from 'next/image'
import React from 'react'
import disc from '../assets/socials/disc.png'
import tw from '../assets/socials/tw.png'
import play from '../assets/socials/play.png'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className='h-[75px] flex justify-center items-center px-[60px] text-white border-b-[1px] border-white border-opacity-50 z-50'>
      <div className='bg-black opacity-20 h-[75px] w-full absolute -z-10' />
      <div className='flex w-full h-full justify-between items-center'>
        <Link to="#" className='font-medium text-3xl cursor-pointer'>Adventure Pickle</Link>
        <div className='flex text-3xl items-center text-white'>
          <Link to="background" spy={true} smoot={true} offset={-170} duration={5000} className='mr-[63px] h-full cursor-pointer glow'>Background</Link>
          <Link to="collection" spy={true} smoot={true} offset={0} duration={5000} className='mr-[63px] h-full cursor-pointer glow'>Collection</Link>
          <Link to="project" spy={true} smoot={true} offset={0} duration={5000} className='mr-[63px] h-full cursor-pointer glow'>Project</Link>
          <Link to="/" spy={true} smoot={true} offset={50} duration={500} className='mr-[63px] h-full cursor-pointer glow'>Soon...</Link>
          <Link to="/" spy={true} smoot={true} offset={50} duration={500} className='h-full  cursor-pointer glow'>Comics</Link>
        </div>
        <div className='flex'>
          <Image
            src={tw}
            alt="discord"
            className="mr-[46px] cursor-pointer"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={disc}
            alt="discord"
            height={32}
            className="mr-[46px] cursor-pointer"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={play}
            className=" cursor-pointer"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header