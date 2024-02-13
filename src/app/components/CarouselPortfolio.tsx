'use client';

import React, { useRef, useState } from 'react';
import CardPortfolio from './CardPortfolio';
import Image from 'next/image';

const CarouselPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | ''>(
    ''
  );

  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    <CardPortfolio
      key={1}
      imgBgClass='bg-project-1'
      nameProject='Naam van het project'
      href=''
    />,
    <CardPortfolio
      key={2}
      imgBgClass='bg-project-2'
      nameProject='Naam van het project'
      href=''
    />,
    <CardPortfolio
      key={3}
      imgBgClass='bg-project-3'
      nameProject='Naam van het project'
      href=''
    />,
    <CardPortfolio
      key={4}
      imgBgClass='bg-project-4'
      nameProject='Naam van het project'
      href=''
    />,
    <CardPortfolio
      key={5}
      imgBgClass='bg-project-5'
      nameProject='Naam van het project'
      href=''
    />,
    <CardPortfolio
      key={6}
      imgBgClass='bg-project-6'
      nameProject='Naam van het project'
      href=''
    />,
  ];

  const handleClickNext = () => {
    if (currentIndex + 2 < cards.length) {
      setSlideDirection('left');
      const timeOut = setTimeout(() => {
        setCurrentIndex(currentIndex + 2);
        setSlideDirection('');
      }, 200);
      clearTimeout(timeOut);
    }
  };

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setSlideDirection('right');
      const timeOut = setTimeout(() => {
        setCurrentIndex(currentIndex - 2);
        setSlideDirection('');
      }, 200);

      clearTimeout(timeOut);
    }
  };

  return (
    <div className='carousel-container' ref={cardsContainerRef}>
      <div
        className={`flex flex-col justify-center gap-[40px] ${slideDirection}`}
      >
        {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
          <div
            key={index}
            className={`card-container 
            ${index + 1 >= currentIndex ? 'slide-left-in' : ''} 
            ${index - 1 <= currentIndex ? 'slide-right-in' : ''} 
            ${slideDirection === 'left' ? 'slide-left-out' : slideDirection === 'right' ? 'slide-right-out' : ''}`}
          >
            {card}
          </div>
        ))}
      </div>

      <div className='mt-[40px] flex flex-row justify-center gap-[9px]'>
        <div
          className='btn flex h-[48px] w-[48px] items-center justify-center border-none bg-[#182228]'
          onClick={handleClickPrev}
        >
          <Image
            src='arrow_back.svg'
            width={20}
            height={20}
            alt='arrow-back'
            className='ml-[5px]'
          />
        </div>
        <div
          className='btn flex h-[48px] w-[48px] items-center justify-center border-none bg-[#182228]'
          onClick={handleClickNext}
        >
          <Image
            src='arrow_forward.svg'
            width={20}
            height={20}
            alt='arrow-forward'
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselPortfolio;
