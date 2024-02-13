import Image from 'next/image';
import React from 'react';

interface CardReviewProps {
  header: string;
  name: string;
  text: string;
}

const CardReview = ({ header, name, text }: CardReviewProps) => {
  return (
    <div className='shadow-review my-[40px] rounded-[5px]'>
      <div className=' flex h-[335px] w-[360px] flex-col pl-[51px] pt-[48px] '>
        <h5 className='mb-[50px] pr-[33px] text-[22px] font-semibold tracking-tight text-[#6187C3]'>
          {header}
        </h5>

        <p className='mb-[38px] max-w-[258px] text-left text-[15px] font-normal tracking-tight text-[#182228]'>
          {text}
        </p>

        <div className='flex flex-row items-center gap-2'>
          <span className='h-0 w-[11px] border-[0.5px] border-solid border-[#1C355C]'></span>
          <span className='text-[18px] font-semibold tracking-tight text-[#1C355D]'>
            {name}
          </span>
        </div>

        <div className='flex justify-end pr-[20px]'>
          <div className='btn-circle flex h-[33px] w-[33px] items-center justify-center bg-[#F7F7F7]'>
            <Image src={'/google.png'} width={18} height={18} alt='google' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
