import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import Form from '../components/Form';
import BelOns from '../components/BelComponent';

const contact = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
      <Navbar />

      <Form title={"Contact"} color={"#E98A14"} titleForm={"Stel hier uw vragen!"} />

      <BelOns />
      <BlauweBalk />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
};

export default contact;
