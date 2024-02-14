import React from 'react';
import CarouselReview from './CarouselReview';

const Reviews = () => {
  return (
    <>
      <div className='mb-[213px] mt-[80px] md:px-[180px] xl:px-[360px]'>
        <div className='flex justify-center md:justify-start'>
          <h2 className=' text-[51px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
            Reviews
          </h2>
        </div>
        <div className='flex justify-center md:justify-start'>
          <h3 className='text-[30px] font-semibold tracking-tight text-[#1C355D]'>
            Onze klanten zeggen...
          </h3>
        </div>
        <CarouselReview />
      </div>
    </>
  );
};

export default Reviews;
