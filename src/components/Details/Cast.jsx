import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fake } from '../../assets';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cast = ({ data, title }) => {
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
    <div className='relative ss:h-[450px] w-[100%] ss:w-[90%] sd:mt-20 md:mt-14'>
      <div className='flex flex-row justify-between items-center'>
        <div className='w-[80%] flex flex-col justify-start items-start px-2'>
          <h1 className='text-[24px] sm:text-[34px] font-primary font-bold text-white ml-3 ss:ml-0'>
            {title}
          </h1>
        </div>
        <div className='hidden sm:flex flex-row justify-center items-center mr-5'>
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
        className='w-full h-full grid grid-rows-20 grid-flow-col ss:gap-4 items-start ss:mt-5 scroll-smooth whitespace-nowrap ss:snap-mandatory overflow-x-auto ss:overflow-hidden'
        ref={containerRef}
      >
        {data.map((item) => (
          <section
            className='flex flex-col justify-center items-center w-[180px] h-[350px] animation-img -ml-0 -mr-4 sm:-mr-2 ss:ml-2 ss-mr-7 p-2 ss:p-0'
            key={item.id}
          >
            <Link to={`/person/${item.id}`}>
              <LazyLoadImage
                src={
                  item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item?.profile_path}`
                    : fake
                }
                alt={item.original_name || item.name}
                className='w-[150px] h-[220px] ss:w-[220px] ss:h-[260px] rounded-t-[14px] ss:mt-6 cursor-pointer'
                loading='lazy'
              />
            </Link>

            <div className='w-[150px] ss:w-full flex flex-row h-[60px] ss:h-[100px] relative bg-black-gradient rounded-b-[14px]'>
              <div className='w-[90px] ss:w-[100px] mt-2 ml-2 mr-3'>
                <h1 className='w-[20px] text-[16px] text-white font-primary font-normal'>
                  {item.original_name}
                </h1>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export { Cast };
