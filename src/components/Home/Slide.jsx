import { Vote } from '../index';
import styles from '../../styles/styles';
import { Link } from 'react-router-dom';
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
  const categories = useGetCategories({ id, media });
  const test = categories;

  return (
    <div
      className={`h-[200px] ss:h-auto slide fade ${
        index === currentSlide ? 'block' : 'hidden'
      }`}
    >
      <div className='invisible sm:visible absolute w-full h-[350px] ss:h-[600px] bg-black opacity-40 ' />

      {index === currentSlide && (
        <div className={`${styles.flexCenter} z-30`}>
          <div className={`${styles.sliderInfo}`}>
            <h1 className={`${styles.sliderHeading}`}>{title}</h1>
            <Vote vote={vote} />

            <div className={`${styles.flexStart} flex-row mt-5`}>
              <img src={imdb} alt='imdb_icon' className='w-[50px]' />
              <h4 className='font-primary font-medium text-white text-[24px] ml-3'>
                {vote}
              </h4>
              <h4 className='font-primary font-medium text-white text-[24px] ml-3'>
                {date}
              </h4>
            </div>

            <div className='flex flex-row flex-wrap justify-start items-start mt-3 ss:mt-1'>
              {test.map((item) => (
                <button key={item.id} className={`${styles.bannerButton}`}>
                  <Link to={`/categories/${item.name}/${item.id}/`}>
                    {item.name}
                  </Link>
                </button>
              ))}
            </div>

            <p className={`${styles.sliderParagraph}`}>{overview}</p>
          </div>

          <LazyLoadImage
            className='w-full h-auto object-center object-cover no-repeat slide-img '
            src={poster}
            alt={title}
          />
        </div>
      )}
    </div>
  );
};

export { Slide };
