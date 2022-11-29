import { useGetPerson } from '../Hooks/useGetPerson';
import { useParams } from 'react-router-dom';
import styles from '../styles/styles';
import { notBanner } from '../assets/index';
import { Carousel } from '../components';

const Person = () => {
  const { id } = useParams();
  const { person, result } = useGetPerson(id);

  return (
    <section className='flex justify-center items-center relative '>
      <section className='w-full'>
        <div className='w-full h-screen'>
          <div className='invisible sm:visible absolute w-full h-screen ss:h-screen bg-black opacity-60 z-10' />
          <img
            src={notBanner}
            alt={person.name}
            className={
              'w-full h-[375px] sm:h-screen object-top object-cover blur-sm sm:blur-none'
            }
          />
        </div>

        <div className={`${styles.bannerText} parent`}>
          <div className='w-full flex justify-center items-center sm:block md:ml-10'>
            <img
              src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
              alt={''}
              className='w-[200px] sm:w-[85%] rounded-[14px] object-cover object-center'
            />
          </div>

          <div className='flex flex-col justify-center items-start mt-10 sm:mt-0 ss:items-start px-8 ss:px-0 sm:px-8'>
            <h1 className={`${styles.bannerHeading}`}>{person.name}</h1>

            <div className='w-full flex flex-row justify-between items-center'>
              <p className={`${styles.bannerParagraph}`}>
                {person.place_of_birth}
              </p>
              <p className={`${styles.bannerParagraph}`}>{person.birthday}</p>
            </div>
            <p className='ss:w-full font-primary font-normal text-[14px] ss:text-[16px] text-white text-justify mt-4 line-clamp-12 hover:line-clamp-none'>
              {person.biography}
            </p>

            <div className='flex flex-row justify-start items-start'>
              <h3 className='font-primary font-normal text-[16px] text-dimWhite text-justify mt-2 mr-2'>
                {''}
              </h3>

              <h3 className='font-primary font-normal text-[16px] text-dimWhite text-justify mt-2 mr-2 '>
                {''}
              </h3>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center relative top-10 ml-1 mb-2'>
          <Carousel data={result} title='Know For' mediaDefault='movie' />
        </div>
      </section>
    </section>
  );
};

export { Person };
