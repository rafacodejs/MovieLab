import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import styles from '../../styles/styles';

const CardButton = ({ id, media, mediaDefault }) => {
  return (
    <button
      className={`${styles.flexCenter} w-[35px] h-[35px] ml-4 blur-button hover:bg-primary duration-300 transition-all ease-in-out rounded-full`}
    >
      <Link
        to={
          media === undefined
            ? `/details/${mediaDefault}/${id}`
            : `/details/${media}/${id}`
        }
      >
        <div className='text-[16px]'>
          <FaPlay />
        </div>
      </Link>
    </button>
  );
};

export { CardButton };
