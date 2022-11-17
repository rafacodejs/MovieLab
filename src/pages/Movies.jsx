import React from 'react';
import { useGetMovies } from '../Hooks/useGetMovies';

const Movies = () => {
  const {
    sliderMoviesData,
    trendMoviesData,
    moviesComingData,
    topMoviesRatedData,
    categoryMoviesData,
  } = useGetMovies();
  return <div>Movies</div>;
};

export { Movies };
