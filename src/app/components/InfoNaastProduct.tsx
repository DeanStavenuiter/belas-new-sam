'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { RandomHekken } from '../../cards/randomHekken';

const InfoNaastProduct = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const price = searchParams.get('price');

  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const randomProducts = getRandomProducts(RandomHekken, 2);
    setSelectedProducts(randomProducts);
    console.log('selectedProducts', selectedProducts);
  }, []); 

  function getRandomProducts(cards: any, count: any): any {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  return (
    <div>
      <h3 className='text-[25px] font-semibold tracking-normal text-[#1E2838] '>
        {params.id}
      </h3>
      <div className='mt-[19.74px] flex flex-row items-center gap-[7.89px]'>
        <span className='text-[17px] font-normal tracking-normal text-[#E98A14]'>
          Vanaf
        </span>
        <span className='text-[28px] font-semibold tracking-normal text-[#E98A14]'>
          €{price},-
        </span>
      </div>
      <div className='mt-[27.26px] w-[412px] text-[15px]/[30px] text-[#1F2739]'>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed eirmod
          tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div className='mt-[37.26px]'>
        <ul className='flex flex-col gap-[13px] text-[14px]/[17px] font-semibold tracking-normal text-[#1E2838]'>
          <li className='flex flex-row gap-[21.7px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span>Geleverd binnen 7 dagen</span>
          </li>
          <li className='flex flex-row gap-[21.7px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span>GRATIS bezorgd op locatie</span>
          </li>
          <li className='flex flex-row gap-[21.7px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span>Productie op maat</span>
          </li>
          <li className='flex flex-row gap-[21.7px]'>
            <Image src='/check_icon.svg' alt='check' width={15} height={15} />
            <span>100% Nederlands product!</span>
          </li>
        </ul>

        <div className='mt-[37px]'>
          <div className='btn h-[53px] w-[363px] border-none bg-[#4CA701] p-[15px_120px_19px_117px] hover:bg-[#4CA701]'>
            <span className='text-white'>Offerte aanvragen</span>
          </div>
        </div>

        <div className='mt-[80.74px] flex flex-col'>
          <span className='text-[20px] font-semibold tracking-normal text-[#1E2838]'>
            Andere bekeken ook
          </span>
          <div className='mt-[44px] flex flex-row gap-[35px]'>
            {selectedProducts &&
              selectedProducts.map((product: any, index: number) => (
                <div key={index}>{product}</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoNaastProduct;
