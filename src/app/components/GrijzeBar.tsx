import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GrijzeBar = () => {
  return (
    <div className='flex justify-center bg-[#F5F5F6]  padding-content relative top-0 w-full z-20'>
      <div className='relative top-0 z-40 flex h-[55px] w-full items-center justify-center sm:bg-[#40494E] text-[#182228] sm:bg-opacity-[0.05]'>
        <ul className=' flex justify-center'>
          <li className='hidden items-center gap-[4.3px] xl:flex '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='17.75'
              viewBox='0 -960 960 960'
              width='17.77'
            >
              <path
                d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                fill='#FFC400'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='17.75'
              viewBox='0 -960 960 960'
              width='17.77'
            >
              <path
                d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                fill='#FFC400'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='17.75'
              viewBox='0 -960 960 960'
              width='17.77'
            >
              <path
                d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                fill='#FFC400'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='17.75'
              viewBox='0 -960 960 960'
              width='17.77'
            >
              <path
                d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                fill='#FFC400'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='17.75'
              viewBox='0 -960 960 960'
              width='17.77'
            >
              <path
                d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                fill='#FFC400'
              />
            </svg>
            <span className='ml-[5.64px] text-[17px] font-normal text-[#525A5E]'>
              5,0
            </span>
          </li>
          <li className='flex gap-[9.24px] pl-[27.13px] text-[15px]/[50px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            100% Nederlands product!
          </li>
          <li className='hidden gap-[9.24px] pl-[24.26px] text-[15px]/[50px] lg:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Eigen fabriek
          </li>
          <li className='hidden gap-[9.24px] pl-[24.26px] text-[15px]/[50px]  lg:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Productie op maat
          </li>
          <li className='hidden gap-[9.24px] pl-[24.26px] text-[15px]/[50px]  xl:flex'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            Korte lijnen
          </li>
          <li>
            <Link
              className='hidden pl-[44.13px] text-[15px]/[50px] lg:flex '
              href={''}
            >
              Projecten
            </Link>
          </li>
          <li>
            <Link
              className='hidden pl-[32px] text-[15px]/[50px] lg:flex'
              href={''}
            >
              Kennisbank
            </Link>
          </li>
          <li>
            <Link
              className='hidden pl-[32px] text-[15px]/[50px] lg:flex'
              href={''}
            >
              Klantenservice
            </Link>
          </li>
          <li>
            <Link
              className='hidden pl-[32px] text-[15px]/[50px] lg:flex'
              href={''}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className='absolute top-0 z-10 flex h-[55px] w-full items-center justify-center bg-[#FFFFFF]'></div> */}
    </div>
  );
};

export default GrijzeBar;
