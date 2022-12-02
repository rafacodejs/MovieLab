import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context';
import { API } from '../../API';
import { Vote, Platform, GenreButton, Liked } from '../index';
import styles from '../../styles/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = ({
  id,
  media,
  item,
  backdrop,
  title,
  poster,
  overview,
  date,
  vote,
  genres,
  home,
  mediaDefault,
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
    <section className={`flex-col mb-14`}>
      <div
        className={`${styles.flexStarX} absolute h-[450px] sd:h-auto blur-sm sd:blur-none `}
      >
        <LazyLoadImage
          src={backdrop}
          alt={title}
          className='max-h-[600px] h-[450px] sd:h-[600px] w-[1500px] object-cover'
        />
      </div>

      <div className='hidden sd:block absolute w-full h-[350px] ss:h-[600px] bg-black opacity-40 ' />

      <div className={`${styles.flexCenter} mt-0 md:mt-14`}>
        <div className={`relative w-[90%] banner-grid top-10 md:top-0 z-10`}>
          <div
            className={`${styles.flexCenter} w-[250px] md:w-[300px] sm:ml-10 md:ml-0`}
          >
            <LazyLoadImage
              src={poster}
              alt={title}
              className='object-contain rounded-xl shadow-5xl'
            />
          </div>

          <div
            className={`${styles.flexStartX} flex-col p-3 mt-4 sd:ml-6 md:ml-0`}
          >
            <h1 className={`${styles.bannerHeading}`}>{title}</h1>
            <p className={`${styles.bannerParagraph}`}>{overview}</p>
            <h5 className='font-primary font-medium text-[20px] mt-2'>
              {date}
            </h5>
            <div className={`${styles.flexStart} flex-row mt-2`}>
              <Vote vote={vote} />
              <h5 className='font-primary font-medium text-[14px] sm:text-[22px] text-dimWhite ml-2'>
                {vote}
              </h5>
            </div>
            <div className='flex flex-row flex-wrap'>
              {genres?.map((genre) => (
                <GenreButton key={genre.id} id={genre.id} name={genre.name} />
              ))}
            </div>
            <div className={`${styles.flexCenter} flex-row`}>
              <Platform home={home} />

              <div
                className={`${
                  media === 'person' ? 'hidden' : 'block'
                } mt-2 ml-2`}
              >
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
      </div>
    </section>
  );
};

export { Banner };
