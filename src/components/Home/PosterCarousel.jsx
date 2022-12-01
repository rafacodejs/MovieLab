import { Link } from 'react-router-dom';
import { Liked } from '../index';
import { notPoster } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TiStarFullOutline } from 'react-icons/ti';
import styles from '../../styles/styles';
//import { useLocalStorage } from '../../Hooks/useLocalStorage';

const PosterCarousel = ({
  id,
  mediaDefault,
  media,
  poster,
  title,
  vote,
  item,
}) => {
  //const key = `liked-${id}`;
  //const [liked, setLiked] = useLocalStorage(key, {});
  return (
    <section
      className='flex flex-col justify-center items-center w-[180px] h-[350px] animation-img -mr-4 ss:ml-5 ss-mr-7 p-2 ss:p-0'
      key={id}
    >
      <Link
        to={
          media !== undefined
            ? `/details/${media}/${id}`
            : `/details/${mediaDefault}/${id}`
        }
      >
        <LazyLoadImage
          src={poster !== null || undefined ? poster : notPoster}
          alt={title}
          className='w-[150px] h-[220px] ss:w-[220px] ss:h-[260px] rounded-t-[14px] ss:mt-6 cursor-pointer'
          loading='lazy'
        />
      </Link>

      <div className='w-[150px] ss:w-full flex flex-row h-[60px] ss:h-[100px] relative bg-blackHover rounded-b-[14px]'>
        <div className='w-[50px] ss:w-[100px] h-[60px] ss:h-[67px] flex justify-center items-center relative bg-white rounded-bl-[14px]'>
          <Liked {...item} />
        </div>

        <div className='w-[90px] ss:w-[100px] mt-2 ml-2 mr-3'>
          <h1 className='text-[16px] text-white font-primary font-normal truncate'>
            {title}
          </h1>
          <div className={`${styles.flexStart} flex-row`}>
            <div className='text-yellow-400 text-[20px] mr-1'>
              <TiStarFullOutline />
            </div>
            <h5 className='font-primary font-normal text-dimWhite'>{vote}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PosterCarousel };
