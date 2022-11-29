import React from 'react';
import { useGetTv } from '../Hooks/useGetTv';
import styles from '../styles/styles';
import { Slider, CarouselCard, Carousel, CategoryButton } from '../components';

const Tv = () => {
  const { sliderTvData, trendTvData, tvToday, topTvRatedData, categoryTvData } =
    useGetTv();

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
      <Slider data={sliderTvData} />
      <CarouselCard
        title='Trends🔥'
        subTitle='See our hot trends about all kind of content that you like'
        data={trendTvData}
      />
      <Carousel data={tvToday} title='Today On Air 🔴' mediaDefault='movie' />
      <Carousel data={topTvRatedData} title='Top Rated 🌟' mediaDefault='tv' />
      <CategoryButton dataTv={categoryTvData} />
    </section>
  );
};

export { Tv };
