import styles from '../styles/styles';
import { reactIcon, tailwind, tmdb } from '../assets';

const Footer = () => {
  return (
    <footer
      className={`${styles.flexCenter} flex-col mb-14 border-t-2 border-secondary`}
    >
      <div className='flex flex-row mt-4'>
        <img src='' alt='' />
        <h4 className='text-[18px] text-dimWhite font-primary font-normal'>
          MovieLab
        </h4>
      </div>
      <div className={`${styles.flexCenter} flex-row`}>
        <h5 className='text-[18px] text-dimWhite font-primary font-normal mr-2'>
          Made with
        </h5>
        <img src={reactIcon} alt='react-icon' className='w-[40px] mr-3' />
        <img src={tailwind} alt='tailwind-icon' className='w-[50px]' />
      </div>
      <div className={`${styles.flexCenter} flex-row mt-2`}>
        <h5 className='text-[18px] text-dimWhite font-primary font-normal mr-2'>
          Data provided by
        </h5>
        <img src={tmdb} alt='tmdb-icon' className='w-[100px]' />
      </div>
      <div className={`${styles.flexCenter} flex-row mt-5`}>
        <p className='text-[18px] text-dimWhite font-primary font-normal'>
          This project uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
