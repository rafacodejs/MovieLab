import { useContext } from 'react';
import { useGetFavorites } from '../../Hooks/useGetFavorites';

import { NewPoster } from './NewPoster';
import { UserContext } from '../../context';
import { notPoster } from '../../assets';
import styles from '../../styles/styles';

const CarouselFav = ({ URL, title, mediaDefault }) => {
  const { user } = useContext(UserContext);

  const { dataMovies } = useGetFavorites(URL, user.session_id);

  return (
    <section className={`${styles.flexCenter} flex-col mb-5`}>
      <div className='mt-14'>
        <h2 className='font-primary font-bold text-gradient text-[32px]'>
          {title}
        </h2>
      </div>

      {dataMovies.map((item) => (
        <NewPoster
          key={item.id}
          list={user.success ? false : true}
          id={item.id}
          media={mediaDefault}
          backdrop={
            item.poster_path !== null && item.profile_path !== null
              ? `https://image.tmdb.org/t/p/original${item?.backdrop_path}`
              : notBanner
          }
          poster={
            item.poster_path !== null && item.profile_path !== null
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : notPoster
          }
          title={item.name || item.title}
          overview={item.overview}
          vote={item.vote_average.toFixed(1)}
          date={item?.release_date || item?.first_air_date}
          mediaDefault={mediaDefault}
          item={item}
        />
      ))}
    </section>
  );
};

export { CarouselFav };
