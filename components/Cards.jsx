import Image from 'next/image'
import React from 'react'
import cards from '../assets/underMain.png'
import { raleway } from '../utils/fonts'

const Cards = () => {
  return (
    // <div className='w-full h-full bg-cards bg-no-repeat bg-cover bg-[center_top_0px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] sm:px-10 lg:relative xl:relative'>
      <div className='flex flex-col lg:flex-row lg:mt-[245px] xl:pt-[270px] 2xl:pt-[0px]'>
        <div className='w-full 2xl:w-[40%] '>
          <div className='flex flex-col text-white lg:mt-0 mt-[50px] lg:ml-[12%] xl:ml-[80px] 2xl:ml-[230px] text-center lg:text-left'>
            <h1 className='text-7xl lg:absolute xl:-top-[350px] 2xl:flex 2xl:static 2xl:pt-[0px] 2xl:w-[200%]'>A Collection Driven</h1>
            <h2 className={`mt-[22px] mb-[34px] font-semibold lg:absolute lg:-top-[360px] lg:w-[35%] xl:-top-[260px] 2xl:text-xl 2xl:static 2xl:w-full ${raleway.className}`}>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
            <p className={`font-thin lg:-mt-[50px] lg:w-[50%] xl:absolute xl:-top-[110px] xl:w-[35%] 2xl:static 2xl:text-lg 2xl:w-full 2xl:pt-14 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p className={`font-thin ${raleway.className} mt-6 hidden lg:flex lg:w-[50%] xl:w-[35%] xl:absolute xl:top-[90px] 2xl:static 2xl:text-lg 2xl:w-full`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
        {/* SM */}
        <div className='sm:mb-[300px] sm:mt-[50px] sm:w-full sm:-left-[0px]'>
          <Image
            src={cards}
            alt="cards"
            width={1000}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* LG */}
        <div className='hidden lg:flex xl:hidden 2xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={1050}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* XL */}
        <div className='hidden xl:flex xl:absolute xl:-top-[350px] xl:right-0 2xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={800}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* 2xl */}
        <div className='hidden 2xl:flex xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={1050}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default Cards