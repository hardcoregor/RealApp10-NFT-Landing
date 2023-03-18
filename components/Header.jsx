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
    <div className='h-[75px] justify-center items-center text-white border-b-[1px] border-white border-opacity-50 z-50'>
      <div className='bg-black opacity-20 h-[75px] w-full absolute -z-10' />

      <div className='flex w-full h-full justify-between items-center'>
        <Link to="#" className='font-medium text-3xl cursor-pointer pl-[40px] 2xl:pl-[60px]'>Adventure Pickle</Link>
        <Image
            src={tw}
            alt="discord"
            // height={35}
            className="mr-[23px] cursor-pointer text-center"
            style={{ objectFit: "contain" }}
          />
        <div className='flex text-3xl items-center text-white '>
          <Link to="background" spy={true} smoot={true} offset={-170} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Background</Link>
          <Link to="collection" spy={true} smoot={true} offset={0} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Collection</Link>
          <Link to="project" spy={true} smoot={true} offset={0} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Project</Link>
          <Link to="/" spy={true} smoot={true} offset={50} duration={500} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Soon...</Link>
          <Link to="/" spy={true} smoot={true} offset={50} duration={500} className='hidden lg:flex h-full  cursor-pointer glow'>Comics</Link>
        </div>
        <div className='hidden 2xl:flex pr-[60px]'>
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
        <div className='hidden md:flex 2xl:hidden pr-[40px]'>
          <Image
            src={tw}
            alt="discord"
            // height={35}
            className="mr-[23px] cursor-pointer"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={disc}
            alt="discord"
            height={35}
            className="mr-[23px] cursor-pointer"
            style={{ objectFit: "contain" }}
          />
          <Image
            src={play}
            // height={55}
            className=" cursor-pointer"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header