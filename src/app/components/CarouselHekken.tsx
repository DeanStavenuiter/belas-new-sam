'use client';
import { useState, useRef } from 'react';
import CardHekken from './CardHekken';

const CarouselHekken = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    <CardHekken
      key={1}
      imgBgClass='bg-hek-card'
      nameProduct='ASH-3015'
      price='399'
    />,
    <CardHekken
      key={2}
      imgBgClass='bg-hek-card'
      nameProduct='ASH-2070'
      price='499'
    />,
    <CardHekken
      key={3}
      imgBgClass='bg-hek-card'
      nameProduct='ASH-R25'
      price='299'
    />,
    <CardHekken
      key={4}
      imgBgClass='bg-hek-card'
      nameProduct='AGH-44.2/55.2'
      price='399'
    />,
  ];

  const handleScroll = () => {
    if (cardsContainerRef.current) {
      const scrollPosition = cardsContainerRef.current.scrollLeft;
      const cardWidth = 320;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
      console.log('index', currentIndex);
    }
  };

  return (
    <div className='sm:mb-[80px]'>
      <div
        className={`flex w-full flex-col`}
      >
        <div
          className={`sm:scroll-none flex flex-row justify-center overflow-x-scroll  pl-[735px] sm:w-[1200px] md:pl-[240px]`}
          onScroll={handleScroll}
          ref={cardsContainerRef}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className={` ${index === currentIndex ? 'active' : ''} pr-[40px]`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center gap-2 md:hidden'>
        {cards.map((card, index) => (
          <div key={index} className='pb-4'>
            <div
              className={`w-[25px] rounded-[5px] border-[2px] border-solid ${
                index === currentIndex ? 'border-[#1A3055]' : 'border-[#E4E4E4]'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselHekken;
