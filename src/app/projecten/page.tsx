import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import BelOns from '../components/BelComponent';
import CardsProjecten from '../components/CardsProjecten';

const page = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
      <Navbar />

      <div className='flex justify-center'>
        <div className=' max-w-[1200px]'>
          <div className='mb-[300px] mt-[205px] flex justify-center sm:top-[1640px] sm:px-[35px]'>
            <div className='flex w-[1200px] flex-col items-center justify-center  xl:items-start'>
              <div className='flex w-full flex-row items-center justify-center xl:justify-between '>
                <div className='flex flex-col items-center justify-center xl:items-start'>
                  <span className=' text-[69px] font-black uppercase tracking-normal text-[#1C355D] opacity-[0.07] sm:text-[69px] '>
                    Projecten
                  </span>
                  <h2 className='text-[45px] font-semibold tracking-normal text-[#1C355D] sm:text-[45px]'>
                    Eerder leverde wij...
                  </h2>
                </div>
                <div className='relative bottom-[-25px] flex flex-row'>
                  <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='100px'
                    height='180px'
                    viewBox='0 0 200.000000 200.000000'
                    preserveAspectRatio='xMidYMid meet'
                    className=' relative right-[-80px] top-[-7px] hidden xl:block'
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
                    className=' relative right-[-22px] top-[-7px] hidden xl:block'
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

              <div className='flex w-full justify-center px-[35px] py-[27px] text-center md:px-0 max-w-[360px] xl:text-left'>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut
                </p>
              </div>

              <CardsProjecten />
            </div>
          </div>
        </div>
      </div>

      <BelOns />
      <BlauweBalk />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
};

export default page;
