'use client';

import { useState } from 'react';

interface FAQVraagProps {
  vraag: string;
  antwoord: string;
}

const FAQVraag = ({ vraag, antwoord }: FAQVraagProps) => {
  const [open, setOpen] = useState<Boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className=' flex flex-col max-w-[554px] cursor-pointer rounded-[15px] border border-[#1C355C4D] bg-[#1A305508] p-[30px_50px_34px_45px]'
      onClick={handleClick}
    >
      <div className='flex-row items-center justify-between flex w-full'>
        <span className='text-[16px] font-normal tracking-tight'>{vraag}</span>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
            className={`transform cursor-pointer ${!open ? 'rotate-180-Close' : 'rotate-180-Open'}`}
          >
            <path d='M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' />
          </svg>
        </span>
      </div>

      <div className={`${open ? '' : 'hidden'} text-[16px] font-normal tracking-tight mt-[10px] w-[435px]`}>{antwoord}</div>
    </div>
  );
};

export default FAQVraag;
