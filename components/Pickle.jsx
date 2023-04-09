import React from 'react'
import { raleway } from '../utils/fonts'

const Pickle = () => {
  return (
    // <div className='w-full h-full bg-pickle bg-no-repeat bg-cover bg-[center_top_0px] pb-[280px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] xs:mt-[140px] s:mb-[260px] i12:mb-[150px] xr:mt-[290px] s:mt-0 sm:-mt-[100px] lg:relative lg:px-14 xl:relative xl:mt-[200px] 2xl:mt-[130px] 2xl:pt-[600px] 2xl:-ml-16'>
      <div className='text-white text-center px-14 i14:pt-[10px] s:pt-[50px] xs:px-10 sm:relative md:relative lg:text-left lg:px-0 xl:ml-[80px] 2xl:ml-[230px] w-full lg:w-[100%]'>
        <h1 className='text-[54px] xs:text-left sm:text-center sm:absolute sm:-top-[220px] sm:w-full sm:-ml-10 sm:mt-20 md:absolute md:-top-[250px] md:w-full lg:absolute lg:top-[400px] lg:w-full lg:text-center xl:text-left xl:text-7xl xl:absolute xl:-top-[900px] 2xl:text-7xl 2xl:-mt-[80px] 2xl:-top-[400px] 2k:-top-[50px]'>The Project</h1>
        <p className={`mt-[41px] font-light text-2xl leading-[35px] xs:w-[105%] xs:text-[14px] xs:leading-[16px] i11:text-[15px] i11:leading-[20px] xs:text-left sm:w-full sm:text-center sm:absolute sm:-ml-10 sm:-top-[50px]  sm:text-2xl md:absolute md:-top-[120px] lg:absolute lg:top-[550px] lg:text-[20px] lg:leading-[27px] xl:absolute xl:text-left xl:text-[16px] xl:-top-[730px] xl:w-[55%] 2xl:mt-[10px] 2xl:text-lg 2xl:-top-[320px] 2xl:-ml-[50px] 2xl:w-[45%] 2xl:text-left 2xl:text-[19px] 2k:-top-[00px] s:text-[19px] s:leading-[24px] sm:text-[19px] sm:leading-[24px] sm:px-[50px] xl:px-0 ${raleway.className}`}>The Pickle Adventure project is the first step in the creation of the Empty Jar ecosystem that we are building on the Solana blockchain. The ecosystem will bring together different projects, mechanics and applications that will be linked by one token and one universe.</p>
        <p className={`mt-[20px] lg:mt-[375px] font-light text-2xl mb-0 xs:mb-[220px] i11:mb-[120px] i14:pb-[50px] s:pb-[0px] xs:w-[105%] xs:text-[14px] xs:leading-[16px] i11:text-[15px] i11:leading-[20px] xs:text-left sm:w-full sm:text-center sm:text-2xl sm:mt-[100px] md:mt-[0px] lg:text-[20px] lg:leading-[27px] leading-[35px] lg:pt-[320px] xl:absolute xl:text-left xl:text-[16px] xl:-top-[1270px] xl:-ml-[50px] xl:w-[55%] xl:mb-40 2xl:text-lg 2xl:-mt-[50px] 2xl:-top-[410px] 2xl:w-[45%] 2xl:text-left 2xl:text-[19px] 2k:-top-[130px] s:text-[19px] s:leading-[24px] sm:text-[19px] sm:leading-[24px] ${raleway.className}`}>
          In our DAO you can have fun, make new friends, take part in story writing, and become part of something new in the NFT space. We want to give players the opportunity to become an integral part of the world we're building and contribute to the storyline of the quest games and animated stories.
          We believe that our ecosystem will be a powerful tool for the development and integration of different projects, which will open up new opportunities for users and create new standards in the industry. Get ready for an exciting journey into the future with Pickle Adventure and the Empty Jar ecosystem!
        </p> 

      </div>
    </div>
  )
}

export default Pickle