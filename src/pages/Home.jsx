import { useState } from 'react';
import { useGetHero } from '../Hooks/useGetHero';

const Home = () => {
  const { sliderData } = useGetHero();
  console.log(sliderData);

  return <div>Home</div>;
};

export { Home };
