import { useParams } from 'react-router-dom';
import { useGetDetails } from '../Hooks/useGetDetails';
import styles from '../styles/styles';
import { CarouselCard, Cast, Banner } from '../components/index';

import { notBanner, notPoster } from '../assets';

const Details = () => {
  const { id, media } = useParams();
  const { data, genres, cast, recommended } = useGetDetails({ id, media });

  return (
    <section
      className={`${styles.flexCenter} flex-col overflow-hidden relative`}
    >
      <Banner
        backdrop={
          data.poster_path !== null && data.profile_path !== null
            ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}`
            : notBanner
        }
        poster={
          data.poster_path !== null && data.profile_path !== null
            ? `https://image.tmdb.org/t/p/w500${
                data?.poster_path || data?.profile_path
              }`
            : notPoster
        }
        title={data?.title || data?.name}
        overview={data?.overview}
        date={data?.release_date || data?.first_air_date}
        vote={data?.vote_average}
        genres={genres}
        home={data?.homepage}
      />

      <Cast title='Cast 🎭' data={cast} />

      <CarouselCard title='More like this🔥' data={recommended} />
    </section>
  );
};

export { Details };
