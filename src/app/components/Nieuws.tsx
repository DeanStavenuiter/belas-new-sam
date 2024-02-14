import React from 'react';
import CarouselNieuws from './CarouselNieuws';

const Nieuws = () => {
  return (
    <>
      <div className='mt-[80px] md:px-[180px] xl:px-[360px]'>
        <div className='flex justify-center md:justify-start'>
          <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
            Nieuws
          </h2>
        </div>
        <div className='mb-[27px] flex justify-center md:justify-start'>
          <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
            Blijft u op de hoogte?
          </h3>
        </div>
        <div className='mb-[40px] px-[35px] md:max-w-[360px] md:px-0'>
          <p className='flex text-center text-[15px] text-[#1C355D] md:text-left'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>

        <div className='mb-[80px]'>
          <CarouselNieuws />
        </div>
      </div>
    </>
  );
};

export default Nieuws;
