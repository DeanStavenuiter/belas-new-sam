import Image from 'next/image';
import React from 'react';

const BlauweBalk = () => {
  return (
    <div className=''>
      <div className=' relative z-[5] flex h-[232px] justify-center bg-[#1A3055] px-[35px] w-full sm:px-[unset] pt-[63px] md:rounded-br-[5px] md:rounded-tr-[5px] lg:max-w-[85%]  xl:max-w-[65%] '>
        <div className='flex flex-row gap-[30px]'>
          <div className='min-w-[212px] text-white'>
            <h3 className='text-[34px]/[34px] md:text-[52px] font-semibold tracking-tight'>
              Bakkie doen?
            </h3>
            <h4 className='text-[20px] md:text-[31px] font-medium tracking-tight'>
              Kom gerust bij ons langs
            </h4>
            <div className='w-[163px] border-b'>
              <span className='text-[10px]/[30px] md:text-[16px] font-light'>
                Een afspraak maken
                <span className='ml-4'>&gt;</span>
              </span>
            </div>
          </div>
          <div className='md:flex hidden'>
            <div className='relative right-0 hidden pl-[35px] text-[#FFFFFF] md:flex'>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='70.000000pt'
                height='70.000000pt'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className='relative right-[-60px]'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#182228'
                  opacity='0.1'
                  stroke='#182228'
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
                width='70.000000pt'
                height='70.000000pt'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className='relative right-[-5px]'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#182228'
                  opacity='0.1'
                  stroke='#182228'
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
                width='70.000000pt'
                height='70.000000pt'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className='relative right-[50px]'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#182228'
                  opacity='0.1'
                  stroke='#182228'
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

          {/* avatar mobile*/}
          <div className='container md:hidden'>
            <div className='box'>
              <div className='circle'>
                <Image
                  src='/man_met_koffie.webp'
                  width={450}
                  height={450}
                  alt='Man met koffie'
                  className='image'
                />
              </div>
              <Image
                src='/man_met_koffie.webp'
                width={1000}
                height={141}
                alt='Man met koffie'
                className='image'
              />
            </div>
          </div>
        </div>
      </div>

      {/* avatar desktop */}
      <div className='image-container hidden sm:left-[30%] md:inline-block md:left-[40%] lg:left-[48%] z-[5]'>
        <Image
          src='/man_met_koffie.webp'
          width={462}
          height={500}
          alt='Man met koffie'
          className=''
        ></Image>
      </div>
    </div>
  );
};

export default BlauweBalk;
