import { useGetHome } from '../Hooks/useGetHome';
import styles from '../styles/styles';
import { Slider } from '../components';

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
    <section className={`${styles.flexCenter}`}>
      <Slider data={sliderData} />
    </section>
  );
};

export { Home };
