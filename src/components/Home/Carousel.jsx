import React, { useEffect } from 'react';
import { PosterCarousel } from '../index';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { notPoster } from '../../assets';

const Carousel = ({ data, title, mediaDefault }) => {
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
    <div className='relative ss:h-[450px] w-[100%] ss:w-[90%] scroll-smooth mb-14'>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-[80%] flex flex-col justify-start items-start px-2'>
          <h1 className='text-[24px] sm:text-[34px] font-primary font-bold text-white ml-3 ss:ml-0'>
            {title}
          </h1>
        </div>
        <div className='hidden md:flex flex-row justify-center items-center mr-5'>
          <span
            className='mr-3 text-white text-[8px]'
            onClick={() => slide('left')}
          >
            <MdKeyboardArrowLeft className='w-[50px] h-[50px] bg-transparent border-[1px] border-white hover:bg-tertiary hover:border-tertiary rounded-[10px] cursor-pointer p-2' />
          </span>
          <span
            className='mr-3 text-white text-[8px]'
            onClick={() => slide('right')}
          >
            <MdKeyboardArrowRight className='w-[50px] h-[50px] bg-transparent border-[1px] border-white hover:bg-tertiary hover:border-tertiary rounded-[10px] cursor-pointer p-2' />
          </span>
        </div>
      </div>

      <div
        className='w-full h-full grid grid-rows-20 grid-flow-col ss:gap-4 items-start  ss:mt-10 scroll-smooth whitespace-nowrap ss:snap-mandatory overflow-x-auto md:overflow-hidden overflow-y-hidden'
        ref={containerRef}
      >
        {data.map((item) => (
          <PosterCarousel
            key={item.id}
            id={item.id}
            mediaDefault={mediaDefault}
            media={item.media_type}
            poster={
              item.poster_path !== null && item.profile_path !== null
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : notPoster
            }
            title={item.name || item.title}
            vote={item.vote_average.toFixed(1)}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel };
