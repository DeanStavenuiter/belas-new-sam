import React from 'react';
import Navbar from '../../components/Navbar';
import FooterDesktop from '../../components/FooterDesktop';
import { FooterMobile } from '../../components/FooterMobile';
import BlauweBalk from '../../components/BlauweBalk';
import BelOns from '../../components/BelComponent';
import InfoOnderProduct from '@/app/components/InfoOnderProduct';
import InfoNaastProduct from '@/app/components/InfoNaastProduct';

const HekPagina = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
      <Navbar />

      <div className='mt-[208px] flex flex-row justify-center'>
        <div className='max-w-[1200px]'>
          <div className='flex flex-row'>
          <InfoOnderProduct />

          <InfoNaastProduct />
          </div>
       
        </div>
      </div>
      <BelOns />
      <BlauweBalk />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
};

export default HekPagina;
