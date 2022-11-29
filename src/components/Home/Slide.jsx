import { Vote, GenreButton } from '../index';
import styles from '../../styles/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imdb } from '../../assets/index';
import { useGetCategories } from '../../Hooks/useGetCategories';
const Slide = ({
  id,
  title,
  vote,
  date,
  poster,
  overview,
  index,
  media,
  currentSlide,
}) => {
  const { categories } = useGetCategories({ id, media });

  return (
    <div
      className={`h-[220px] ss:h-[400px] slide fade ${
        index === currentSlide ? 'block' : 'hidden'
      }`}
    >
      <div className='absolute w-full h-[350px] ss:h-[600px] bg-black opacity-40 ' />

      {index === currentSlide && (
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.sliderInfo}`}>
            <h1 className={`${styles.sliderHeading}`}>{title}</h1>

            <div>
              <Vote vote={vote} />
            </div>

            <div
              className={`${styles.flexStart} flex-row mt-2 ss:mt-3 md:mt-4`}
            >
              <img
                src={imdb}
                alt='imdb_icon'
                className='w-[20px] ss:w-[40px]'
              />
              <h4 className='font-primary font-medium text-white text-[15px] ss:text-[20px] ml-3'>
                {vote}
              </h4>
              <h4 className='font-primary font-medium text-white text-[15px] ss:text-[20px] ml-3'>
                {date}
              </h4>
            </div>

            <div className='hidden ss:flex w-full flex-row flex-wrap justify-start items-start mt-1 md:mt-3'>
              {categories.map((item) => (
                <GenreButton name={item.name} key={item.id} id={item.id} />
              ))}
            </div>

            <p className={`${styles.sliderParagraph}`}>{overview}</p>
          </div>

          <LazyLoadImage
            className='w-full h-[480px] object-center object-cover no-repeat slide-img '
            src={poster}
            alt={title}
          />
        </div>
      )}
    </div>
  );
};

export { Slide };
