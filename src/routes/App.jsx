import { useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { UserContext } from '../context/index';

import {
  Home,
  Details,
  Person,
  Categories,
  Movies,
  Tv,
  Search,
  Favorites,
  Login,
} from '../pages/index';
import { Header, TabBar, SearchBar, Menu } from '../components';

const App = () => {
  const { user, details } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <BrowserRouter>
        <div className='hidden sd:block'>
          <Header />
        </div>
        <div
          className={`w-full flex flex-col sd:hidden justify-center items-center p-5 text`}
        >
          <h1 className='text-3xl font-primary font-bold text-gradient mb-2'>
            MOVIELAB
          </h1>
          <SearchBar />
        </div>
        <section className='hidden sm:flex justify-center items-center'>
          <Menu />
        </section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path={`/movie`} element={<Movies />} />
          <Route path={`/tv`} element={<Tv />} />

          <Route path='/details/:media/:id' element={<Details />} />
          <Route path='/person/:id' element={<Person />} />
          <Route path='/categories/:name/:id' element={<Categories />} />
          <Route
            path='/favorites'
            element={
              <PrivateRoute
                page={<Favorites id={details.id} media={details.media_type} />}
              />
            }
          />
          <Route path='/login' element={!user.success && <Login />} />
          <Route path='*' element={<p>No se encuentra</p>} />
        </Routes>
        <div className='block sd:hidden'>
          <TabBar />
        </div>
      </BrowserRouter>
    </main>
  );
};

export { App };
