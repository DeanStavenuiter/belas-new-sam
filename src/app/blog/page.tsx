import React from 'react';
import Navbar from '../components/Navbar';
import FooterDesktop from '../components/FooterDesktop';
import { FooterMobile } from '../components/FooterMobile';
import BlauweBalk from '../components/BlauweBalk';
import BelOns from '../components/BelComponent';
import CardNieuws from '../components/CardNieuws';

const page = () => {
  const cards = [
    <CardNieuws
      key={1}
      imgSrc='project5.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-5'}
      extendedClass='max-w-[386px] max-h-[307px]'
      href='1'
    />,
    <CardNieuws
      key={2}
      imgSrc='project3.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-3'}
      href='2'
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={3}
      imgSrc='project4.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-4'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={4}
      imgSrc='project6.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={5}
      imgSrc='project5.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={6}
      imgSrc='project3.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={7}
      imgSrc='project4.jpg'
      title='Hier komt de titel van het blog'
     imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={8}
      imgSrc='project6.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={9}
      imgSrc='project5.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={10}
      imgSrc='project3.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={11}
      imgSrc='project4.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
    <CardNieuws
      key={12}
      imgSrc='project6.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-[#182228]'}
      href=''
      extendedClass='max-w-[386px] max-h-[307px]'
    />,
  ];

  return (
    <div className='max-h-[-webkit-fill-available]'>
      <Navbar />

      <div className='mt-[205px] flex justify-center sm:top-[1640px] sm:px-[35px] mb-[300px]'>
        <div className='flex w-[1200px] flex-col items-center justify-center  sm:items-start'>
          <div className='flex w-full flex-row items-center justify-center lg:justify-between '>
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <span className=' text-[51px] font-black uppercase tracking-normal text-[#1C355D] opacity-[0.07] sm:text-[69px] '>
                Blog
              </span>
              <h2 className='text-[30px] font-semibold tracking-normal text-[#1C355D] sm:text-[45px]'>
                Blijft u op de hoogte?
              </h2>
            </div>
            <div className='relative bottom-[-42px] flex flex-row'>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='100px'
                height='180px'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className=' relative right-[-80px] top-[-7px] hidden lg:block'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#2B518D'
                  opacity='0.05'
                  stroke='none'
                >
                  <path
                    d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
                  />
                </g>
              </svg>
              <svg
                version='1.0'
                xmlns='http://www.w3.org/2000/svg'
                width='100px'
                height='180px'
                viewBox='0 0 200.000000 200.000000'
                preserveAspectRatio='xMidYMid meet'
                className=' relative right-[-22px] top-[-7px] hidden lg:block'
              >
                <g
                  transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
                  fill='#2B518D'
                  opacity='0.05'
                  stroke='none'
                >
                  <path
                    d='M490 1790 c-11 -11 -20 -28 -20 -38 0 -10 113 -180 250 -376 138
-197 250 -366 250 -376 0 -9 -110 -176 -245 -371 -166 -240 -245 -362 -245
-380 0 -55 16 -59 257 -59 205 0 222 1 246 20 28 22 530 743 541 776 7 24 29
-9 -293 457 -156 226 -242 342 -262 352 -22 12 -73 15 -244 15 -202 0 -216 -1
-235 -20z'
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className='flex w-full max-w-[unset] justify-center px-[35px] py-[27px] text-center md:px-0 lg:max-w-[360px] xl:text-left '>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
            </p>
          </div>

          <div className='flex flex-wrap gap-[21px] justify-center '>
            {cards.map((card, index) => (
              <div key={index} className='max-w-[386px] '>{card} </div>
            ))}
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

export default page;
