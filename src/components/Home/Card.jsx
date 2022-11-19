import { Vote, CardButton } from '../index';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '../../styles/styles';

const Card = ({ id, title, poster, date, vote, media, mediaDefault }) => {
  return (
    <div
      className={`${styles.flexStartX} flex-col w-[340px] h-[200px] ss:w-[380px] ss:h-[220px] whitespace-normal bg-dimDark rounded-[12px] shadow-5xl sm:mr-2 ml-3 hover:bg-blackHover `}
    >
      <div className='w-[340px] h-[200px] sm:w-[380px] sm:h-[220px] p-2'>
        <LazyLoadImage
          src={poster}
          alt={title}
          className='rounded-[8px] object-center repeat bg-no-repeat'
          loading='lazy'
        />
        <div
          className={`parent items-center relative w-full h-[80px] blur-card bottom-[80px] rounded-b-[8px]`}
        >
          <CardButton id={id} media={media} mediaDefault={mediaDefault} />
          <div className='flex flex-col ml-5 border-r-1 border-white'>
            <h3 className='text-[20px] font-primary font-semibold line-clamp-1'>
              {title}
            </h3>
            <div className='flex flex-row'>
              <div className={`${styles.flexCenter}`}>
                <Vote vote={vote} />
              </div>
              <h5 className='text-[16px] font-primary font-normal mt-1 ml-2'>
                {vote}
              </h5>
            </div>
          </div>
          <div className=''>
            <h4 className='text-[16px] font-primary font-normal mt-1'>
              {date}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
