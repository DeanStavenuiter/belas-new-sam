'use client';
import { useState } from 'react';
import { cards } from '../../cards/projecten';

const CardsProjecten = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`${i === currentPage ? 'active border-[#1A3055] text-[#182228]' : 'border-[#CFD4DC] text-[#CFD4DC]'} btn h-[50px] w-[50px] ${
              i === totalPages ? '' : 'mr-[15px]'
            } text-[18px] font-semibold tracking-normal opacity-[0.75]`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className='btn mr-[15px] h-[50px] w-[50px] border-[#CFD4DC] text-[18px] font-semibold tracking-normal text-[#CFD4DC] opacity-[0.75]'
          >
            ...
          </button>
        );
      }
    }
    return pageNumbers;
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className='max-w-[1200px] w-full'>
      <div className='mb-[75px] flex flex-col items-center xl:items-start flex-wrap justify-center w-full gap-[51px] xl:w-[1200px] xl:flex-row'>
        {currentCards.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
      <div className='flex justify-center text-[#182228]'>
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className='mr-[35px] text-[18px] font-semibold tracking-normal opacity-[0.75]'
        >
          Vorige
        </button>

        {renderPageNumbers()}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className='ml-[35px] text-[18px] font-semibold tracking-normal opacity-[0.75]'
        >
          Volgende
        </button>
      </div>
    </div>
  );
};

export default CardsProjecten;
