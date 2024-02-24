import Link from 'next/link';
import React from 'react';

const FooterDesktop = () => {
  return (
    <div className='bg-[#182228] hidden z-0  md:flex justify-center relative bottom-[1270px] px-[35px] height-footer'>
      <div className=''>
        <div className='flex w-full flex-row items-start justify-between px-[35px] md:mt-[97px] md:px-0'>
          {/* <div className='flex w-full justify-between'> */}
          <div>
            <h2 className=' text-[129px] font-black uppercase tracking-tight text-[#FFFFFF] opacity-[0.03] '>
              Belas VOF
            </h2>
          </div>

          <div className='relative right-0 lg:flex pl-[35px] text-[#FFFFFF] md:mt-[50px] hidden '>
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width='90.000000pt'
              height='90.000000pt'
              viewBox='0 0 200.000000 200.000000'
              preserveAspectRatio='xMidYMid meet'
              className='absolute right-[50px]'
            >
              <g
                transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                fill='#FFFFFF'
                opacity='0.03'
                stroke='#FFFFFF'
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
              width='90.000000pt'
              height='90.000000pt'
              viewBox='0 0 200.000000 200.000000'
              preserveAspectRatio='xMidYMid meet'
            >
              <g
                transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                fill='#FFFFFF'
                opacity='0.03'
                stroke='#FFFFFF'
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

        <div className='relative top-[-80px] flex  flex-col'>
          <div className='flex w-full flex-row justify-between gap-[50px] lg:gap-[100px] border-b-[1px] border-white border-opacity-20 pb-[135px]'>
            <div>
              <div className='relative mb-[45px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
                <h4>Belas VOF</h4>
              </div>

              <div className='max-w-[317px]'>
                <p className='text-[15px]/[35px] font-normal tracking-tight text-white'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
              </div>
            </div>
            <div>
              <div className='relative mb-[45px] flex justify-start text-[31px] font-semibold tracking-tight text-white'>
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
            </div>
            <div className='mb-[45px] flex flex-col justify-start text-[31px] font-semibold tracking-tight text-white'>
              <div className='mb-[45px]'>
                <h4>Kom langs!</h4>
              </div>
              <div className='flex flex-row gap-[80px] text-[15px]/[25px] font-normal tracking-tight text-white '>
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
            </div>
          </div>
          <div className='flex flex-row justify-center py-[35px] text-[15px]/[25px] font-normal tracking-tight text-white'>
            <span>© 2024 | Website ontwikkeld door SAM Online</span>
            <span>Marketing & Webdesign.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDesktop;
