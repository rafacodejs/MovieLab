import { useContext } from 'react';
import { useGetFavorites } from '../../Hooks/useGetFavorites';
import { NewPoster } from './NewPoster';
import { UserContext } from '../../context';
import { notPoster } from '../../assets';
import styles from '../../styles/styles';

const CarouselFav = ({ URL, title }) => {
  const { user } = useContext(UserContext);

  const { dataMovies } = useGetFavorites(URL, user.session_id);

  return (
    <section className={`${styles.flexCenter} flex-col`}>
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
          media={item.media_type}
          poster={
            item.poster_path !== null && item.profile_path !== null
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : notPoster
          }
          title={item.name || item.title}
          overview={item.overview}
          vote={item.vote_average.toFixed(1)}
        />
      ))}
    </section>
  );
};

export { CarouselFav };
