import { useState, useEffect } from 'react';
import { API } from '../API';

const useGetTv = () => {
  const [sliderTvData, setSliderData] = useState([]);
  const [trendTvData, setTrend] = useState([]);
  const [tvToday, setTvToday] = useState([]);
  const [topTvRatedData, setTopRated] = useState([]);
  const [categoryTvData, setCategoryTv] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const sliderRes = await API(`/tv/on_the_air`);
      const trendingRes = await API(`/tv/popular`);
      const tvTodayRes = await API(`/tv/airing_today`);
      const topRated = await API(`/tv/top_rated`);
      const categoryTvRes = await API(`genre/tv/list`);

      const slider = sliderRes.data.results;
      const trending = trendingRes.data.results;
      const tvTodayData = tvTodayRes.data.results;
      const topRatedTv = topRated.data.results;

      const CategoryTv = categoryTvRes.data.genres;

      setSliderData(slider);
      setTrend(trending);
      setTvToday(tvTodayData);
      setTopRated(topRatedTv);

      setCategoryTv(CategoryTv);
    };

    fetchMovies();
  }, []);

  return {
    sliderTvData,
    trendTvData,
    tvToday,
    topTvRatedData,
    categoryTvData,
  };
};

export { useGetTv };
