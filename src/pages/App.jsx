import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  Details,
  Person,
  Categories,
  Movies,
  Tv,
  Search,
  Favorites,
} from './index';
import { Header, TabBar } from '../components';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path={`/movie`} element={<Movies />} />
          <Route path={`/tv`} element={<Tv />} />
          <Route path={`/favorites`} element={<Favorites />} />
          <Route path='/details/:media/:id' element={<Details />} />
          <Route path='/person/:id' element={<Person />} />
          <Route path='/categories/:name/:id' element={<Categories />} />
        </Routes>
        <section className='flex sm:hidden'>
          <TabBar />
        </section>
      </HashRouter>
    </section>
  );
};

export { App };
