import Image from 'next/image'
import React from 'react'
import cards from '../assets/underMain.png'
import { raleway } from '../utils/fonts'

const Cards = () => {
  return (
    // <div className='w-full h-full bg-cards bg-no-repeat bg-cover bg-[center_top_0px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] '>
      <div className='flex flex-col lg:flex-row pt-[170px] lg:pt-[170px]'>
        <div className='w-full lg:w-[40%] '>
          <div className='flex flex-col text-white mt-[50px] lg:ml-[170px] text-center lg:text-left px-14'>
            <h1 className='text-7xl'>A Collection Driven</h1>
            <h2 className={`mt-[22px] mb-[34px] font-semibold ${raleway.className}`}>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
            <p className={`font-thin ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p className={`font-thin ${raleway.className} mt-6 hidden lg:flex`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>
        </div>
        {/* MD */}
        <div className='flex lg:hidden mt-10 lg:mt-0'>
          <Image
            src={cards}
            alt="cards"
            width={1500}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* LG */}
        <div className='hidden lg:flex'>
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