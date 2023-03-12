import React from 'react'
import { raleway } from '../utils/fonts'

const Pickle = () => {
  return (
    // <div className='w-full h-full bg-pickle bg-no-repeat bg-cover bg-[center_top_0px] pb-[280px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] pb-[280px]'>
      <div className='text-white pt-[300px] ml-[190px] w-[38%]'>
        <h1 className='text-7xl'>The Project</h1>
        <p className={`mt-[41px] font-thin text-[20px] leading-[27px] ${raleway.className}`}>The Pickle Adventure project is the first step in the creation of the Empty Jar ecosystem that we are building on the Solana blockchain. The ecosystem will bring together different projects, mechanics and applications that will be linked by one token and one universe.</p>
        <p className={`mt-[20px] font-thin text-[20px] leading-[27px] ${raleway.className}`}>
          In our DAO you can have fun, make new friends, take part in story writing, and become part of something new in the NFT space. We want to give players the opportunity to become an integral part of the world we're building and contribute to the storyline of the quest games and animated stories.
          We believe that our ecosystem will be a powerful tool for the development and integration of different projects, which will open up new opportunities for users and create new standards in the industry. Get ready for an exciting journey into the future with Pickle Adventure and the Empty Jar ecosystem!
        </p>

      </div>
    </div>
  )
}

export default Pickle