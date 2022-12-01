import { useContext } from 'react';
import { UserContext } from '../context';
import { CarouselFav } from '../components';

const Favorites = ({ media }) => {
  const { user, details } = useContext(UserContext);
  return (
    <div>
      {' '}
      <CarouselFav URLMovies={`/account/${details.id}/favorite/movies`} />
      <CarouselFav URLMovies={`/account/${details.id}/favorite/tv`} />
    </div>
  );
};

export { Favorites };
