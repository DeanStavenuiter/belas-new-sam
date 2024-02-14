import Image from 'next/image';
import React from 'react';

const BlauweBalk = () => {
  return (
    <>
      <div className=' relative z-30 h-[232px] bg-[#1A3055] px-[35px] pt-[63px] sm:w-[65%] sm:rounded-br-[5px] sm:rounded-tr-[5px] md:px-[180px] xl:px-[360px]'>
        <div className='flex flex-row gap-[30px]'>
          <div className='min-w-[212px] text-white'>
            <h3 className='text-[34px]/[34px] font-semibold tracking-tight'>
              Bakkie doen?
            </h3>
            <h4 className='text-[20px] font-medium tracking-tight'>
              Kom gerust bij ons langs
            </h4>
            <div className='w-[109px] border-b'>
              <span className='text-[10px]/[30px] font-light'>
                Een afspraak maken
                <span className='ml-4'>&gt;</span>
              </span>
            </div>
          </div>
          {/* avatar mobile*/}
          <div className='container sm:hidden'>
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
      <div className='image-container hidden sm:left-[30%] sm:inline-block md:left-[40%] lg:left-[48%] '>
        <Image
          src='/man_met_koffie.webp'
          width={462}
          height={500}
          alt='Man met koffie'
          className=''
        ></Image>
      </div>
    </>
  );
};

export default BlauweBalk;
