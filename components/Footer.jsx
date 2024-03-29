import Image from 'next/image'
import React from 'react'
import { raleway } from '../utils/fonts'
import footerLine from '../assets/footerLine.png'
import smallLogo from '../assets/smallLogo.png'
import lineOne from '../assets/lineOne.png'
import discord from '../assets/socico/discord.png'
import tw from '../assets/socico/tw.png'
import ButChat from './utils/ButChat'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Footer = () => {
  return (
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] relative px-0 xs:px-10 md:pt-[50px] xl:mt-[600px] 2xl:mt-[350px] xl:relative'>

      <div className='flex flex-col justify-center items-center 2k:mt-[200px]'>
        <h1 className='text-white text-[54px] leading-[47px] xs:text-left sm:text-center sm:px-10 sm:text-6xl sm:mt-[50px] lg:pt-[0px] lg:text-7xl lg:hidden 2xl:flex'>Adventure Pickle Principles</h1>

        {/* LG + XL */}
        <h1 className='text-white xs:text-6xl xs:text-center sm:px-10 sm:text-6xl sm:mt-[50px] lg:pt-[0px] lg:text-7xl lg:flex lg:mb-[200px] 2xl:hidden'></h1>
        <h1 className='text-white xs:text-6xl xs:text-center sm:px-10 sm:text-6xl sm:mt-[50px] lg:pt-[0px] lg:text-7xl xl:absolute xl:top-0 xl:-mt-[750px] hidden lg:flex 2xl:hidden'>Adventure Pickle Principles</h1>
        <div className='hidden sm:flex xs:flex-wrap xs:justify-center md:flex-wrap my-[70px] s:justify-center sm:justify-between w-full px-[20px] lg:px-[0px] xl:absolute xl:-top-[650px] xl:justify-around 2xl:static'>
          <div className={`justify-center items-center text-white bg-block1 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] s:w-[90%] sm:w-[47%] sm:h-[320px] md:h-[400px] lg:h-[580px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[320px]`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl sm:-mt-12 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Narrative</h1>
              <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 sm:mt-3 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Storytelling through the creation of interactive games, comics with a compelling storyline and animated series.  </p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block2 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[600px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[320px]`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl sm:-mt-12 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Innovation</h1>
              <p className={`xs:mb-14 sm:my-[20px] sm:pb-10 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Innovation, where the project's community influences the story and the development of the universe.</p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block3 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] md:h-[400px] lg:h-[580px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[320px] xl:mt-0`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Style</h1>
              <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>The unique style of the project and the constant development of the ecosystem.</p>
            </div>
          </div>

          <div className={`justify-center items-center text-white bg-block4 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[590px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[320px] xl:mt-0`}>
            <div className='flex flex-col mt-[190px] items-center'>
              <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Integrations</h1>
              <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Integration of AI to scale the universe.</p>
            </div>
          </div>
        </div>
        <div className='w-full h-full sm:hidden'>
          <Slider {...settings}>
            <div className={`justify-center items-center text-white bg-block1 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] xs:h-[350px] s:h-[500px] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px]`}>
              <div className='flex flex-col mt-[190px] items-center'>
                <h1 className='text-3xl xs:-mt-[20px] sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Narrative</h1>
                <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Storytelling through the creation of interactive games, comics with a compelling storyline and animated series.  </p>
              </div>
            </div>
            <div className={`justify-center items-center text-white bg-block2 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] xs:h-[350px] s:h-[500px] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px]`}>
              <div className='flex flex-col mt-[190px] items-center'>
                <h1 className='text-3xl xs:-mt-[20px] sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Innovation</h1>
                <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Innovation, where the project's community influences the story and the development of the universe.</p>
              </div>
            </div>
            <div className={`justify-center items-center text-white bg-block3 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] xs:h-[350px] s:h-[500px] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px] xl:mt-0`}>
              <div className='flex flex-col mt-[190px] items-center'>
                <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Style</h1>
                <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>The unique style of the project and the constant development of the ecosystem.</p>
              </div>
            </div>
            <div className={`justify-center items-center text-white bg-block4 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] xs:h-[350px] s:h-[500px] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px] xl:mt-0`}>
              <div className='flex flex-col mt-[190px] items-center i14:h-[155px]'>
                <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Integrations</h1>
                <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Integration of AI to scale the universe.</p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="w-full xs:w-[150%] lg:mt-[158px] object-fill">
          <Image src={footerLine} alt="line" className="w-full xs:h-[10px] sm:h-[20px]" />
        </div>

        <div className='flex flex-wrap mt-[60px] px-[50px] xs:px-4 lg:px-[50px] 2xl:px-[300px] w-full justify-between mb-[50px] lg:mb-[160px]'>
          <div className='flex'>
            <div className='flex flex-col mr-[20px] xs:mr-[10px] sm:mr-[20px] lg:mr-[100px] 2xl:mr-[150px] 2xl:-ml-[100px]'>
              <Image src={smallLogo} alt="line" className="w-[115px]] h-[70px]" />
              <span className={`text-white mt-5 opacity-60 cursor-pointer ${raleway.className}`}>Privacy policy</span>
              <span className={`text-white mt-3 opacity-60 cursor-pointer ${raleway.className}`}>Term of use</span>
              <span className={`text-white mt-3 opacity-60 cursor-pointer ${raleway.className}`}>Cookies</span>
            </div>
            <Image src={lineOne} alt="line" className="w-[5px] h-[180px]" />
          </div>

          <div className='flex'>
            <div className='flex flex-col mr-[20px] xs:mr-[10px] sm:mr-[20px] lg:mr-[100px] 2xl:mr-[150px] 2xl:-ml-[100px]'>
              <span className={`text-white opacity-90 cursor-pointer ${raleway.className}`}>Home</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Community</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Our Token</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>Partners</span>
              <span className={`text-white mt-4 opacity-90 cursor-pointer ${raleway.className}`}>FAQ</span>
            </div>
            <Image src={lineOne} alt="line" className="w-[5px] h-[180px]" />
          </div>
          <div className='sm:flex md:hidden hidden'>
            <div className='sm:flex flex-col'>
              <h3 className={`text-white text-[16px] font-semibold opacity-90 ${raleway.className}`}>Support</h3>
              <span className={`text-white mt-5 opacity-60 ${raleway.className}`}>More info</span>
              <span className={`text-white mt-5 opacity-60 ${raleway.className}`}>Questions</span>
              <span className={`text-white mt-5 opacity-60 ${raleway.className}`}>Additional</span>
              <span className={`text-white mt-5 opacity-60 ${raleway.className}`}>Connect</span>
            </div>
          </div>
          <div className='flex xs:mt-4 xs:items-center xs:justify-center xs:w-full md:w-[25%] md:items-start md:mt-0'>
            <div className='flex flex-col 2xl:-ml-[100px]'>
              <h3 className={`text-white text-[16px] font-semibold opacity-90 xs:text-center md:text-left select-none ${raleway.className}`}>Contacts</h3>
              <span className={`text-white mt-3 opacity-90 ${raleway.className}`}>pickleadventurenft@gmail.com</span>
              <div className='flex mt-5 items-center xs:justify-center md:justify-start'>
                <a target='_blank' href="https://discord.com/invite/m3VuMRjEsW">
                  <Image src={discord} alt="discord" className="w-[27.5px] h-[27.5px] mr-5 cursor-pointer" />
                </a>
                <a target='_blank' href="https://twitter.com/PickleAdvNFT">
                  <Image src={tw} alt="tw" className="w-[23px] h-[20px] mr-5 cursor-pointer" />
                </a>
              </div>
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