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
        <div className='flex relative justify-center pt-[170px]'>
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.5, 0.5)}
          className='hidden 2xl:hidden lg:flex absolute right-0 top-[670px]'
        >
          <Image
            src={polo3}
            alt="prolog"
            height={850}
          />
        </motion.div>

        {/* 2xl */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
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
          viewport={{ once: false, amount: 0.25 }}
          variants={fadeIn('left', 'tween', 0.5, 0.5)}
          className='hidden 2xl:flex absolute right-0 top-[600px]'
        >
          <Image
            src={polo3}
            alt="prolog"
            height={1000}
          />
        </motion.div>

        <div className='flex flex-col items-center lg:mb-[650px] md:mb-[600px]'>
          <div className='text-white text-[64px]'>
            Prologue
          </div>
          <p className={`text-white sm:text-lg w-[80%] md:w-70% lg:w-60% text-[14px] leading-[19px] text-center z-20 ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <p className={`text-white w-[80%] md:w-70% lg:w-60% text-[14px] leading-[19px] text-center z-20 ${raleway.className}`}>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <Button classes={'mt-[35px] cursor-pointer z-20 glowBtn'} text={'Read more'} />
        </div>
      </div>
    </div >
  )
}

export default Prologue