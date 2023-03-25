import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';
import { raleway } from '../utils/fonts'
import Button from './utils/Button';

const Main = () => {
  return (
    // <div className='w-full absolute top-[1130px] bg-main bg-no-repeat bg-cover bg-[center_top_0px] pb-[190px] -z-10'>
    <div className='w-full bg-no-repeat bg-cover bg-[center_top_0px] xs:px-4 sm:px-10 sm:mb-[100px] s:mt-32 md:-mt-[400px] lg:-mt-[350px] lg:pt-[200px] lg:pb-[520px] lg:px-0 xl:-mt-[305px] xl:py-[370px] 2xl:py-[85px] 2xl:-mt-10 2xl:pb-[0px] z-10'>
      <div className='flex flex-col items-center lg:items-center lg:w-full xl:ml-[80px] xl:mb-[600px] 2xl:mb-0 xl:items-start 2xl:ml-[12%] 2k:mt-[100px]'>
        <h1 className='text-white xs:text-5xl sm:text-6xl lg:text-6xl lg:mt-[150px] w-full text-center lg:text-center xl:w-[30%] xl:mt-[300px] xl:-ml-14 2xl:-ml-4 2xl:w-[23%] 2xl:mt-[100px]'>The Background</h1>
        <h2 className={`text-white text-lg font-semibold ${raleway.className} mt-[22px] mb-[34px] w-full text-center lg:text-center xl:text-left xl:w-[30%] 2xl:w-[25%]`}>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
        <p className={`text-white w-full font-thin px-14 xs:px-0 sm:p-0 text-xl text-center lg:w-full lg:px-14 lg:text-xl lg:text-left lg:text-[17px] xl:w-[90%] xl:px-0 leading-[24px] 2xl:w-[42%] ${raleway.className}`}>"The Pickle Adventure team works every day to achieve the highest quality and usefulness of the product in the ecosystem, behind the scenes of Pickle Adventure we try to make a Bluechip project with a long-term perspective.
          We create a great universe and ecosystem to develop for years to come, doing our best to improve the mass adopting and partnerships between major projects. At Pickle Adventure we also try to create a unique brand and story that can capture your imagination and leave a vivid impression.</p>
        <p className={`text-white w-full font-thin px-14 xs:px-0 sm:p-0 mt-[20px] text-xl text-center lg:w-full lg:px-14 lg:text-xl lg:text-left lg:text-[17px] xl:w-[90%] xl:px-0 leading-[24px] 2xl:w-[42%] ${raleway.className}`}>
          We provide interactive P2E quests to help develop the story of our universe, as well as other mechanics that we'll talk about later in our white paper. We are convinced that our work will not only be fun, but also rewarding, and we look forward to having you in our family."
        </p>

        <Button text={"Learn More"} classes={"xs:mb-20 mb-0 -ml-[25px] mt-[25px] glowBtn"} />
      </div>
    </div>
  )
}

export default Main