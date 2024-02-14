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

  const handleClickNextMobile = () => {
    console.log('clicked');
    if (currentIndex + 2 < cards.length) {
      setSlideDirection('left');
      const timeOut = setTimeout(() => {
        setCurrentIndex(currentIndex + 2);
        setSlideDirection('');
      }, 200);
      clearTimeout(timeOut);
    }
  };

  const handleClickPrevMobile = () => {
    console.log('clicked');
    if (currentIndex > 0) {
      setSlideDirection('right');
      const timeOut = setTimeout(() => {
        setCurrentIndex(currentIndex - 2);
        setSlideDirection('');
      }, 200);

      clearTimeout(timeOut);
    }
  };

  const handleScroll = () => {
    if (cardsContainerRef.current) {
      const scrollPosition = cardsContainerRef.current.scrollLeft;
      const cardWidth = 380;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    }
  };

  const handleClickNext = () => {
    console.log('clicked');
    if (cardsContainerRef.current) {
      const cardWidth = 400;
      const nextScrollPosition = cardsContainerRef.current.scrollLeft + cardWidth;
      cardsContainerRef.current.scrollTo({
        left: nextScrollPosition,
        behavior: 'smooth' // Optional: For smooth scrolling
      });
    }
  };
  
  const handleClickPrev = () => {
    console.log('clicked');
    if (cardsContainerRef.current) {
      const cardWidth = 400;
      const prevScrollPosition = cardsContainerRef.current.scrollLeft - cardWidth;
      cardsContainerRef.current.scrollTo({
        left: prevScrollPosition,
        behavior: 'smooth' // Optional: For smooth scrolling
      });
    }
  };

  return (
    <>
      <div className='overflow-x-hidden  '>
        <div
          className={`flex w-full flex-col overflow-y-hidden overflow-x-scroll `}
          onScroll={handleScroll}
          ref={cardsContainerRef}
        >
          <div className={`scroll-none flex flex-row justify-center pl-[1186px]`}>
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
      </div>

      <div className='mt-[40px] flex flex-row justify-center gap-[9px] md:justify-start md:mt-[25px]'>
        <div
          className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
          onClick={handleClickPrev}
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
          className=' flex h-[48px] w-[48px] items-center hover:cursor-pointer justify-center rounded-[5px] border-none bg-[#182228]'
          onClick={handleClickNext}
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
    // <div
    //   className='carousel-container overflow-y-hidden overflow-x-scroll'
    //   onScroll={handleScroll}
    //   ref={cardsContainerRef}
    // >
    //   <div
    //     className={`flex flex-col justify-center gap-[40px] ${slideDirection} md:hidden`}
    //   >
    //     {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
    //       <div
    //         key={index}
    //         className={`card-container
    //         ${index + 1 >= currentIndex ? 'slide-left-in' : ''}
    //         ${index - 1 <= currentIndex ? 'slide-right-in' : ''}
    //         ${slideDirection === 'left' ? 'slide-left-out' : slideDirection === 'right' ? 'slide-right-out' : ''}`}
    //       >
    //         {card}
    //       </div>
    //     ))}
    //   </div>

    //   <div className={` hidden flex-row justify-center gap-[40px] md:flex`}>
    //     {cards.map((card, index) => (
    //       <div
    //         key={index}
    //         // className={`card-container
    //         // ${index + 2 >= currentIndex ? 'slide-left-in' : ''}
    //         // ${index - 2 <= currentIndex ? 'slide-right-in' : ''}
    //         // ${slideDirection === 'left' ? 'slide-left-out' : slideDirection === 'right' ? 'slide-right-out' : ''}`}
    //       >
    //         {card}
    //       </div>
    //     ))}
    //   </div>

    //   <div className='mt-[40px] flex flex-row justify-center gap-[9px] md:hidden'>
    //     <div
    //       className='btn flex h-[48px] w-[48px] items-center justify-center border-none bg-[#182228] hover:cursor-pointer'
    //       onClick={handleClickPrevMobile}
    //     >
    //       <Image
    //         src='arrow_back.svg'
    //         width={20}
    //         height={20}
    //         alt='arrow-back'
    //         className='ml-[5px] hover:cursor-pointer'
    //       />
    //     </div>
    //     <div
    //       className='btn flex h-[48px] w-[48px] items-center justify-center border-none bg-[#182228]'
    //       onClick={handleClickNextMobile}
    //     >
    //       <Image
    //         src='arrow_forward.svg'
    //         width={20}
    //         height={20}
    //         alt='arrow-forward'
    //       />
    //     </div>
    //   </div>

    //   <div className='mt-[40px] hidden flex-row justify-center gap-[9px] md:flex '>
    //     <div
    //       className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228] hover:cursor-pointer'
    //       onClick={handleClickPrev}
    //     >
    //       <Image
    //         src='arrow_back.svg'
    //         width={20}
    //         height={20}
    //         alt='arrow-back'
    //         className='ml-[5px] hover:cursor-pointer'
    //       />
    //     </div>
    //     <div
    //       className=' flex h-[48px] w-[48px] items-center justify-center rounded-[5px] border-none bg-[#182228]'
    //       onClick={handleClickNext}
    //     >
    //       <Image
    //         src='arrow_forward.svg'
    //         width={20}
    //         height={20}
    //         alt='arrow-forward hover:cursor-pointer'
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default CarouselPortfolio;
