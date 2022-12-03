import React from 'react';
import { Link } from 'react-router-dom';

const CardButton = ({ id, media, mediaDefault }) => {
  return (
    <button
      className='w-[100px] h-[30px] ss:w-[125px] ss:h-[40px] mt-3 ss:mt-4 bg-blue-gradient rounded-full text-black font-primary font-medium text-[12px] ss:text-[14px] sm:text-[16px] cursor-pointer shadow-5xl'
      onClick={() => window.location.reload()}
    >
      <Link
        to={
          media === undefined
            ? `/details/${mediaDefault}/${id}`
            : `/details/${media}/${id}`
        }
      >
        See details
      </Link>
    </button>
  );
};

export { CardButton };
