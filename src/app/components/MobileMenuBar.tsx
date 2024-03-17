'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface menuProps {
  handleClick: () => void;
}

const MobileMenu = ({ handleClick }: menuProps) => {
  return (
    <div className='flex justify-center padding-content w-full lg:hidden'>
        <ul className='flex flex-row items-center gap-[10px] '>
          <li>
            <Link href={'/'}>
              <div className='btn w-[169px] rounded-[5px] border-none bg-[#E4E4E4]'>
                <Image
                  src={
                    'https://belas.s3.eu-north-1.amazonaws.com/belas-new/belas_logo.webp'
                  }
                  width={45}
                  height={169}
                  alt='belas VOF logo'
                  className='rounded-[5px] '
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href={'/offerte'}>
              <div className='btn w-[126px] rounded-[5px] bg-[#E98A14] text-[18px]/[43px] font-semibold text-white hover:bg-[#E98A14] hover:opacity-90'>
                Offerte
              </div>
            </Link>
          </li>
          <li>
            <div
              className='btn flex h-[45px] w-[45px] flex-col content-center items-end rounded-[5px] border-none bg-[#1A3055] hover:bg-[#1A3055]'
              onClick={handleClick}
            >
              <span className='w-[20px] border border-solid border-[#E4E4E4]'></span>
              <span className='w-[11px] border border-solid border-[#E4E4E4]'></span>
            </div>
          </li>
        </ul>
    </div>
  );
};

export default MobileMenu;
