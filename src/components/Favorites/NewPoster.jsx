import { useContext, useState, useEffect } from 'react';
import { useGetDetails } from '../../Hooks/useGetDetails';
import { UserContext } from '../../context';
import { API } from '../../API';
import { Link } from 'react-router-dom';
import { Vote, GenreButton, Liked } from '../index';
import styles from '../../styles/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewPoster = ({
  id,
  media,
  item,
  title,
  poster,
  backdrop,
  overview,
  date,
  vote,
  mediaDefault,
}) => {
  const { genres } = useGetDetails({ id, media });
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
    <section className={`${styles.flexCenter}`}>
      <div className='fav-grid bg-black-gradient-2 w-[95%] h-auto sd:h-[420px] mt-10 rounded-xl shadow-5xl'>
        <div className='hidden sm:block'>
          <Link
            to={
              media !== undefined
                ? `/details/${media}/${id}`
                : `/details/${mediaDefault}/${id}`
            }
          >
            <LazyLoadImage
              src={poster}
              alt={title}
              className='w-[240px] object-cover rounded-lg shadow-5xl '
              loading='lazy'
            />
          </Link>
        </div>
        <div className='w-full max-h-[350px] sm:hidden'>
          <Link
            to={
              media !== undefined
                ? `/details/${media}/${id}`
                : `/details/${mediaDefault}/${id}`
            }
          >
            <LazyLoadImage
              src={backdrop}
              alt={title}
              className='max-h-[500px] object-contain object-center rounded-t-lg'
              loading='lazy'
            />
          </Link>
        </div>
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.flexStartX} flex-col p-3 w-[96%]`}>
            <h1 className={'font-primary font-bold text-[24px] sm:text-[32px]'}>
              {title}
            </h1>
            <p className={`${styles.bannerParagraph}`}>{overview}</p>
            <h5 className='font-primary font-medium text-[18px] sm:text-[20px] mt-1'>
              {date}
            </h5>
            <div className={`${styles.flexStart} flex-row mt-1`}>
              <Vote vote={vote} />
              <h5 className='font-primary font-medium text-[14px] sm:text-[22px] text-dimWhite ml-1'>
                {vote}
              </h5>
            </div>
            <div className='flex flex-row flex-wrap'>
              {genres?.map((genre) => (
                <GenreButton key={genre.id} id={genre.id} name={genre.name} />
              ))}
            </div>

            <div className='mt-5'>
              <Liked
                id={id}
                like={like}
                setLike={setLike}
                media={media || mediaDefault}
                item={item}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewPoster };
