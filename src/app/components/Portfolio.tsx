import React from 'react';
import CarouselPortfolio from './CarouselPortfolio';

const Portfolio = () => {
  return (
    <>
      <div className='rounded-[5px] bg-[#193155] px-[35px] py-[80px] md:ml-[360px] md:px-[143px]'>
        <div className='flex justify-center md:justify-start'>
          <h2 className=' text-[51px] font-black uppercase tracking-tight text-white opacity-[0.07]'>
            Portfolio
          </h2>
        </div>
        <div className='mb-[40px] flex justify-center md:justify-start'>
          <h3 className='text-[30px] font-semibold tracking-tight text-white'>
            Eerder leverde wij...
          </h3>
        </div>

        <div className='mb-[40px]'>
          <p className='flex text-center text-[15px] text-white'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut
          </p>
        </div>
        <CarouselPortfolio />
      </div>
    </>
  );
};

export default Portfolio;
