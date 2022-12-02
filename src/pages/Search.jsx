import { useGetSearch } from '../Hooks/useGetSearch';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PosterCarousel } from '../components';
import { notPoster, fake } from '../assets';
import { RiArrowLeftSLine } from 'react-icons/ri';

import styles from '../styles/styles';

const Search = () => {
  const { query } = useParams();
  const { search } = useGetSearch(query);
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  console.log(search);

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center p-4'>
        <div
          className='visible sm:invisible flex justify-start items-start text-white text-[38px] cursor-pointer'
          onClick={back}
        >
          <RiArrowLeftSLine />
        </div>
        <h1
          className={`${styles.flexCenter} font-primary font-bold text-white text-[32px]`}
        >
          {query}
        </h1>
        <div>{''}</div>
      </div>
      <div className='flex fle-row flex-wrap justify-center items-center gap-1 p-0 ss:gap-4 ss:p-2 mb-5'>
        {search.map((item) => (
          <PosterCarousel
            key={item.id}
            id={item.id}
            media={item.media_type}
            poster={
              item.poster_path !== null && item.profile_path !== null
                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                : notPoster || fake
            }
            title={item.name || item.title}
            vote={item.vote_average}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export { Search };
