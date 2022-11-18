import { useState, useEffect } from 'react';
import { API } from '../API';

const useGetHome = () => {
  const [sliderData, setSliderData] = useState([]);
  const [trendData, setTrend] = useState([]);
  const [moviesData, setMovies] = useState([]);
  const [tvData, setTv] = useState([]);
  const [categoryMovieData, setCategoryMovie] = useState([]);
  const [categoryTvData, setCategoryTv] = useState([]);

  useEffect(() => {
    const fetchHome = async () => {
      const sliderRes = await API(`trending/all/day`);
      const trendingRes = await API(`trending/all/week`);
      const movieRes = await API(`trending/movie/week`);
      const tvRes = await API(`trending/tv/week`);
      const categoryMovieRes = await API(`genre/movie/list`);
      const categoryTvRes = await API(`genre/tv/list`);

      const slider = sliderRes.data.results;
      const trending = trendingRes.data.results;
      const movies = movieRes.data.results;
      const tv = tvRes.data.results;
      const CategoryMovies = categoryMovieRes.data.genres;
      const CategoryTv = categoryTvRes.data.genres;

      setSliderData(slider);
      setTrend(trending);
      setMovies(movies);
      setTv(tv);
      setCategoryMovie(CategoryMovies);
      setCategoryTv(CategoryTv);
    };

    fetchHome();
  }, []);

  return {
    sliderData,
    trendData,
    moviesData,
    tvData,
    categoryMovieData,
    categoryTvData,
  };
};

export { useGetHome };
