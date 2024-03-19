'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import hekwerk from '../../../public/hekwerk.webp';

const InfoOnderProduct = () => {
  const [chosenText, setChosenText] = useState('omschrijving');
  const params = useParams();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setChosenText(e.currentTarget.innerText.toLowerCase());
  };
  return (
    <div>
      <div className='mr-[42px] flex h-[455px] w-[547px] items-center justify-center rounded-[7px] bg-[#F7F7F7]'>
        <Image
          src={hekwerk}
          width={368}
          height={275}
          alt={`hekwerk ${params.id}`}
        />
      </div>

      <div className='mt-[21px]'>
        <ul className='flex flex-row gap-[42px] text-[14px]/[17px] font-semibold tracking-normal text-[#1E2838]'>
          <li className='cursor-pointer' onClick={handleClick}>
            Omschrijving
            {chosenText === 'omschrijving' && (
              <div className=' relative top-[19px] h-[3px] rounded-sm bg-[#1C355C]'></div>
            )}
          </li>
          <li className='cursor-pointer' onClick={handleClick}>
            Specificaties
            {chosenText === 'specificaties' && (
              <div className=' relative top-[19px] h-[3px] rounded-sm bg-[#1C355C]'></div>
            )}
          </li>
          <li className='cursor-pointer' onClick={handleClick}>
            Levering/Plaatsing
            {chosenText === 'levering/plaatsing' && (
              <div className=' relative top-[19px] h-[3px] rounded-sm bg-[#1C355C]'></div>
            )}
          </li>
        </ul>
        <div className='mb-[26.5px] mt-[17px] h-[2px]  w-[547px] border-solid bg-[#F7F7F7]'></div>
        {chosenText === 'omschrijving' && (
          <div className='mb-[275px] max-w-[547px] text-[15px]/[30px] font-normal tracking-normal text-[#1F2739]'>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        )}
        {chosenText === 'specificaties' && (
          <div className='mb-[275px] max-w-[547px] text-[15px]/[30px] font-normal tracking-normal text-[#1F2739]'>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        )}
        {chosenText === 'levering/plaatsing' && (
          <div className='mb-[275px] max-w-[547px] text-[15px]/[30px] font-normal tracking-normal text-[#1F2739]'>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            <br />
            <h4 className='text-[16px]/[19px] font-semibold'>
              Consentetur sadipscing elitr
            </h4>
            <br />
            <p>
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoOnderProduct;
