import React from 'react';
import { useGetTv } from '../Hooks/useGetTv';

const Tv = () => {
  const { sliderTvData, trendTvData, tvToday, topTvRatedData, categoryTvData } =
    useGetTv();

  return <div>Tv</div>;
};

export { Tv };
