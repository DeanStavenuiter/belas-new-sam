'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const BelOns = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(!close);
  };

  return (
    <>
      <div className='fixed bottom-[67px] z-10 right-[13px] sm:right-0 max-w-[200px] md:right-[180px] lg:right-[330px]'>
        <div className='flex flex-col gap-[10px]'>
          {!close && (
            <div className='mr-[35px] flex flex-row items-end justify-end gap-[10px]'>
              <div
                className='shadow-circle btn-circle flex  h-[30px] w-[30px] items-center justify-center bg-white'
                onClick={handleClose}
              >
                <Image src='close.svg' width={20} height={20} alt='close' />
              </div>

              <div className='flex flex-col'>
                <div className='bg-man-phone h-[155px]'></div>
                <div className='shadow-circle btn h-[30px] min-h-0 w-[125px] rounded-[100px] border-none bg-white '>
                  <span className='text-[12px] font-normal tracking-tight'>
                    Meer informatie?
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className='mb-[21px] mr-[35px] flex justify-end'>
            <Link href='tel:+31206596778'>
              <div className='shadow-circle-phone btn-circle flex  h-[30px] w-[30px] items-center justify-center bg-[#E98A15]'>
                <Image src='phone.svg' width={30} height={30} alt='close' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* blauwe balk */}
      <div className='flex h-[67px] gap-[10px] fixed bottom-0 bg-[#1A3055] px-[35px] py-[11px] sm:hidden'>
        <div className='btn w-[175px] border-none bg-[#4CA701] font-semibold text-white hover:bg-[#4CA701]'>
          Gratis offerte
        </div>
        <div className='btn w-[175px] border-none bg-[#FFFFFF] bg-opacity-[0.16] font-semibold text-white hover:bg-[#FFFFFF] hover:bg-opacity-[0.16]'>
          Projecten
        </div>
      </div>
    </>
  );
};

export default BelOns;
