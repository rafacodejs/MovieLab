import { useState, useContext, useEffect } from 'react';
import { API } from '../../API';
import { UserContext } from '../../context/index';
import { Link } from 'react-router-dom';
import { Liked } from '../index';
import { notPoster, fake } from '../../assets';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TiStarFullOutline } from 'react-icons/ti';
import styles from '../../styles/styles';

const PosterCarousel = ({
  id,
  mediaDefault,
  media,
  poster,
  title,
  vote,
  item,
}) => {
  const [like, setLike] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const movieLiked = async () => {
      const { data } = await API.get(
        `/${media || mediaDefault}/${id}/account_states?session_id=${
          user.session_id
        }`
      );
      setLike(data.favorite);
    };

    if (user.success) {
      movieLiked();
    }
  }, []);

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
          src={poster !== null || undefined ? poster : notPoster || fake}
          alt={title}
          className='w-[150px] h-[220px] ss:w-[220px] ss:h-[260px] rounded-t-[14px] ss:mt-6 cursor-pointer'
          loading='lazy'
        />
      </Link>

      <div className='w-[150px] ss:w-full flex flex-row h-[60px] ss:h-[100px] relative bg-black-gradient rounded-b-[14px]'>
        <div className='w-[50px] ss:w-[100px] h-[60px] ss:h-[67px] flex justify-center items-center relative bg-white rounded-bl-[14px]'>
          <Liked
            id={id}
            like={like}
            setLike={setLike}
            media={media || mediaDefault}
            item={item}
          />
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
