import Image from 'next/image';
import React from 'react';

export interface CardHekkenProps {
  nameProduct: string;
  price: string;
  imgBgClass: string;
}

const CardHekken = ({ nameProduct, price, imgBgClass }: CardHekkenProps) => {
  return (
    <div className='mb-[40px] flex justify-center rounded-[5px] w-[320px]'>
      <div className='shadow-cards flex h-[530px] w-[320px] flex-col p-[22px] rounded-[5px]'>
        <div className={`${imgBgClass} h-[237px] w-[276px] rounded-[5px] bg-[#F7F7F7]`}></div>

        <div className='mt-[20px] flex flex-row justify-between'>
          <h4 className='text-[22px] font-semibold tracking-tight'>
            {nameProduct}
          </h4>
          <div className='flex h-[34] w-[107px] items-center justify-center rounded-[5px] bg-[#1A3055] pt-[7.5px] pb-[8.5px] pl-[25px] pr-[24px]'>
            <span className='italic text-white text-[15px]'>Populair!</span>
          </div>
        </div>

        <div className='flex flex-col '>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-tight'>
              Robuust hekwerk
            </span>
          </div>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-tight'>
              220 cm brede panelen
            </span>
          </div>
          <div className='flex flex-row gap-[10px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span className='text-[15px] font-normal tracking-tight'>
              Afgeschuinde punten voor de veiligheid
            </span>
          </div>

          <div className='mt-[20px] flex items-end gap-[6px]'>
            <span className='text-[15px] font-normal tracking-tight'>
              Vanaf
            </span>
            <span className='text-[25px]/[29px] font-semibold '>
              €{price},-
            </span>
          </div>

          <div className='mt-[26px] w-full hover:cursor-pointer'>
            <div className='btn w-full rounded-[5px] border-none bg-[#E98A14] hover:bg-[#E98A14] px-[88px] py-[14px]'>
              <span className='text-[18px] font-normal tracking-tight text-white'>
                Hek bekijken
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHekken;
