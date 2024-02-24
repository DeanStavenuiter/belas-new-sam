import React from 'react';
import CarouselNieuws from './CarouselNieuws';

const Nieuws = () => {
  return (
    <div className='mt-[80px] w-[1200px] sm:px-[35px]'>
      <div className='flex flex-row items-center justify-center md:justify-between md:items-start '>
        <div className=' text-center md:text-left'>
        <span className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07] sm:text-[69px]'>
          Nieuws
        </span>
        <h2 className='text-[30px] font-semibold tracking-tight text-[#1C355D] sm:text-[45px]'>
          Blijft u op de hoogte?
        </h2>
        </div>
        <div className='relative bottom-[-42px] flex flex-row'>
        <svg
          version='1.0'
          xmlns='http://www.w3.org/2000/svg'
          width='100px'
          height='180px'
          viewBox='0 0 200.000000 200.000000'
          preserveAspectRatio='xMidYMid meet'
          className=' relative right-[-80px] top-[-7px] hidden md:block'
        >
          <g
            transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
            fill='#2B518D'
            opacity='0.05'
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
          width='100px'
          height='180px'
          viewBox='0 0 200.000000 200.000000'
          preserveAspectRatio='xMidYMid meet'
          className=' relative right-[-22px] top-[-7px] hidden md:block'
        >
          <g
            transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
            fill='#2B518D'
            opacity='0.05'
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
     
      <div className='mb-[40px] px-[35px] md:max-w-[360px] md:px-0'>
        <p className='flex text-center text-[15px] text-[#1C355D] md:text-left'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut
        </p>
      </div>

      <div className='mb-[80px] flex justify-center md:justify-start'>
        <CarouselNieuws />
      </div>
    </div>
  );
};

export default Nieuws;
