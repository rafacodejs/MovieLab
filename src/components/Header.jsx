import styles from '../styles/styles';
import { Menu, SearchBar } from './index';

const Header = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div
        className={`w-full flex flex-col ss:flex-row justify-between items-center ${styles.padding}`}
      >
        <div>
          <h1 className='text-2xl md:text-3xl font-primary font-bold text-white'>
            MOVIELAB
          </h1>
        </div>
        <div>
          <Menu />
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export { Header };
