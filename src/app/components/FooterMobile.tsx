import Link from 'next/link';
import React from 'react';

export const FooterMobile = () => {
  return (
    <>
      <div className='relative z-0 flex bg-[#182228] md:hidden md:px-[180px] xl:px-[360px]'>
        <div className='flex flex-col justify-center px-[35px] md:px-0 '>
          <span className='mt-[29px] text-[73px] font-black uppercase tracking-tight text-[#FFFFFF] opacity-[0.03] md:mt-[97px]'>
            Belas VOF
          </span>
          <div className='relative bottom-[50px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
            <h2>Belas VOF</h2>
          </div>

          <div className='max-w-[317px]'>
            <p className='text-[15px]/[35px] font-normal tracking-tight text-white'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
            </p>
          </div>

          <div className='mb-[45px] mt-[80px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
            <h4>Service</h4>
          </div>
          <div className='flex flex-row gap-[80px] text-[15px]/[35px] font-normal tracking-tight text-white '>
            <div className=''>
              <ul>
                <li>
                  <Link href={''}>Klantenservice</Link>
                </li>
                <li>
                  <Link href={''}>Blog</Link>
                </li>
                <li>
                  <Link href={''}>Kennisbank</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link href={''}>Voorraad</Link>
                </li>
                <li>
                  <Link href={''}>Reperatie</Link>
                </li>
                <li>
                  <Link href={''}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-[45px] mt-[80px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
            <h4>Kom langs!</h4>
          </div>
          <div className='flex flex-row gap-[80px] border-b-[1px] border-white border-opacity-20 pb-[80px] text-[15px]/[25px] font-normal tracking-tight text-white '>
            <div className=''>
              <ul>
                <li>
                  <span>Belas Badhoevedorp</span>
                </li>
                <li>
                  <span>Sloterweg 411 b</span>
                </li>
                <li>
                  <span>1171 VD Badhoevedorp</span>
                </li>
                <li>
                  <span>Nederland</span>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Tel: 020 659 67 78</li>
                <li>Mail: info@belasvof.nl</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col py-[35px] text-[15px]/[25px] font-normal tracking-tight text-white'>
            <span>© 2024 | Website ontwikkeld door SAM Online</span>
            <span>Marketing & Webdesign.</span>
          </div>
        </div>
      </div>
    </>
  );
};
