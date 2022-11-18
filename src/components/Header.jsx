import styles from '../styles/styles';
import { Menu, SearchBar } from './index';

const Header = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.boxWidth}`}>
      <div
        className={`w-full flex flex-col ss:flex-row justify-between items-center ${styles.padding}`}
      >
        <div className='flex flex-row space-x-4 md:space-x-8'>
          <h1 className='text-2xl md:text-3xl font-primary font-bold'>
            MOVIELAB
          </h1>
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
