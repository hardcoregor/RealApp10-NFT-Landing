import Image from 'next/image'
import React from 'react'
import cards from '../assets/underMain.png'

const Cards = () => {
  return (
    <div className='w-full h-full bg-cards bg-no-repeat bg-cover bg-[center_top_0px]'>
      <div className='flex pt-[170px]'>
        <div className='flex flex-col text-white mt-[50px] ml-[170px]'>
          <h1 className='text-7xl'>A Collection Driven</h1>
          <h2 className='mt-[22px] mb-[34px]'>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </div>
        <Image
          src={cards}
          alt="cards"
          height={750}
        />
      </div>
    </div>
  )
}

export default Cards