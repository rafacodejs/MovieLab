import { useContext } from 'react';
import styles from '../styles/styles';
import { Menu, SearchBar, Profile } from './index';
import { Link } from 'react-router-dom';
import { UserContext } from '../context';

const Header = () => {
  const { user } = useContext(UserContext);
  window.scrollTo(0, 0);

  return (
    <section className={`${styles.flexCenter}`}>
      <div
        className={`w-full flex flex-col ss:flex-row justify-between items-center ${styles.padding}`}
      >
        <div>
          <h1 className='text-2xl md:text-3xl font-primary font-bold text-gradient'>
            MOVIELAB
          </h1>
        </div>
        <div>
          <Menu />
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          {user.success ? (
            <Profile />
          ) : (
            <button
              className={`py-2 px-4 rounded-md bg-blue-gradient font-poppins font-medium text-[18px] text-black outline-none}`}
            >
              <Link to={`/login`}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export { Header };
