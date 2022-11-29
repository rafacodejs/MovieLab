import { useGetPerson } from '../Hooks/useGetPerson';
import { useParams } from 'react-router-dom';
import styles from '../styles/styles';
import { actorBanner, notPoster } from '../assets/index';
import { Carousel, Banner } from '../components';

const Person = () => {
  const { id } = useParams();
  const { person, result } = useGetPerson(id);
  console.log(person);

  return (
    <section>
      <div className={`${styles.flexCenter} flex-col overflow-hidden relative`}>
        <Banner
          backdrop={actorBanner}
          poster={
            person.poster_path !== null && person.profile_path !== null
              ? `https://image.tmdb.org/t/p/original${person.profile_path}`
              : notPoster
          }
          title={person?.name}
          overview={person?.biography}
          date={person?.birthday}
        />
      </div>
      <div className={`${styles.flexCenter} mt-10`}>
        <Carousel data={result} title='Know For 👇' mediaDefault='movie' />
      </div>
    </section>
  );
};

export { Person };
