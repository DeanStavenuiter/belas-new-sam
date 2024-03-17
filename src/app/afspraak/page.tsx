import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import Form from '../components/Form';
import BelOns from '../components/BelComponent';

const afspraak = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
    <Navbar />

    <Form title={"Afspraak maken"} color={"#1A3055"} titleForm={"Een van onze specialisten spreken?"} />

    <BelOns />
    <BlauweBalk />
    <FooterDesktop />
    <FooterMobile />
  </div>
  )
}

export default afspraak