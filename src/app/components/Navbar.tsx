'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import GrijzeBar from './GrijzeBar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = async () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* {menuOpen && ( */}
        <div
          className={` md:hidden fixed bottom-0  right-0 top-0 z-50 w-[75%] bg-[#182228] ${menuOpen ? 'menu-open ' : 'menu-close'} mobile-menu`}
        >
          <div
            className='flex justify-end pr-[35px] pt-[47px]'
            onClick={handleClick}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='#A3A7A9'
            >
              <path d='m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z' />
            </svg>
          </div>

          <div className='mb-[25px] flex flex-col pl-[46px] text-[16px] font-semibold text-white'>
            <ul className='flex flex-col gap-[25px]'>
              <li>
                <Link href={''}>Aluminium hekken</Link>
              </li>
              <li>
                <Link href={''}>Stalen hekken</Link>
              </li>
              <li>
                <Link href={''}>Constructies</Link>
              </li>
              <li>
                <Link href={''}>Machine bouw</Link>
              </li>
              <li className='text-[#A3A7A9] opacity-[0.7]'>
                <Link href={''}>Kennisbank</Link>
              </li>
              <li className='text-[#A3A7A9] opacity-[0.7]'>
                <Link href={''}>Klantenservice</Link>
              </li>
              <li className='text-[#A3A7A9] opacity-[0.7]'>
                <Link href={''}>Blog</Link>
              </li>
            </ul>
          </div>

          <div className='pl-[35px]'>
            <ul className='flex flex-col gap-3'>
              <li className='flex flex-row gap-2 text-[15px] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  viewBox='0 -960 960 960'
                  width='20'
                >
                  <path
                    d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z'
                    fill='#4CA701'
                  />
                </svg>
                <span>100% Nederlands product!</span>
              </li>
              <li className='flex flex-row gap-2 text-[15px] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  viewBox='0 -960 960 960'
                  width='20'
                >
                  <path
                    d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z'
                    fill='#4CA701'
                  />
                </svg>
                <span>Eigen fabriek</span>
              </li>
              <li className='flex flex-row gap-2 text-[15px] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  viewBox='0 -960 960 960'
                  width='20'
                >
                  <path
                    d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z'
                    fill='#4CA701'
                  />
                </svg>
                <span>Productie op maat</span>
              </li>
              <li className='flex flex-row gap-2 text-[15px] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  viewBox='0 -960 960 960'
                  width='20'
                >
                  <path
                    d='M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z'
                    fill='#4CA701'
                  />
                </svg>
                <span>korte lijnen</span>
              </li>
              <li className='flex flex-row items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='17'
                  viewBox='0 -960 960 960'
                  width='17'
                >
                  <path
                    d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                    fill='#FFC400'
                  />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='17'
                  viewBox='0 -960 960 960'
                  width='17'
                >
                  <path
                    d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                    fill='#FFC400'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='17'
                  viewBox='0 -960 960 960'
                  width='17'
                >
                  <path
                    d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                    fill='#FFC400'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='17'
                  viewBox='0 -960 960 960'
                  width='17'
                >
                  <path
                    d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                    fill='#FFC400'
                  />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='17'
                  viewBox='0 -960 960 960'
                  width='17'
                >
                  <path
                    d='m263.002-121.542 57.307-246.766L128.85-534.23l252.613-21.922L480-788.842l98.537 232.69L831.15-534.23 639.691-368.308l57.307 246.766L480-252.463 263.002-121.542Z'
                    fill='#FFC400'
                  />
                </svg>
                <span className='text-[15px] text-white opacity-[0.2]'>
                  5.0 (In Google)
                </span>
              </li>
            </ul>
          </div>
          <div className='flex h-[335px] items-end justify-end text-white'>
            <div className='flex w-full flex-col justify-center gap-[20px] px-[45px]'>
              <div className='btn w-full border-none bg-[#E98A14] '>
                Gratis offerte ontvangen
              </div>
              <div className='btn w-full border-none bg-[#FFFFFF]  bg-opacity-[0.15] '>
                Projecten
              </div>
            </div>
          </div>
        </div>
      {/* )} */}

      <GrijzeBar />
      {/* blue menu bar */}
      <div className='shadow-menu sticky top-0 z-0 hidden h-[73px] w-full  items-center justify-center bg-[#1A3055] pl-[28px] lg:flex'>
        <ul className='hidden items-center justify-center gap-7 text-[18px]/[43px] font-semibold text-white sm:flex'>
          <li>
            <Link href={''}>Aluminium hekken</Link>
          </li>
          <li>
            <Link href={''}>Stalen hekken</Link>
          </li>
          <li>
            <Link href={''}>Constructies</Link>
          </li>
          <li>
            <Link href={''}>Machine bouw</Link>
          </li>
          <li>
            <Link href={''}>Projecten</Link>
          </li>
          <li>
            <Link href={''}>Klantenservice</Link>
          </li>
          <li>
            <Link href={''}>Blog</Link>
          </li>
          <Link href={''}>
            <div className='btn rounded-[5px] border-none bg-[#E98A14] text-[18px]/[43px] font-semibold text-white hover:bg-[#E98A14] hover:opacity-90'>
              Offerte aanvragen
            </div>
          </Link>
        </ul>
      </div>

      {/* white menu bar */}
      <div className='relative z-10 flex h-[73px] w-full items-center  justify-center bg-[#FFFFFF] shadow-sm shadow-[#4E4E4E15] lg:bottom-[73px]'>
        <div className='z-10 mr-[173px] mt-[42px] hidden rounded-[5px] bg-white px-[30px] py-[16px] lg:block'>
          <Image
            src={
              'https://belas.s3.eu-north-1.amazonaws.com/belas-new/belas_logo.webp'
            }
            width={111}
            height={83}
            alt='belas VOF logo'
            className='rounded-[5px]'
          />
        </div>
        <ul className='hidden items-center justify-center gap-7 text-[18px]/[43px] font-semibold md:flex'>
          <li>
            <Link href={''}>Aluminium hekken</Link>
          </li>
          <li>
            <Link href={''}>Stalen hekken</Link>
          </li>
          <li>
            <Link href={''}>Constructies</Link>
          </li>
          <li>
            <Link href={''}>Machine bouw</Link>
          </li>
          <Link href={''}>
            <div className='btn rounded-[5px] bg-[#E98A14] text-[18px]/[43px] font-semibold text-white hover:bg-[#E98A14] hover:opacity-90'>
              Offerte aanvragen
            </div>
          </Link>
        </ul>

        <MobileMenu handleClick={handleClick} />
      </div>
    </>
  );
};

export default Navbar;
