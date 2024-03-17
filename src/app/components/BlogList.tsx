import Link from 'next/link';
import React from 'react';

const BlogList = () => {
  return (
    <div className=' z-[7] fixed right-[330px] top-[373px] h-[281px] w-[327px] rounded-[10px] border bg-white pb-[30px] pl-[30px] pr-[52px] pt-[36px] shadow-[0px_3px_15px_#34343419]'>
      <div className='mb-[13px] flex flex-row items-center gap-[31px] text-[16px]/[19px] font-semibold tracking-tight text-[#1C355C]'>
        <div className='h-[11px] w-[11px] rounded-full bg-[#E98A14]'></div>
        <Link href={''}>
          <h3>Hier komt de titel van de blog</h3>
        </Link>
      </div>

      <ul className='flex flex-col gap-[13px] pl-[2px] text-[15px]/[20px] tracking-tight text-[#1C355C]'>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-[33px]'>
          <div className='h-[7px] w-[7px] rounded-full bg-[#E4E4E4]'></div>
          <Link href={''}>
            <li>Lorem ipsum dolor sit amet</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default BlogList;
