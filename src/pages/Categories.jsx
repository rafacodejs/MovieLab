import { useGetCategories } from '../Hooks/useGetCategories';
import { Loading, PosterCarousel } from '../components';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/styles';
import { notPoster } from '../assets';
import { RiArrowLeftSLine } from 'react-icons/ri';

const Categories = () => {
  const media = 'movie';
  const { name, id } = useParams();
  const { categoriesMovies, categoriesTv, loading } = useGetCategories({
    id,
    media,
  });
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center p-4'>
        <div
          className='visible sm:invisible flex justify-start items-start text-white text-[38px] cursor-pointer'
          onClick={back}
        >
          <RiArrowLeftSLine />
        </div>
        <h1
          className={`${styles.flexCenter} font-primary font-bold text-white text-[32px]`}
        >
          {name}
        </h1>
        <div>{''}</div>
      </div>

      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <div className='flex fle-row flex-wrap justify-center items-center gap-1 p-0 ss:gap-4 ss:p-2 mb-5'>
            {categoriesMovies.map((item) => (
              <PosterCarousel
                key={item.id}
                id={item.id}
                mediaDefault={'movie'}
                media={item.media_type}
                poster={
                  item.poster_path !== null && item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : notPoster
                }
                title={item.name || item.title}
                vote={item.vote_average.toFixed(1)}
                item={item}
              />
            ))}
            {categoriesTv.map((item) => (
              <PosterCarousel
                key={item.id}
                id={item.id}
                mediaDefault={'tv'}
                media={item.media_type}
                poster={
                  item.poster_path !== null && item.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : notPoster
                }
                title={item.name || item.title}
                vote={item.vote_average.toFixed(1)}
                item={item}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { Categories };
