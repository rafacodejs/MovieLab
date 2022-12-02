import React from 'react';
import { netflix, hbo, disney, prime, movie } from '../../assets';

const Platform = ({ home }) => {
  console.log(home);
  const url = new String(home);
  var result = url.replace(url.split('.').pop(), '');

  if (result === 'https://www.netflix.' || 
      result === 'http://www.netflix.') {
    return (
      <div className='w-[70px] mt-3 cursor-pointer '>
        <a href={home} target='_blank'>
          <img src={netflix} alt='netflix_icon' loading='lazy' />
        </a>
      </div>
    );
  }
  if (result === 'https://www.hbo.' || 
      result === 'http://www.hbo.') {
    return (
      <div className='w-[70px] mt-3 cursor-pointer '>
        <a href={home} target='_blank'>
          <img src={hbo} alt='hbo_icon' loading='lazy' />
        </a>
      </div>
    );
  }
  if (result === 'https://www.amazon.' || 
      result === 'http://www.amazon.') {
    return (
      <div className='w-[70px] mt-3 cursor-pointer '>
        <a href={home} target='_blank'>
          <img src={prime} alt='hbo_icon' loading='lazy' />
        </a>
      </div>
    );
  }
  if (
    result === 'https://www.disneyplus.' ||
    result === 'http://www.disneyplus.'
  ) {
    return (
      <div className='w-[70px] mt-3 cursor-pointer '>
        <a href={home} target='_blank'>
          <img src={disney} alt='hbo_icon' loading='lazy' />
        </a>
      </div>
    );
  }
  if (home === 'person') {
    return <div></div>;
  } else {
    return (
      <div className='w-[70px] mt-3 cursor-pointer '>
        <a href={home} target='_blank'>
          <img src={movie} alt='movie_icon' loading='lazy' />
        </a>
      </div>
    );
  }
};

export { Platform };
