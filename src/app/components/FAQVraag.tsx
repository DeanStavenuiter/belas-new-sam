'use client';

import { useState } from 'react';

interface FAQVraagProps {
  vraag: string;
  antwoord: string;
}

const FAQVraag = ({ vraag, antwoord }: FAQVraagProps) => {
  const [open, setOpen] = useState<Boolean>();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className='flex max-w-[403px] cursor-pointer flex-col rounded-[15px] border border-[#1C355C4D] bg-[#1A305508] p-[30px_50px_34px_45px] md:max-w-[554px]'
      onClick={handleClick}
    >
      <div className='flex w-full flex-row items-center justify-between gap-[10px] md:gap-[unset]'>
        <span className='text-[16px] font-normal tracking-tight'>{vraag}</span>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
            className={`transform cursor-pointer ${open === undefined ? '' : open ? 'rotate-180-Open' : 'rotate-180-Closed'}`}
          >
            <path d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' />
          </svg>
        </span>
      </div>

      <div
        className={`${open ? '' : 'hidden'} mt-[10px] max-w-[403px] text-[16px] font-normal tracking-tight md:w-[435px]`}
      >
        {antwoord}
      </div>
    </div>
  );
};

export default FAQVraag;
