import React from 'react'
import Image from 'next/image';
import CarouselHekken from './components/CarouselHekken';
import BelOns from './components/BelComponent';
import FooterDesktop from './components/FooterDesktop';
import { FooterMobile } from './components/FooterMobile';
import BlauweBalk from './components/BlauweBalk';
import Reviews from './components/Reviews';
import Nieuws from './components/Nieuws';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
const copypast = () => {
  return (
    <>

      {/* <div className='relative top-[-268px] w-full overflow-x-hidden sm:top-[-873px] flex justify-center flex-col'> */}




   

   

      <BlauweBalk />
      <BelOns />

      <FooterDesktop />

      <FooterMobile /> 
    </>
  )
}

export default copypast