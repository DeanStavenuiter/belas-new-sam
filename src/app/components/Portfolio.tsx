import React from 'react';
import CarouselPortfolio from './CarouselPortfolio';

const Portfolio = () => {
  return (
    <div className='relative rounded-bl-[5px] w-full rounded-tl-[5px] bg-[#193155] py-[80px] sm:right-0 md:w-[81%] md:pl-[143px]'>
      <div className='flex max-w-[1200px] items-center justify-center md:justify-start '>
        <span className='text-[51px] font-black uppercase tracking-tight text-white opacity-[0.07] sm:text-[69px]'>
          Portfolio
        </span>
        <div className='relative right-[-17px] flex-row hidden lg:flex'>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='80px'
            height='120px'
            viewBox='0 0 200.000000 200.000000'
            preserveAspectRatio='xMidYMid meet'
            className=' relative right-[-51px] '
          >
            <g
              transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
              fill='#FFFFFF'
              opacity='0.03'
              stroke='none'
            >
              <path
                d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
              />
            </g>
          </svg>
          <svg
            version='1.0'
            xmlns='http://www.w3.org/2000/svg'
            width='80px'
            height='120px'
            viewBox='0 0 200.000000 200.000000'
            preserveAspectRatio='xMidYMid meet'
            className=' relative '
          >
            <g
              transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
              fill='#FFFFFF'
              opacity='0.03'
              stroke='none'
            >
              <path
                d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
              />
            </g>
          </svg>
        </div>
      </div>
      <div className='mb-[40px] flex justify-center md:justify-start'>
        <h2 className='text-[30px] font-semibold tracking-tight text-white sm:text-[45px]'>
          Eerder leverde wij...
        </h2>
      </div>

      <div className='mb-[40px] flex justify-center md:justify-normal'>
        <p className=' max-w-[360px] text-center text-[15px] text-white md:text-left'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </p>
      </div>
      <CarouselPortfolio />
    </div>
  );
};

export default Portfolio;
