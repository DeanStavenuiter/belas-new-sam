import React from 'react';
import CarouselReview from './CarouselReview';

const Reviews = () => {
  return (
    <>
      <div className='mb-[213px] '>
        <div className='flex justify-center lg:justify-start'>
          <span className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07] sm:text-[69px]'>
            Reviews
          </span>
        </div>
        <div className='flex justify-center md:justify-start'>
          <h2 className='text-[30px] sm:text-[45px] font-semibold tracking-tight text-[#1C355D]'>
            Onze klanten zeggen...
          </h2>
        </div>
        <CarouselReview />
      </div>
    </>
  );
};

export default Reviews;
