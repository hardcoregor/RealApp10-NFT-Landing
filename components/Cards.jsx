import Image from 'next/image'
import React from 'react'
import cards from '../assets/underMain.png'
import { raleway } from '../utils/fonts'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const Cards = () => {
  return (
    // <div className='w-full h-full bg-cards bg-no-repeat bg-cover bg-[center_top_0px]'>
    <div className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px] xs:px-4 xs:mb-[300px] s:mt-40 s:mb-[200px] sm:mb-0 sm:px-10 md:pt-[200px] lg:px-0 lg:relative lg:mb-[300px] xl:pt-[10px] xl:relative'>
      <div className='flex flex-col lg:flex-row lg:mt-[245px] xl:pt-[270px] 2xl:pt-[0px]'>
        <div className='w-full 2xl:w-[40%] '>
          <div className='flex flex-col text-white mt-[50px] i14:mt-[170px] sm:mt-[100px] md:mt-0 lg:mt-0 lg:my-14 xl:ml-[80px] 2xl:ml-[230px] text-center lg:text-left'>
            <h1 className='text-7xl sm:mt-10 lg:absolute lg:-top-[350px] lg:offset-0 lg:w-full lg:text-center xl:text-left xl:-top-[1000px] 2xl:flex 2xl:absolute 2xl:pt-[0px] 2xl:w-[200%] 2xl:top-20'>A Collection Driven</h1>
            <h2 className={`mt-[22px] mb-[34px] font-semibold lg:absolute lg:w-full lg:text-center lg:-top-[250px] xl:text-left xl:w-[38%] xl:-top-[910px] 2xl:text-xl 2xl:static 2xl:w-full 2xl:-mt-[50px] ${raleway.className}`}>Theory of Heinrich Altshuler — always start planning with the ideal end result</h2>
            <p className={`lg:hidden xl:flex font-thin lg:-mt-[50px] lg:w-[50%] xl:absolute xl:-top-[750px] xl:w-[35%] 2xl:static 2xl:text-lg 2xl:w-[130%] 2xl:pt-14 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p className={`lg:hidden xl:flex font-thin ${raleway.className} mt-6 hidden xs:flex sm:hidden lg:flex lg:w-[50%] xl:w-[35%] xl:absolute xl:-top-[505px] 2xl:static 2xl:text-lg 2xl:w-[130%]`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

            {/* LG */}
            <p className={`font-thin lg:absolute lg:w-[40%] lg:-top-[120px] lg:ml-16 lg:flex xl:hidden hidden  ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <p className={`font-thin lg:absolute lg:w-[40%] lg:top-[250px] lg:ml-16 lg:flex xl:hidden hidden  ${raleway.className}`}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            {/* LG */}

          </div>
        </div>

        {/* S */}
        <div className='s:mb-[0px] s:mt-[10px] s:w-full s:-left-[0px] hidden s:flex sm:hidden '>
          <Image
            src={cards}
            alt="cards"
            width={700}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* SM */}
        <div className='sm:mb-[300px] sm:mt-[50px] sm:w-full sm:-left-[0px] hidden sm:flex md:hidden '>
          <Image
            src={cards}
            alt="cards"
            width={1000}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* MD */}
        <div className='md:mb-[300px] md:mt-[50px] md:w-full md:-left-[0px] hidden md:flex lg:hidden '>
          <Image
            src={cards}
            alt="cards"
            width={1000}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* LG */}
        <div className='hidden lg:flex lg:-mt-[700px] xl:hidden 2xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={1050}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* XL */}
        <div className='hidden xl:flex xl:absolute xl:-top-[970px] xl:right-0 2xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={700}
            style={{ objectFit: "contain" }}
            className=""
          />
        </div>

        {/* 2xl */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.4, 0.5)}
          className='hidden 2xl:flex 2xl:absolute xl:hidden 2xl:top-20 2xl:right-8'>
          <Image
            src={cards}
            alt="cards"
            height={800}
            style={{ objectFit: "contain" }}
            className=""
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Cards