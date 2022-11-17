import { useState, useEffect } from 'react';
import { API } from '../API';

const useGetHero = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const sliderRes = await API(`trending/all/day`);
      const slider = sliderRes.data.results;
      setSliderData(slider);
    };
    fetchMovies();
  }, []);

  console.log(sliderData);
  return { sliderData };
};

export { useGetHero };
