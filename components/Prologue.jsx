import Image from 'next/image';
import React from 'react'
import logo from '../assets/logo.png';
import { raleway } from '../utils/fonts'
import Button from './utils/Button';

const Prologue = () => {
  return (
    // <div className='w-full h-full bg-prologue bg-no-repeat bg-cover bg-[center_top_0px] z-20'>
    <div id="#" className='w-full h-full bg-no-repeat bg-cover bg-[center_top_0px]'>
      <div className='flex flex-col'>
        <div className='flex justify-center pt-[260px]'>
          <Image
            src={logo}
            alt="prolog"
            height={550}
          />
        </div>
        <div className='flex flex-col items-center mb-[1100px]'>
          <div className='text-white text-[64px]'>
            Prologue
          </div>
          <p className={`text-white w-60% text-[14px] leading-[19px] text-center ${raleway.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <p className={`text-white w-60% text-[14px] leading-[19px] text-center ${raleway.className}`}>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
          <Button classes={'mt-[35px]'} text={'Read more'} />
        </div>
      </div>
    </div>
  )
}

export default Prologue