import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import BelOns from '../components/BelComponent';
import FAQVraag from '../components/FAQVraag';

const faq = () => {
  return (
    <div className='max-h-[-webkit-fill-available]'>
      <Navbar />

      <div>
        <div className='mb-[41px] mt-[76px] flex flex-col items-center justify-center'>
          <h1 className='text-[69px] font-black uppercase tracking-tight text-[#1C355D] opacity-[0.07]'>
            faq
          </h1>
          <h2 className='text-[45px] font-semibold tracking-tight text-[#1C355D] '>
            Veel gestelde vragen
          </h2>
        </div>
        <div className='mb-[64px] flex flex-col items-center justify-center'>
          <div className='mb-[25px] w-[360px]'>
            <p className='text-[15px]/[25px] font-normal tracking-tight text-[#182228]'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>
          <div className='btn rounded-[5px] hover:border-[#E98A14] border-[#E98A14] hover:bg-white bg-white p-[12px_47px_14px_48px] '>
            <span className='text-[16px] font-medium tracking-tighter text-[#E98A14]'>
              Neem contact met ons op
            </span>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex'>
            <div className='flex w-[1200px] xl:flex-row xl:justify-normal justify-center items-center xl:items-start gap-[41px] xl:gap-[unset] flex-col text-[20px] font-medium text-[#1C355C]'>
              <div className='w-[50%]'>
                <h6 className='mb-[41px]'>Onderwerp 1</h6>
                <div className='flex flex-col gap-[15px]'>
                  <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                </div>
              </div>
              <div className='w-[50%] mb-[229px]'>
                <h6 className='mb-[41px]'>Onderwerp 2</h6>
                <div className='flex flex-col gap-[15px]'>
                  <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                <FAQVraag
                  vraag='Hier komt een veelgestelde vraag te staan'
                  antwoord='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat Lorem ipsum dolor sit amet, consetetur'
                />
                </div>
                
              </div>
            </div>
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

export default faq;
