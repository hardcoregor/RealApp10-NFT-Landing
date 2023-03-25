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
            <p className={`lg:hidden xl:flex font-thin lg:-mt-[50px] lg:w-[50%] xl:absolute xl:-top-[750px] xl:w-[35%] 2xl:static 2xl:text-lg 2xl:w-[130%] 2xl:pt-14 ${raleway.className}`}>The Pickles in our project have a unique comic style that emphasizes their bright personality. They are made with author's handwriting and bright colors, which allows them to stand out among other characters in our universe.</p>

            <p className={`lg:hidden xl:flex font-thin ${raleway.className} mt-6 hidden xs:flex sm:hidden lg:flex lg:w-[50%] xl:w-[35%] xl:absolute xl:-top-[705px] 2xl:static 2xl:text-lg 2xl:w-[130%]`}>A talented artist Dnezdy works on the design of the pickles, and his creative approach allows each pickle to have its own unique style and character. This makes our cucumbers not only recognizable, but also as expressive as possible. We are sure that the unique style of the pickles will emphasize their individuality and help us create a truly memorable and high-quality product.</p>

            {/* LG */}
            <p className={`font-thin lg:absolute lg:-top-[140px] lg:w-[90%] lg:text-xl lg:ml-16 lg:flex xl:hidden hidden  ${raleway.className}`}>The Pickles in our project have a unique comic style that emphasizes their bright personality. They are made with author's handwriting and bright colors, which allows them to stand out among other characters in our universe.</p>

            <p className={`font-thin lg:absolute lg:w-[90%] lg:-top-[40px] lg:text-xl lg:ml-16 lg:flex xl:hidden hidden  ${raleway.className}`}>A talented artist Dnezdy works on the design of the pickles, and his creative approach allows each pickle to have its own unique style and character. This makes our cucumbers not only recognizable, but also as expressive as possible. We are sure that the unique style of the pickles will emphasize their individuality and help us create a truly memorable and high-quality product.</p>
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
        <div className='hidden lg:flex lg:absolute lg:w-full lg:justify-center lg:-mt-[300px] xl:hidden 2xl:hidden'>
          <Image
            src={cards}
            alt="cards"
            height={750}
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