import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface CardHekkenProps {
  nameProduct: string;
  price: string;
  imgBgClass: string;
  href: string;
  w: number;
  h: number;
}

const CardsHekken = ({
  nameProduct,
  price,
  imgBgClass,
  href,
  w,
  h,
}: CardHekkenProps) => {
  return (
    <div
      className={`mb-[40px] flex h-[${h}px] w-[${w}px] justify-center rounded-[5px]`}
    >
      <div className={`shadow-cards  flex flex-col rounded-[5px] p-[22px]`}>
        <div
          className={`${imgBgClass} h-[274px] w-[319px] rounded-[5px] bg-[#F7F7F7]`}
        ></div>

        <div className='mt-[20px] flex flex-row justify-between'>
          <h4 className='text-[22px] font-semibold tracking-normal'>
            {nameProduct}
          </h4>
          <div className='flex h-[34] w-[107px] items-center justify-center rounded-[5px] bg-[#1A3055] pb-[8.5px] pl-[25px] pr-[24px] pt-[7.5px]'>
            <span className='text-[15px] italic text-white'>Populair!</span>
          </div>
        </div>

        <div className='flex flex-col gap-[18.78px] '>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-normal'>
              Robuust hekwerk
            </span>
          </div>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-normal'>
              220 cm brede panelen
            </span>
          </div>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-normal'>
              Afgeschuinde punten voor de veiligheid
            </span>
          </div>

          <div className='mt-[20px] flex items-end gap-[6px]'>
            <span className='text-[15px] font-normal tracking-normal'>
              Vanaf
            </span>
            <span className='text-[25px]/[29px] font-semibold '>
              €{price},-
            </span>
          </div>

          <div className='mt-[26px] w-full hover:cursor-pointer'>
            <Link href={`${href}`}>
              <div className='btn w-full rounded-[5px] border-none bg-[#E98A14] px-[88px] py-[14px] hover:bg-[#E98A14]'>
                <span className='text-[18px] font-normal tracking-normal text-white'>
                  Hek bekijken
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsHekken;
