import { useGetHome } from '../Hooks/useGetHome';
import styles from '../styles/styles';
import { Slider, CarouselCard, Carousel, CategoryButton } from '../components';

const Home = () => {
  const {
    sliderData,
    trendData,
    moviesData,
    tvData,
    categoryMovieData,
    categoryTvData,
    loading,
  } = useGetHome();
  window.scrollTo(0, 0);

  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <div className='w-[90%] ss:w-[100%] flex flex-col justify-center items-start ss:items-center mb-2 ss:p-0 mt-2'>
        <h1 className='font-primary font-bold text-[24px] sm:text-[30px] md:text-[38px] text-white'>
          Explorer
          <span className='text-gradient'> Top Movies & TV Series</span> Around
          The World
        </h1>
        <p className='font-primary font-normal text-[16px] ss:text-[18px] text-dimWhite'>
          From you phone at this website
        </p>
      </div>
      <Slider data={sliderData} loading={loading} />
      <CarouselCard
        title='Trends🔥'
        subTitle='See our hot trends about all kind of content that you like'
        data={trendData}
      />
      <Carousel data={moviesData} title='Movies 🎥' mediaDefault='movie' />
      <Carousel data={tvData} title='Tv Series 📺' mediaDefault='tv' />
      <CategoryButton dataMovie={categoryMovieData} dataTv={categoryTvData} />
    </section>
  );
};

export { Home };
