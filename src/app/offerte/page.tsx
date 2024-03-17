import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import Form from '../components/Form';
import BelOns from '../components/BelComponent';

const offerte = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
    <Navbar />

    <Form title={"Offerte aanvragen"} color={"#4CA701"} titleForm={"Vraag direct uw aanvraag aan!"} />

    <BelOns />
    <BlauweBalk />
    <FooterDesktop />
    <FooterMobile />
  </div>
  )
}

export default offerte