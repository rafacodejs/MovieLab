import { useContext } from 'react';
import { UserContext } from '../context';
import { CarouselFav } from '../components';

const Favorites = () => {
  const { user, details } = useContext(UserContext);
  return (
    <div>
      {' '}
      <CarouselFav
        title='Favorites Movies'
        URL={`/account/${details.id}/favorite/movies`}
      />
      <CarouselFav
        title='Favorites Tv Series'
        URL={`/account/${details.id}/favorite/tv`}
      />
    </div>
  );
};

export { Favorites };
