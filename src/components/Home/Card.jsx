import { Vote, CardButton } from '../index';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = ({ id, title, poster, date, vote, media, mediaDefault }) => {
  const newDate = new String(date);
  var result = newDate.split('-')[0];

  return (
    <div className='w-[350px] h-[200px] ss:w-[380px] ss:h-[230px] flex flex-row justify-start items-start whitespace-normal bg-[#272f46] rounded-[12px] shadow-6xl mr-2 ml-3'>
      <div className='m-w-[160px] w-[135px] ss:w-[160px] max-h-[250px] ss:h-[200px] p-2'>
        <LazyLoadImage
          src={poster}
          alt={title}
          className='rounded-[8px] object-center object-cover repeat bg-no-repeat'
          loading='lazy'
        />
      </div>
      <div className='w-[50%] p-4 flex flex-col justify-start items-start'>
        <h1 className='w-[150px] ss:w-[200px] font-primary font-bold text-[18px] ss:text-[19px] text-white'>
          {title}
        </h1>
        <h4 className='font-primary text-dimWhite text-[14px] ss:text-[16px] mt-1'>
          {result}
        </h4>

        <div className='flex flex-row w-[30%] mt-1'>
          <Vote vote={vote} />
          <h4 className='ml-3 font-primary text-dimWhite text-[13px] ss:text-[16px] mt-0  ss:mt-1'>
            {vote}
          </h4>
        </div>

        <CardButton id={id} media={media} mediaDefault={mediaDefault} />
      </div>
    </div>
  );
};

export { Card };
