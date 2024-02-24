import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardNieuwsProps {
  imgSrc: string;
  title: string;
  imgBgClass: string;
  href: string;
}

const CardNieuws = ({ imgSrc, title, imgBgClass,href }: CardNieuwsProps) => {
  return (
    <Link href={''} className='text-underline-orange'>
      <div className=''>
        <div
          className={`flex h-[250px]  w-[314px] md:w-[477px] md:h-[379px] flex-col ${imgBgClass} mb-[29px] rounded-[5px]`}
        ></div>

        <div>
          <span className='text-[22px]/[] font-semibold tracking-tight text-[#1C355D] hover-effect '>
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardNieuws;
