import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';
import { raleway } from '../utils/fonts'
import Button from './utils/Button';

const Main = () => {
  return (
    // <div className='w-full absolute top-[1130px] bg-main bg-no-repeat bg-cover bg-[center_top_0px] pb-[190px] -z-10'>
    <div className='w-full bg-no-repeat bg-cover bg-[center_top_0px] xs:px-10 sm:px-10 sm:mb-[100px] s:mt-32 mob:mt-[50px] i12:mt-[100px] md:-mt-[400px] lg:-mt-[350px] lg:pt-[200px] lg:pb-[520px] lg:px-0 xl:-mt-[305px] xl:py-[370px] 2xl:pt-[0px] 2xl:py-[85px] 2xl:-mt-10 2xl:pb-[0px] z-10'>
      <div className='flex flex-col items-center md:mt-[200px] lg:items-center lg:mt-[200px] lg:w-full xl:ml-[80px] xl:mb-[600px] 2xl:mb-0 xl:items-start 2xl:mt-[100px] 2xl:ml-[12%] 2k:mt-[200px]'>
        <h1 className='text-white xs:text-[54px] sm:text-6xl lg:text-6xl lg:mt-[150px] w-full text-center i11:mt-16 lg:text-center xl:w-[30%] xl:mt-[100px] xl:-ml-6 2xl:w-[23%] 2xl:mt-[100px] 2xl:-ml-14'>The Background</h1>
        <p className={`text-white w-full font-light px-14 mt-[22px] xs:px-0 xs:text-[15px] xs:text-left sm:text-center sm:p-0 text-xl text-center lg:w-full lg:px-14 lg:text-xl lg:text-left lg:text-[17px] xl:w-[90%] xl:px-0 leading-[24px] 2xl:w-[42%] ${raleway.className}`}>"The Pickle Adventure team works every day to achieve the highest quality and usefulness of the product in the ecosystem, behind the scenes of Pickle Adventure we try to make a Blue-chip project with a long-term perspective. We create a great universe and ecosystem to develop for years to come, doing our best to improve the mass adopting and partnerships between major projects. In our project, we also try to create a memorable brand and story that can capture your imagination and leave a vivid impression.</p>
        <p className={`text-white w-full font-light px-14 xs:text-[15px] xs:text-left sm:text-center xs:px-0 sm:p-0 mt-[20px] text-xl text-center lg:w-full lg:px-14 lg:text-xl lg:text-left lg:text-[17px] xl:w-[90%] xl:px-0 leading-[24px] 2xl:w-[42%] ${raleway.className}`}>
          We provide interactive P2E quests to help develop the plot of our universe, as well as other mechanics we talk about in our white paper. We are convinced that our work will not only be fun, but rewarding, and we look forward to having you in our family."
        </p>
        <div className='2xl:ml-[20px] relative'>
          <div className='flex'>
            <Button text={"Learn More"} classes={"z-50 xs:mb-20 xs:-ml-32 sm:ml-0 mb-0 2xl:-ml-[25px] mt-[25px] glowBtn"} />
          </div>
          <div class="absolute z-10 xs:top-6 sm:top-4 right-10 sm:-right-5 bg-blur bg-[center_top_-70px] blur-2xl rounded-full h-[30%] xs:w-[250%] sm:w-[150%]"></div>
          <div class="absolute z-0 xs:top-6 sm:top-4 right-10 sm:-right-5 bg-blur bg-[center_top_-70px] blur-2xl rounded-full h-[30%] xs:w-[250%] sm:w-[150%]"></div>
          <div class="absolute z-0 xs:top-6 sm:top-4 right-10 sm:-right-5 bg-blur bg-[center_top_-70px] blur-2xl rounded-full h-[30%] xs:w-[250%] sm:w-[150%]"></div>
        </div>
      </div>
    </div>
  )
}

export default Main