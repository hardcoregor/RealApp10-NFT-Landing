import Image from 'next/image'
import React, { useState } from 'react'
import disc from '../assets/socials/disc.png'
import tw from '../assets/socials/tw.png'
import play from '../assets/socials/play.png'
import { Link } from 'react-scroll'
import menu from '../assets/addons/menu.png'

const Header = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
    console.log(open)
  }
  return (
    <div className='h-[75px] flex justify-center items-center px-[60px] text-white border-b-[1px] border-white border-opacity-50 z-50'>
      <div className='bg-black opacity-20 h-[75px] w-full absolute -z-10' />

      {/* LARGE */}
      <div className='lg:flex w-full h-full justify-between items-center md:hidden'>
        <Link to="#" className='font-medium text-3xl cursor-pointer'>Adventure Pickle</Link>
        <div className='flex text-3xl items-center text-white '>
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

      {/* MD */}
      <div className='flex justify-between w-full items-center lg:hidden'>
        <div className='w-1/4'></div>
        <div>
          <Link to="#" className='font-medium flex justify-center text-5xl cursor-pointer w-full'>Adventure Pickle</Link>
        </div>

        <div className='w-1/4 flex justify-end'>
          <Image
            src={menu}
            width={35}
            height={35}
            alt="menu"
            style={{ objectFit: "contain" }}
            onClick={() => { isOpen() }}
          />
        </div>

      </div>
    </div>
  )
}

export default Header