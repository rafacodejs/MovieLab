import { useState, useContext, useEffect } from 'react';
import { API } from '../API';
import { UserContext } from '../context/index';
import { useGetCategories } from '../Hooks/useGetCategories';
import { Liked } from '../components';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/styles';
import { notPoster } from '../assets';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { TiStarFullOutline } from 'react-icons/ti';

const Categories = () => {
  const media = 'tv';
  const { id, name } = useParams();
  const { categoriesMovies, categoriesTv } = useGetCategories({ id, media });
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [like, setLike] = useState(false);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const movieLiked = async () => {
      const { data } = await API.get(
        `/${media}/${id}/account_states?session_id=${user.session_id}`
      );
      setLike(data.favorite);
    };

    if (user.success) {
      movieLiked();
    }
  }, []);

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center p-4'>
        <div
          className='visible sm:invisible flex justify-start items-start text-white text-[38px] cursor-pointer'
          onClick={back}
        >
          <RiArrowLeftSLine />
        </div>
        <h1 className='flex justify-center items-center font-primary font-bold text-white text-[32px]'>
          {name}
        </h1>
        <div>{''}</div>
      </div>
      <div className='flex fle-row flex-wrap justify-center items-center gap-1 p-0 ss:gap-4 ss:p-2 mb-5'>
        {categoriesMovies?.map((item) => (
          <section
            className='flex flex-col justify-center items-center w-[160px] h-[300px] ss:w-[200px] ss:h-[350px] animation-img ss:ml-3 mt-0 ss:mt-3'
            key={item.id}
          >
            <Link to={`/details/movie/${item.id}`}>
              <img
                key={item.id}
                src={
                  item.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${
                        item.poster_path || item.profile_path
                      }`
                    : notPoster
                }
                alt={item.name || item.title}
                className='w-[150px] h-[220px] ss:w-[220px] ss:h-[280px] rounded-t-[14px] ss:mt-6 cursor-pointer'
              />
            </Link>
            <div className='w-[150px] ss:w-full flex flex-row h-[60px] ss:h-[100px] relative bg-blackHover rounded-b-[14px]'>
              <div className='w-[50px] ss:w-[100px] h-[60px] ss:h-[67px] flex justify-center items-center relative bg-white rounded-bl-[14px]'>
                <Liked
                  id={item.id}
                  like={like}
                  setLike={setLike}
                  media={item.media_type}
                  item={item}
                />
              </div>

              <div className='w-[90px] ss:w-[100px] mt-2 ml-2 mr-3'>
                <h1 className='text-[16px] text-white font-primary font-normal truncate'>
                  {item.name || item.title}
                </h1>
                <div className={`${styles.flexStart} flex-row`}>
                  <div className='text-yellow-400 text-[20px] mr-1'>
                    <TiStarFullOutline />
                  </div>
                  <h5 className='font-primary font-normal text-dimWhite'>
                    {item.vote_average}
                  </h5>
                </div>
              </div>
            </div>
          </section>
        ))}
        {categoriesTv?.map((item) => (
          <section
            className='flex flex-col justify-center items-center w-[160px] h-[300px] ss:w-[200px] ss:h-[350px] animation-img ss:ml-3 mt-0 ss:mt-3'
            key={item.id}
          >
            <Link to={`/details/movie/${item.id}`}>
              <img
                key={item.id}
                src={
                  item.poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500${
                        item.poster_path || item.profile_path
                      }`
                    : notPoster
                }
                alt={item.name || item.title}
                className='w-[150px] h-[220px] ss:w-[220px] ss:h-[280px] rounded-t-[14px] ss:mt-6 cursor-pointer'
              />
            </Link>
            <div className='w-[150px] ss:w-full flex flex-row h-[60px] ss:h-[100px] relative bg-blackHover rounded-b-[14px]'>
              <div className='w-[50px] ss:w-[100px] h-[60px] ss:h-[67px] flex justify-center items-center relative bg-white rounded-bl-[14px]'>
                <Liked
                  id={item.id}
                  like={like}
                  setLike={setLike}
                  media={item.media_type}
                  item={item}
                />
              </div>

              <div className='w-[90px] ss:w-[100px] mt-2 ml-2 mr-3'>
                <h1 className='text-[16px] text-white font-primary font-normal truncate'>
                  {item.name || item.title}
                </h1>
                <div className={`${styles.flexStart} flex-row`}>
                  <div className='text-yellow-400 text-[20px] mr-1'>
                    <TiStarFullOutline />
                  </div>
                  <h5 className='font-primary font-normal text-dimWhite'>
                    {item.vote_average}
                  </h5>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export { Categories };
