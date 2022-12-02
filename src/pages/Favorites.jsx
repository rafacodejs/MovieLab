import { useContext } from 'react';
import { UserContext } from '../context';
import { CarouselFav } from '../components';

const Favorites = () => {
  const { details } = useContext(UserContext);
  window.scrollTo(0, 0);
  return (
    <div>
      {' '}
      <CarouselFav
        title='Favorites Movies'
        URL={`/account/${details.id}/favorite/movies`}
        mediaDefault='movie'
      />
      <CarouselFav
        title='Favorites Tv Series'
        URL={`/account/${details.id}/favorite/tv`}
        mediaDefault='tv'
      />
    </div>
  );
};

export { Favorites };
