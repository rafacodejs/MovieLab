import React, { useEffect } from 'react';
import { Card } from '../index';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { notPoster } from '../../assets';

const CarouselCard = ({ data, mediaDefault, title, subTitle }) => {
  const containerRef = React.useRef();
  const sliderTimerRef = React.useRef();

  useEffect(() => {
    return () => {
      clearInterval(sliderTimerRef.current);
    };
  }, []);

  const slide = (direction) => {
    clearInterval(sliderTimerRef.current);
    let scrollCompleted = 0;

    sliderTimerRef.current = setInterval(function () {
      const container = containerRef.current;

      if (direction === 'left') {
        container.scrollLeft -= 1190;
      } else {
        container.scrollLeft += 1190;
      }
      scrollCompleted += 1190;
      if (scrollCompleted >= 100) {
        clearInterval(sliderTimerRef.current);
      }
    }, 50);
  };

  return (
    <section className='relative w-[100%] ss:w-[90%] scroll-smooth mt-4 ss:mt-0 sm:mt-4 mb-8 sm:mb-14'>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-[80%] flex flex-col justify-start items-start mt-2 px-2'>
          <h1 className='text-[24px] sm:text-[34px] font-primary font-bold text-white ml-4 ss:ml-0'>
            {title}
          </h1>
          <h4 className='text-[13px] sm:text-[18px] font-primary font-normal text-dimWhite ml-4 ss:ml-0'>
            {subTitle}
          </h4>
        </div>
        <div className='hidden md:flex flex-row justify-center items-center mr-5'>
          <span
            className='mr-3 text-white text-[8px]'
            onClick={() => slide('left')}
          >
            <MdKeyboardArrowLeft className='w-[50px] h-[50px] bg-transparent border-[1px] border-white hover:bg-primary hover:border-primary rounded-[10px] cursor-pointer p-2' />
          </span>
          <span
            className='mr-3 text-white text-[8px]'
            onClick={() => slide('right')}
          >
            <MdKeyboardArrowRight className='w-[50px] h-[50px] bg-transparent border-[1px] border-white hover:bg-primary hover:border-primary rounded-[10px] cursor-pointer p-2' />
          </span>
        </div>
      </div>

      <div
        className='w-full h-[250px] flex items-center flex-row mt-6 scroll-smooth whitespace-nowrap ss:snap-mandatory overflow-x-auto md:overflow-hidden'
        ref={containerRef}
      >
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.name || item.title}
            poster={
              item.poster_path !== null && item.profile_path !== null
                ? `https://image.tmdb.org/t/p/w500${
                    item.poster_path || item.profile_path
                  }`
                : notPoster
            }
            date={(item.release_date || item.first_air_date).split('-')[0]}
            vote={item.vote_average.toFixed(1)}
            genre={item.genre_ids}
            media={item?.media_type}
            mediaDefault={mediaDefault}
          />
        ))}
      </div>
    </section>
  );
};

export { CarouselCard };
