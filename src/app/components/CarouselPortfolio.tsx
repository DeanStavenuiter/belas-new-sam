'use client';

import React, { useRef, useState } from 'react';
import CardPortfolio from './CardPortfolio';
import Image from 'next/image';
import useDevice from '@/functions/UseDevice';

const CarouselPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | ''>(
    ''
  );

  const device = useDevice();
  console.log('Device is: ', device);

  const cardsContainerRefLarger = useRef<HTMLDivElement>(null);
  const cardsContainerRefSmaller = useRef<HTMLDivElement>(null);

  const cards = [
    <CardPortfolio
      key={1}
      imgBgClass='bg-project-1'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
    <CardPortfolio
      key={2}
      imgBgClass='bg-project-2'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
    <CardPortfolio
      key={3}
      imgBgClass='bg-project-3'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
    <CardPortfolio
      key={4}
      imgBgClass='bg-project-4'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
    <CardPortfolio
      key={5}
      imgBgClass='bg-project-5'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
    <CardPortfolio
      key={6}
      imgBgClass='bg-project-6'
      nameProject='Naam van het project'
      href=''
      device={device}
    />,
  ];

  // const handleClickNextMobile = () => {
  //   console.log('clicked');
  //   if (currentIndex + 2 < cards.length) {
  //     setSlideDirection('left');
  //     const timeOut = setTimeout(() => {
  //       setCurrentIndex(currentIndex + 2);
  //       setSlideDirection('');
  //     }, 200);
  //     clearTimeout(timeOut);
  //   }
  // };

  // const handleClickPrevMobile = () => {
  //   console.log('clicked');
  //   if (currentIndex > 0) {
  //     setSlideDirection('right');
  //     const timeOut = setTimeout(() => {
  //       setCurrentIndex(currentIndex - 2);
  //       setSlideDirection('');
  //     }, 200);

  //     clearTimeout(timeOut);
  //   }
  // };

  const handleScroll = () => {
    if (cardsContainerRefLarger.current) {
      const scrollPosition = cardsContainerRefLarger.current.scrollLeft;
      const cardWidth = 380;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const handleClickNextBig = () => {
    if (cardsContainerRefLarger.current) {
      const cardWidth = 538;
      const scrollPosition = cardsContainerRefLarger.current.scrollLeft;
      const nextScrollPosition = scrollPosition + cardWidth;
      cardsContainerRefLarger.current.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleClickPrevBig = () => {
    if (cardsContainerRefLarger.current) {
      const cardWidth = 538;
      const scrollPosition = cardsContainerRefLarger.current.scrollLeft;
      const prevScrollPosition = scrollPosition - cardWidth;
      cardsContainerRefLarger.current.scrollTo({
        left: prevScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleClickNextSmall = () => {
    console.log('clicked button')
    if (cardsContainerRefSmaller.current) {
      console.log('clicked ref')
      const cardWidth = 400;
      const scrollPosition = cardsContainerRefSmaller.current.scrollLeft;
      const nextScrollPosition = scrollPosition + cardWidth;
      cardsContainerRefSmaller.current.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleClickPrevSmall = () => {
    console.log('clicked button')
    if (cardsContainerRefSmaller.current) {
      console.log('clicked ref')
      const cardWidth = 400;
      const scrollPosition = cardsContainerRefSmaller.current.scrollLeft;
      const prevScrollPosition = scrollPosition - cardWidth;
      cardsContainerRefSmaller.current.scrollTo({
        left: prevScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className='hidden lg:block '>
        <div className={`flex max-w-[755px] flex-col sm:max-w-[1057px]`}>
          <div
            className={`flex flex-row justify-start overflow-x-scroll `}
            onScroll={handleScroll}
            ref={cardsContainerRefLarger}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={` ${index === currentIndex ? 'active' : ''}  ${index !== cards.length - 1 ? 'pr-[35px]' : ''} w-[100%]`}
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-[40px] hidden flex-row justify-center gap-[9px] md:mt-[25px] lg:flex lg:justify-start'>
        <div
          className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
          onClick={handleClickPrevBig}
        >
          <Image
            src='arrow_back.svg'
            width={20}
            height={20}
            alt='arrow-back'
            className='ml-[5px] hover:cursor-pointer'
          />
        </div>
        <div
          className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
          onClick={handleClickNextBig}
        >
          <Image
            src='arrow_forward.svg'
            width={20}
            height={20}
            alt='arrow-forward hover:cursor-pointer'
          />
        </div>
      </div>

      {/* smaller screens */}
      <div className='flex justify-center lg:hidden '>
        <div
          className=' block overflow-x-scroll w-[400px] '
          onScroll={handleScroll}
          ref={cardsContainerRefSmaller}
        >
          <div className='flex flex-row'>
            {cards.map((card, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    key={index}
                    className={`card-container ${index !== cards.length - 1 ? 'mb-[40px] mr-[40px]' : '0'}`}
                  >
                    {card}
                  </div>
                );
              }
              return null;
            })}
          </div>

          <div className='flex flex-row'>
            {cards.map((card, index) => {
              if (index % 2 === 1) {
                return (
                  <div
                    key={index}
                    className={`card-container ${index !== cards.length - 1 ? 'mb-[20px] mr-[40px]' : '0'}`}
                  >
                    {card}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <div className='mt-[40px] flex flex-row  justify-center  gap-[9px] lg:justify-start lg:hidden'>
        <div
          className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
          onClick={handleClickPrevSmall}
        >
          <Image
            src='arrow_back.svg'
            width={20}
            height={20}
            alt='arrow-back'
            className='ml-[5px] hover:cursor-pointer'
          />
        </div>
        <div
          className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
          onClick={handleClickNextSmall}
        >
          <Image
            src='arrow_forward.svg'
            width={20}
            height={20}
            alt='arrow-forward hover:cursor-pointer'
          />
        </div>
      </div>
    </>
  );
};

export default CarouselPortfolio;
