'use client';
import { useState, useRef } from 'react';
import CardReview from './CardReview';

const CarouselReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    <CardReview
      key={1}
      header='“Fantastisch werk geleverd!”'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
      name='Frank'
    />,
    <CardReview
      key={2}
      header='“Fantastisch werk geleverd!”'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
      name='Frank'
    />,
    <CardReview
      key={3}
      header='“Fantastisch werk geleverd!”'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
      name='Frank'
    />,
    <CardReview
      key={4}
      header='“Fantastisch werk geleverd!”'
      text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat'
      name='Frank'
    />,
  ];

  const handleScroll = () => {
    if (cardsContainerRef.current) {
      const scrollPosition = cardsContainerRef.current.scrollLeft;
      const cardWidth = 355;
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
        <div className={`flex flex-row justify-center pl-[835px]`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={` ${index === currentIndex ? 'active' : ''} pr-[35px]`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row justify-center gap-2'>
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
    </>
  );
};

export default CarouselReview;
