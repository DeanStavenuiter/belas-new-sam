import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardNieuwsProps {
  imgSrc: string;
  title: string;
  imgBgClass: string;
  href: string;
  extendedClass?: string;
}

const CardNieuws = ({ imgSrc, title, imgBgClass, href, extendedClass  }: CardNieuwsProps) => {
  return (
    <Link href={`/blog/${href}`} className='text-underline-orange'>
      <div className=''>
        <div
          className={`flex h-[250px] w-[314px] flex-col md:h-[379px] md:w-[477px] ${imgBgClass} mb-[29px] rounded-[5px] ${extendedClass}`}
        ></div>

        <div className='flex flex-row pb-[3px]'>
          <div className='hover-effect flex  flex-row pb-[3px] text-[22px]/[] font-semibold tracking-tight text-[#1C355D] '>
            <div>{title}</div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 -960 960 960'
                width='24'
                className='h-[36.5px]'
              >
                <path d='m517.847-480-184-184L376-706.153 602.153-480 376-253.847 333.847-296l184-184Z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNieuws;
