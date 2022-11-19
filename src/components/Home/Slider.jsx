import { useState, useEffect } from 'react';
import styles from '../../styles/styles';
import { Slide } from '../index';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 8000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className='relative w-full h-auto xs:h-[300px] md:h-[600px] overflow-hidden  scroll-smooth shadow-5xl slide-container'>
      <div className={`${styles.navigation} navigation z-30`}>
        <span className={`${styles.PrevNext} rounded-r-lg`}>
          <IoIosArrowBack
            className='relative right-[9px] bottom-[1px] ss:top-[0px] sm:top-[3px]  text-dimBlack'
            onClick={prevSlide}
          />
        </span>
        <span className={`${styles.PrevNext} rounded-l-lg`}>
          <IoIosArrowForward
            className='relative right-[6px] bottom-[1px] ss:top-[0px] sm:top-[3px] text-dimBlack'
            onClick={nextSlide}
          />
        </span>
      </div>

      {data.map((item, index) => {
        return (
          <Slide
            id={item.id}
            key={item.id}
            index={index}
            media={item.media_type}
            title={item.name || item.title}
            vote={item.vote_average.toFixed(1)}
            date={(item.release_date || item.first_air_date).split('-')[0]}
            overview={item.overview}
            poster={`https://image.tmdb.org/t/p/original${
              item.backdrop_path || item.poster_path
            }`}
            currentSlide={currentSlide}
          />
        );
      })}
    </div>
  );
};

export { Slider };
