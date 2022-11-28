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
        <div className='hidden sd:block'>
          <Header />
        </div>
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
        <div className='block sd:hidden'>
          <TabBar />
        </div>
      </HashRouter>
    </section>
  );
};

export { App };
