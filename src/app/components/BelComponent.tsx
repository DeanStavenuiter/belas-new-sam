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
      <div className='fixed bottom-[5px] right-[13px] z-0 max-w-[200px] sm:right-0 sm:z-20 md:right-[180px] lg:right-[330px]'>
        <div className='flex flex-col gap-[10px]'>
          {!close && (
            <div className='mr-[35px] flex flex-row items-end justify-end gap-[10px]'>
              <div
                className='shadow-circle btn-circle flex  h-[30px] w-[30px] items-center justify-center bg-white'
                onClick={handleClose}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  viewBox='0 -960 960 960'
                  width='20'
                >
                  <path d='m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z' />
                </svg>
              </div>

              <div className='flex flex-col'>
                <div className='bg-man-phone h-[155px]'></div>
                <div className='shadow-circle btn h-[30px] min-h-0 w-[125px] rounded-[100px] border-none bg-white hover:bg-white '>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                >
                  <g transform='translate(-545.721)'>
                    <path
                      d='M25,0A25,25,0,1,1,0,25,25,25,0,0,1,25,0Z'
                      transform='translate(545.721)'
                      className='circle'
                      fill='#E98A15'
                      opacity='0.35'
                    ></path>
                    <path
                      d='M15.072,16.6h-.087c-10-.575-11.418-9.011-11.616-11.586a1.526,1.526,0,0,1,1.4-1.644h2.8a1.017,1.017,0,0,1,.947.641l.772,1.9a1.017,1.017,0,0,1-.224,1.1L7.989,8.112a4.767,4.767,0,0,0,3.856,3.867l1.1-1.094a1.017,1.017,0,0,1,1.1-.209l1.918.768a1.017,1.017,0,0,1,.626.946v2.686A1.526,1.526,0,0,1,15.072,16.6ZM4.9,4.392a.506.506,0,0,0-.509.509v.04c.234,3.012,1.735,10.136,10.655,10.646a.509.509,0,0,0,.54-.478V12.391l-1.918-.768-1.46,1.45-.244-.031C7.532,12.485,6.931,8.06,6.931,8.014L6.9,7.77,8.343,6.31,7.584,4.392Z'
                      transform='translate(560.739 15.349)'
                      fill='#ffffff'
                      stroke='#ffffff'
                      strokeWidth='0.1'
                    ></path>
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* blauwe balk */}
      <div className='fixed bottom-0 flex h-[67px] w-full justify-center gap-[10px] bg-[#1A3055] px-[35px] py-[11px] sm:hidden'>
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
