import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';
import polo1 from '../assets/photo/polaroid1.png';
import polo2 from '../assets/photo/polaroid.png';
import polo3 from '../assets/photo/polaroid2.png';
import { raleway } from '../utils/fonts'
import Button from './utils/Button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const Prologue = () => {
  return (
    // <div className='w-full h-full bg-prologue bg-no-repeat bg-cover bg-[center_top_0px] z-20'>
    <div id="#" className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px]'>
      <div className='flex flex-col'>
        <div className='flex relative justify-center pt-[140px] lg:pt-[170px]'>
          <Image
            src={logo}
            alt="prolog"
            height={350}
          />
        </div>

        {/* MD */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('right', 'tween', 0.3, 0.5)}
          className='hidden lg:hidden md:flex top-40 -left-40 absolute'
        >
          <Image
            src={polo1}
            alt="prolog"
            height={650}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.4, 0.5)}
          className='hidden lg:hidden md:flex absolute right-0 top-40'
        >
          <Image
            src={polo2}
            alt="prolog"
            height={400}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.5, 0.5)}
          className='hidden lg:hidden md:flex absolute right-0 top-[880px]'
        >
          <Image
            src={polo3}
            alt="prolog"
            height={550}
          />
        </motion.div>

        {/* LG */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('right', 'tween', 0.3, 0.5)}
          className='hidden 2xl:hidden lg:flex top-40 absolute'
        >
          <Image
            src={polo1}
            alt="prolog"
            height={650}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.4, 0.5)}
          className='hidden 2xl:hidden lg:flex absolute right-0 top-40'
        >
          <Image
            src={polo2}
            alt="prolog"
            height={600}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.5, 0.5)}
          className='hidden 2xl:hidden lg:flex absolute right-0 top-[720px]'
        >
          <Image
            src={polo3}
            alt="prolog"
            height={600}
          />
        </motion.div>

        {/* 2xl */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('right', 'tween', 0.3, 0.5)}
          className='hidden 2xl:flex absolute'
        >
          <Image
            src={polo1}
            alt="prolog"
            height={950}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.4, 0.5)}
          className='hidden 2xl:flex absolute right-0 top-40'
        >
          <Image
            src={polo2}
            alt="prolog"
            height={600}
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.5, 0.5)}
          className='hidden 2xl:flex absolute right-0 top-[700px]'
        >
          <Image
            src={polo3}
            alt="prolog"
            height={1000}
          />
        </motion.div>

        <div className='flex flex-col items-center lg:mb-[0px] md:mb-[600px]'>
          <div className='text-white text-[64px] w-full xs:-mt-4 xs:ml-24 sm:ml-0 sm:text-center xl:-mt-6'>
            Prologue
          </div>
          <p className={`text-white font-light xs:text-left sm:text-center sm:text-lg w-[80%] md:w-70% lg:w-60% lg:text-[14px] leading-[19px] xl:text-sm 2xl:text-xl 2xl:font-light text-center z-20 ${raleway.className}`}>Something unbelievable happened: the pickles that were supposed to be food came to life and gained consciousness! Each pickle has its own unique style, which helps them blend in with people. They wear different outfits and accessories to be inconspicuous, but sometimes their style becomes so flashy that it attracts the attention of others. Nevertheless, they do not stop trying and looking for new ways to integrate into human society.
          </p>
          <p className={`text-white font-light w-[80%] xs:text-left xs:mt-10 sm:mt-0 md:w-70% lg:w-60% lg:text-[14px] leading-[19px] xl:text-sm  2xl:text-xl 2xl:font-light text-center z-20 ${raleway.className}`}>Once on planet Earth, they began their adventure, the goal of which was to survive in extreme conditions and find each other. On their way there are various obstacles and difficulties that put the pickles in mortal danger! Will our heroes be able to overcome all the difficulties and save their lives, and perhaps the entire planet? You can find out all this by reading the main comic book "Pickle Adventure: Prolouge"</p>
          <div className='relative'>
            <div className='flex z-20'>
              <Button classes={'xs:mt-6 xs:-ml-24 sm:mt-[100px] xs:my-[140px] sm:mt-[50px] lg:mb-[400px] xl:mb-[0px] lg:mt-[20px] 2xl:mt-[35px] 2xl:mb-[400px] cursor-pointer z-20 glowBtn z-50'} text={'Read more'} />
            </div>
            <div class="absolute z-10 xs:top-2 sm:-top-0 right-4 sm:-right-10 bg-blur bg-[center_top_-70px] blur-2xl rounded-full h-[30%] xs:w-[200%] sm:w-[150%]"></div>
            <div class="absolute z-10 xs:top-2 sm:-top-0 right-4 sm:-right-10 bg-blur bg-[center_top_-70px] blur-2xl rounded-full h-[30%] xs:w-[200%] sm:w-[150%]"></div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Prologue