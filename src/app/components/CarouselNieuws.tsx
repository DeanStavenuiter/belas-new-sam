'use client';

import React, { useRef, useState } from 'react';
import CardNieuws from './CardNieuws';

const CarouselNieuws = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    <CardNieuws
      key={1}
      imgSrc='project1.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-1'}
      href=''
    />,
    <CardNieuws
      key={2}
      imgSrc='project2.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-2'}
      href=''
    />,
    <CardNieuws
      key={3}
      imgSrc='project3.jpg'
      title='Hier komt de titel van het blog'
      imgBgClass={'bg-project-3'}
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
        className={`flex w-full flex-col overflow-y-hidden overflow-x-scroll `}
        onScroll={handleScroll}
        ref={cardsContainerRef}
      >
        <div className={`flex flex-row justify-start pl-[035px] md:pl-0`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={` ${index === currentIndex ? 'active' : ''} pr-[35px] md:pr-[25px]`}
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
