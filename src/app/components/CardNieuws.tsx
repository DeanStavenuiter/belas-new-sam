import Image from 'next/image';
import React from 'react';

interface CardNieuwsProps {
  imgSrc: string;
  title: string;
  imgBgClass: string;
}

const CardNieuws = ({ imgSrc, title, imgBgClass }: CardNieuwsProps) => {
  return (
    <div className=''>
      <div
        className={`flex h-[250px]  w-[314px] flex-col ${imgBgClass} mb-[29px] rounded-[5px]`}
      ></div>

      <div>
        <span className='text-[22px] font-semibold tracking-tight text-[#1C355D]'>
          {title}
        </span>
      </div>
    </div>
  );
};

export default CardNieuws;
