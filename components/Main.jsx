import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';
import { raleway } from '../utils/fonts'
import Button from './utils/Button';

const Main = () => {
  return (
    // <div className='w-full absolute top-[1130px] bg-main bg-no-repeat bg-cover bg-[center_top_0px] pb-[190px] -z-10'>
    <div className='w-full bg-no-repeat bg-cover sm:px-10 sm:mb-[250px] bg-[center_top_0px] lg:-mt-[250px] lg:pb-[440px] xl:-mt-[305px] 2xl:-mt-10 2xl:pb-[190px] z-10'>
      <div className='flex flex-col items-center lg:items-start xl:ml-[80px] 2xl:ml-[12%]'>
        <h1 className='text-white text-7xl sm:mt-[300px] lg:text-6xl w-full text-center lg:text-left xl:w-[30%] 2xl:w-[23%]'>The Background</h1>
        <h2 className={`text-white text-lg font-semibold ${raleway.className} mt-[22px] mb-[34px] w-full text-center lg:text-left xl:w-[30%] 2xl:w-[23%]`}>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
        <p className={`text-white w-full font-thin px-14 sm:p-0 lg:px-0 lg:w-[47%] text-xl text-center lg:text-left lg:text-[17px] leading-[24px] ${raleway.className}`}>"The Pickle Adventure team works every day to achieve the highest quality and usefulness of the product in the ecosystem, behind the scenes of Pickle Adventure we try to make a Bluechip project with a long-term perspective.
          We create a great universe and ecosystem to develop for years to come, doing our best to improve the mass adopting and partnerships between major projects. At Pickle Adventure we also try to create a unique brand and story that can capture your imagination and leave a vivid impression.</p>
        <p className={`text-white w-full font-thin px-14 sm:p-0 lg:px-0 lg:w-[47%] mt-[20px] text-xl text-center lg:text-left lg:text-[17px] leading-[24px] ${raleway.className}`}>
          We provide interactive P2E quests to help develop the story of our universe, as well as other mechanics that we'll talk about later in our white paper. We are convinced that our work will not only be fun, but also rewarding, and we look forward to having you in our family."
        </p>

        <Button text={"Learn More"} classes={"-ml-[25px] mt-[25px] glowBtn"} />
      </div>
    </div>
  )
}

export default Main