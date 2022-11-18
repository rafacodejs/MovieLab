import { useGetHome } from '../Hooks/useGetHome';
import styles from '../styles/styles';
import { Slider, CarouselCard } from '../components';

const Home = () => {
  const {
    sliderData,
    trendData,
    moviesData,
    tvData,
    categoryMovieData,
    categoryTvData,
  } = useGetHome();

  return (
    <section className={`${styles.flexCenter} flex-col`}>
      <Slider data={sliderData} />
      <CarouselCard
        title='Trends🔥'
        subTitle='See our hot trends about all kind of content that you like'
        data={trendData}
      />
    </section>
  );
};

export { Home };
