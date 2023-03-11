import Image from 'next/image'
import React from 'react'
import { raleway } from '../utils/fonts'
import footerLine from '../assets/footerLine.png'
import smallLogo from '../assets/smallLogo.png'
import lineOne from '../assets/lineOne.png'
import inst from '../assets/socico/inst.png'
import op from '../assets/socico/op.png'
import tg from '../assets/socico/tg.png'
import tw from '../assets/socico/tw.png'
import ButChat from './utils/ButChat'

const Footer = () => {
  return (
    <div className='w-full h-full bg-footer bg-no-repeat bg-cover bg-[center_top_0px] relative'>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-white text-7xl mt-[200px]'>Adventure Pickle Principles</h1>

        <div className='flex flex-wrap mt-[70px] justify-between w-full px-[200px]'>
          <div className={`justify-center items-center text-white bg-block1 bg-no-repeat bg-cover bg-[center_top_-10px] h-[425px] w-[360px] cursor-pointer`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl'>Narrative</h1>
              <p className={`mt-[8px] font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block2 bg-no-repeat bg-cover bg-[center_top_-10px] h-[425px] w-[360px] cursor-pointer`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl'>Innovation</h1>
              <p className={`mt-[8px] font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block3 bg-no-repeat bg-cover bg-[center_top_-10px] h-[425px] w-[360px] cursor-pointer`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl'>Worldbuilding</h1>
              <p className={`mt-[8px] font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block4 bg-no-repeat bg-cover bg-[center_top_-10px] h-[425px] w-[360px] cursor-pointer`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl'>Suns Studio</h1>
              <p className={`mt-[8px] font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>

        </div>

        <div className="w-full mt-[158px] object-fill">
          <Image src={footerLine} alt="prolog" className="w-full h-[20px]" />
        </div>

        <div className='flex flex-wrap mt-[60px] px-[300px] w-full justify-between mb-[160px]'>
          <div className='flex'>
            <div className='flex flex-col mr-[150px]'>
              <Image src={smallLogo} alt="prolog" className="w-[115px]] h-[70px]" />
              <span className={`text-white mt-5 opacity-60 cursor-pointer ${raleway.className}`}>Privacy policy</span>
              <span className={`text-white mt-3 opacity-60 cursor-pointer ${raleway.className}`}>Term of use</span>
              <span className={`text-white mt-3 opacity-60 cursor-pointer ${raleway.className}`}>Cookies</span>
            </div>
            <Image src={lineOne} alt="prolog" className="w-[5px] h-[180px]" />
          </div>

          <div className='flex'>
            <div className='flex flex-col mr-[150px]'>
              <span className={`text-white opacity-90 cursor-pointer ${raleway.className}`}>Home</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Community</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Our Token</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Partners</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>FAQ</span>
            </div>
            <Image src={lineOne} alt="prolog" className="w-[5px] h-[180px]" />
          </div>
          <div className='flex'>
            <div className='flex flex-col mr-[150px]'>
              <h3 className={`text-white text-[16px] font-semibold opacity-90 ${raleway.className}`}>Contacts</h3>
              <span className={`text-white mt-3 opacity-90 ${raleway.className}`}>adventurepickle@gmail.com</span>
              <div className='flex mt-5 items-center'>
                <Image src={inst} alt="inst" className="w-[27.5px] h-[27.5px] mr-5 cursor-pointer" />
                <Image src={tw} alt="tw" className="w-[23px] h-[20px] mr-5 cursor-pointer" />
                <Image src={tg} alt="tg" className="w-[22px] h-[22px] mr-5 cursor-pointer" />
                <Image src={op} alt="opensea" className="w-[22px] h-[22px] cursor-pointer" />
              </div>
            </div>
            <Image src={lineOne} alt="prolog" className="w-[5px] h-[180px]" />
          </div>
          <div className='flex'>
            <div className='flex flex-col'>
              <h3 className={`text-white text-[16px] font-semibold opacity-90 ${raleway.className}`}>Support</h3>
              <ButChat text={"Open chat"} />
              <span className={`text-white mt-5 opacity-60 ${raleway.className}`}>More info</span>
              <span className={`text-white mt-5 opacity-60 w-full ${raleway.className}`}>If you have a question you can write</span>
              <span className={`text-white -mt-2 opacity-60 w-full ${raleway.className}`}>to us or see some of <span className='underline text-[#008839] cursor-pointer'>our tutorials</span></span>
            </div>
          </div>
        </div>

        <div className='bg-[#1f321d] opacity-50 absolute h-[78px] w-full z-10 bottom-0' />
        <div className='mb-4 text-center'>
          <p className={`text-white text-[16px] font-normal opacity-90 ${raleway.className}`}>2023 All right reserved</p>
          <p className={`text-white text-[16px] font-normal opacity-90 ${raleway.className}`}>by Adventure Pickle</p>
        </div>
      </div>
    </div>
  )
}

export default Footer