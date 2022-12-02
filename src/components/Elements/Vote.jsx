import React from 'react';
import { TiStarFullOutline, TiStarHalfOutline } from 'react-icons/ti';

const Vote = ({ vote }) => {
  if (vote <= 2) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px] '>
        <TiStarFullOutline />
      </div>
    );
  }
  if (vote <= 2.5) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px] '>
        <TiStarFullOutline />
        <TiStarHalfOutline />
      </div>
    );
  }
  if (vote > 2.5 && vote <= 5) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px] '>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarHalfOutline />
      </div>
    );
  }
  if (vote > 5 && vote <= 7) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px] '>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>
    );
  }
  if (vote > 7 && vote <= 8.5) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px] '>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarHalfOutline />
      </div>
    );
  }
  if (vote > 8.5 && vote <= 9.5) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px]'>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarHalfOutline />
      </div>
    );
  }
  if (vote >= 10) {
    return (
      <div className='flex flex-row text-yellow-400 text-[14px] ss:text-[16px] sm:text-[28px]'>
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
      </div>
    );
  }
};

export { Vote };
