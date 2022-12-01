import { useContext } from 'react';
import { useGetFavorites } from '../Hooks/useGetFavorites';
import { NewPoster } from './NewPoster';
import { UserContext } from '../context';
import { notPoster } from '../assets';

const CarouselFav = ({ URLMovies }) => {
  const { user } = useContext(UserContext);

  const { dataMovies } = useGetFavorites(URLMovies, user.session_id);

  console.log(dataMovies);

  return (
    <section>
      <div>
        <h2>Favorites</h2>
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
