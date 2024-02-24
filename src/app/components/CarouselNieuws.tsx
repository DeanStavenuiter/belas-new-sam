'use client';

import React, { useRef, useState } from 'react';
import CardNieuws from './CardNieuws';

const CarouselNieuws = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    <CardNieuws
      key={1}
      imgSrc='project5.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-5'}
      href=''
    />,
    <CardNieuws
      key={2}
      imgSrc='project3.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-3'}
      href=''
    />,
    <CardNieuws
      key={3}
      imgSrc='project4.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-4'}
      href=''
    />,
    <CardNieuws
      key={4}
      imgSrc='project6.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-6'}
      href=''
    />,
  ];

  const handleScroll = () => {
    console.log('handleScroll called');
    if (cardsContainerRef.current) {
      const scrollPosition = cardsContainerRef.current.scrollLeft;
      const cardWidth = 341;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    }
  };
  return (
    <>
      <div
        className={`flex w-[430px] flex-col overflow-y-hidden overflow-x-scroll
        lg:w-[800px] xl:w-[1200px] `}
        onScroll={handleScroll}
        ref={cardsContainerRef}
      >
        <div className={`flex flex-row justify-center sm:justify-start pl-[735px] sm:pl-[035px] md:pl-0`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={` ${index === currentIndex ? 'active' : ''} md:pr-[35px] pr-[28px]`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselNieuws;
