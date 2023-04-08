import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { raleway } from '../utils/fonts';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  return (
    <div className='w-full h-full'>
      <Slider {...settings}>
        <div className={`justify-center items-center text-white bg-block1 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px]`}>
          <div className='flex flex-col mt-[190px] items-center'>
            <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Narrative</h1>
            <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Storytelling through the creation of interactive games, comics with a compelling storyline and animated series.  </p>
          </div>
        </div>
        <div className={`justify-center items-center text-white bg-block2 bg-no-repeat bg-cover bg-[center_top_-10px] xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px]`}>
          <div className='flex flex-col mt-[190px] items-center'>
            <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Innovation</h1>
            <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Innovation, where the project's community influences the story and the development of the universe.</p>
          </div>
        </div>
        <div className={`justify-center items-center text-white bg-block3 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px] xl:mt-0`}>
          <div className='flex flex-col mt-[190px] items-center'>
            <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Style</h1>
            <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>The unique style of the project and the constant development of the ecosystem.</p>
          </div>
        </div>
        <div className={`justify-center items-center text-white bg-block4 bg-no-repeat bg-cover bg-[center_top_-10px] sm:mt-10 xs:w-[100%] s:w-[90%] sm:h-1/2 sm:w-[47%] lg:h-[620px] lg:w-[47%] xl:h-[80%] xl:w-[34%] 2xl:h-[425px] 2xl:w-[360px] xl:mt-0`}>
          <div className='flex flex-col mt-[190px] items-center'>
            <h1 className='text-3xl sm:-mt-10 s:mt-20 md:mt-4 lg:mt-[120px] xl:text-4xl xl:mt-[120px] lg:text-5xl 2xl:mt-[8px] glowBtn select-none'>Integrations</h1>
            <p className={`xs:mb-14 sm:my-[20px] sm:pb-7 md:pb-20 lg:text-xl lg:w-[80%] lg:my-[20px] xl:w-full xl:text-sm font-thin text-[15px] leading-[17px] text-center px-10 ${raleway.className} select-none`}>Integration of AI to scale the universe.</p>
          </div>
        </div>
      </Slider>
    </div>

  );
};

export default Carousel;
