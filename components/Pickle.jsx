import React from 'react'
import { raleway } from '../utils/fonts'

const Pickle = () => {
  return (
    // <div className='w-full h-full bg-pickle bg-no-repeat bg-cover bg-[center_top_0px] pb-[280px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] s:mb-[300px] sm:-mt-[100px] lg:relative lg:px-14 xl:relative xl:mt-[200px] 2xl:mt-[130px] 2xl:pt-[600px]'>
      <div className='text-white text-center px-14 i14:pt-[120px] xs:px-4 sm:relative md:relative lg:text-left lg:px-0 xl:ml-[80px] 2xl:ml-[230px] w-full lg:w-[100%]'>
        <h1 className='text-7xl sm:absolute sm:-top-[150px] sm:w-full sm:mt-20 md:absolute md:-top-[100px] md:w-full lg:absolute lg:top-[400px] lg:w-full lg:text-center xl:text-left xl:text-7xl xl:absolute xl:-top-[1000px] 2xl:text-7xl 2xl:-mt-[80px] 2xl:-top-[400px] 2k:-top-[150px]'>The Project</h1>
        <p className={`mt-[41px] font-thin text-2xl leading-[35px] xs:text-xl sm:absolute sm:top-[50px] sm:text-2xl lg:text-[20px] lg:absolute lg:top-[550px] lg:text-2xl lg:leading-[27px] xl:absolute xl:text-[16px] xl:-top-[880px] xl:w-[55%] 2xl:mt-[10px] 2xl:text-lg 2xl:-top-[350px] 2xl:w-[40%] 2k:-top-[100px] ${raleway.className}`}>The Pickle Adventure project is the first step in the creation of the Empty Jar ecosystem that we are building on the Solana blockchain. The ecosystem will bring together different projects, mechanics and applications that will be linked by one token and one universe.</p>
        <p className={`mt-[20px] lg:mt-[375px] font-thin text-2xl mb-0 xs:mb-40 xs:text-xl sm:text-2xl sm:mt-[150px] lg:text-2xl leading-[35px] lg:leading-[27px] lg:pt-[250px] xl:absolute xl:text-[16px] xl:-top-[1350px] xl:w-[55%] xl:mb-40 2xl:text-lg 2xl:-mt-[50px] 2xl:-top-[410px] 2xl:w-[40%] 2k:-top-[150px] ${raleway.className}`}>
          In our DAO you can have fun, make new friends, take part in story writing, and become part of something new in the NFT space. We want to give players the opportunity to become an integral part of the world we're building and contribute to the storyline of the quest games and animated stories.
          We believe that our ecosystem will be a powerful tool for the development and integration of different projects, which will open up new opportunities for users and create new standards in the industry. Get ready for an exciting journey into the future with Pickle Adventure and the Empty Jar ecosystem!
        </p>

      </div>
    </div>
  )
}

export default Pickle