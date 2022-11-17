import { useState, useEffect } from 'react';
import { API } from '../API';

const useGetMovies = () => {
  const [sliderMoviesData, setSliderData] = useState([]);
  const [trendMoviesData, setTrend] = useState([]);
  const [moviesComingData, setMoviesComing] = useState([]);
  const [topMoviesRatedData, setTopRated] = useState([]);
  const [categoryMoviesData, setCategoryMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const sliderRes = await API(`/movie/now_playing`);
      const trendingRes = await API(`/movie/popular`);
      const movieComingRes = await API(`/movie/upcoming`);
      const topRated = await API(`/movie/top_rated`);
      const categoryMovieRes = await API(`genre/movie/list`);

      const slider = sliderRes.data.results;
      const trending = trendingRes.data.results;
      const moviesComing = movieComingRes.data.results;
      const topRatedMovies = topRated.data.results;
      const CategoryMovies = categoryMovieRes.data.genres;

      setSliderData(slider);
      setTrend(trending);
      setMoviesComing(moviesComing);
      setTopRated(topRatedMovies);
      setCategoryMovie(CategoryMovies);
    };

    fetchMovies();
  }, []);

  return {
    sliderMoviesData,
    trendMoviesData,
    moviesComingData,
    topMoviesRatedData,
    categoryMoviesData,
  };
};

export { useGetMovies };
