import React from 'react';
import { useGetMovies } from '../Hooks/useGetMovies';
import styles from '../styles/styles';
import { Slider, CarouselCard, Carousel, CategoryButton } from '../components';

const Movies = () => {
  const {
    sliderMoviesData,
    trendMoviesData,
    moviesComingData,
    topMoviesRatedData,
    categoryMoviesData,
  } = useGetMovies();

  window.scrollTo(0, 0);
  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <div className='w-[90%] ss:w-[100%] flex flex-col justify-center items-start ss:items-center mb-2 ss:p-0'>
        <h1 className='font-primary font-bold text-[24px] sm:text-[30px] md:text-[38px] text-white'>
          Explorer
          <span className='text-gradient'> Top Movies</span> Around The World
        </h1>
        <p className='font-primary font-normal text-[16px] ss:text-[18px] text-dimWhite'>
          From you phone at this website
        </p>
      </div>
      <Slider data={sliderMoviesData} />
      <CarouselCard
        title='Trends🔥'
        subTitle='See our hot trends about all kind of content that you like'
        data={trendMoviesData}
      />
      <Carousel
        data={moviesComingData}
        title='Coming Movies 🔜'
        mediaDefault='movie'
      />
      <Carousel
        data={topMoviesRatedData}
        title='Top Rated 🌟'
        mediaDefault='tv'
      />
      <CategoryButton dataMovie={categoryMoviesData} />
    </section>
  );
};

export { Movies };
