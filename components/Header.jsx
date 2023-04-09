import Image from 'next/image'
import React, { useState } from 'react'
import disc from '../assets/socials/disc.png'
import tw from '../assets/socials/tw.png'
import burger from '../assets/addons/menu.png'
import play from '../assets/socials/play.png'
import { Link } from 'react-scroll'
import menu from '../assets/addons/menu.png'
import Router from 'next/router';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [quest, setQuest] = useState('Quest')

  const isOpen = () => {
    setOpen(!open);
    console.log(open)
  }

  const comingSoon = (text) => {
    setQuest("Soon..");
  };

  function handleClick() {
    Router.push('/quest');
  }quest


  return (
    <div className='h-[75px] justify-center items-center text-white border-b-[1px] border-white border-opacity-50 z-50'>
      <div className='bg-black opacity-50 h-[75px] w-full absolute -z-10' />

      <div className='flex w-full h-full justify-between items-center'>
        <Link to="#" className='xs:hidden lg:flex w-[75%] xs:text-[40px] xs:w-full lg:w-[20%] font-medium text-5xl lg:text-3xl cursor-pointer pl-[40px] 2xl:pl-[60px] glow'>Adventure Pickle</Link>
        <div className='lg:hidden w-full flex justify-between'>
          <div className='flex ml-6 lg:hidden 2xl:hidden items-center'>
            <a href="https://twitter.com/PickleAdvNFT">
              <Image
                src={tw}
                alt="discord"
                // height={35}
                className="mr-[23px] cursor-pointer"
                style={{ objectFit: "contain" }}
              />
            </a>
            <a href="https://discord.gg/m3VuMRjEsW">
              <Image
                src={disc}
                alt="discord"
                height={35}
                className="mr-[23px] cursor-pointer"
                style={{ objectFit: "contain" }}
              />
            </a>
          </div>
          <div className='bg-quest bg-cover w-[120px] h-[47px] mr-6' /*onClick={handleClick}*/ onClick={comingSoon}>
            <p className='lg:hidden text-2xl h-full ml-16 mt-2'>{quest}</p>
          </div>
        </div>
        <div className='flex text-3xl items-center text-white '>
          <Link to="background" spy={true} smoot={true} offset={-170} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Background</Link>
          <Link to="collection" spy={true} smoot={true} offset={0} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Collection</Link>
          <div className='flex items-center cursor-pointer glow' /*onClick={handleClick}*/ onClick={comingSoon}>
            <div className='mr-5 hidden lg:flex'>
              <Image
                src={play}
                // height={55}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p spy={true} smoot={true} offset={0} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full'>{quest}</p>
          </div>
          <Link to="project" spy={true} smoot={true} offset={0} duration={5000} className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>Project</Link>
          <a href='https://frank-29.gitbook.io/pickleadventure/' rel="noopener noreferrer" className='hidden lg:flex mr-[40px] 2xl:mr-[63px] h-full cursor-pointer glow'>
            Whitepaper
          </a>
          {/* <Link to="/" spy={true} smoot={true} offset={50} duration={500} className='hidden lg:flex h-full  cursor-pointer glow'>Comics</Link> */}
        </div>
        <div className='hidden 2xl:flex pr-[40px] items-center'>
          <a href="https://twitter.com/PickleAdvNFT">
            <Image
              src={tw}
              alt="discord"
              className="mr-[46px] cursor-pointer"
              style={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://discord.gg/m3VuMRjEsW">
            <Image
              src={disc}
              alt="discord"
              height={32}
              className="mr-[46px] cursor-pointer"
              style={{ objectFit: "contain" }}
            />
          </a>
          {/* <div onClick={handleClick}>
            <Image
              src={play}
              className="cursor-pointer"
              style={{ objectFit: "contain" }}
            />
          </div> */}
        </div>
        <div className='hidden lg:flex 2xl:hidden items-center'>
          <a href="https://twitter.com/PickleAdvNFT">
            <Image
              src={tw}
              alt="discord"
              // height={35}
              className="mr-[23px] cursor-pointer"
              style={{ objectFit: "contain" }}
            />
          </a>
          <a href="https://discord.gg/m3VuMRjEsW">
            <Image
              src={disc}
              alt="discord"
              height={35}
              className="mr-[23px] cursor-pointer"
              style={{ objectFit: "contain" }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header