import { useGetHome } from '../Hooks/useGetHome';

const Home = () => {
  const {
    sliderData,
    trendData,
    moviesData,
    tvData,
    categoryMovieData,
    categoryTvData,
  } = useGetHome();

  return <div>Home</div>;
};

export { Home };
