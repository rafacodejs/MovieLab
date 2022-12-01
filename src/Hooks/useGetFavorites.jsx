import { useState, useEffect, useContext } from 'react';
import { API } from '../API';
import { UserContext } from '../context';

const useGetFavorites = (url) => {
  const [dataMovies, setDataMovies] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const axiosData = async (url) => {
      const { data } = await API.get(url, {
        params: {
          session_id: user.session_id,
        },
      });

      setDataMovies(data.results);
    };

    axiosData(url);
  });
  return { dataMovies };
};

export { useGetFavorites };
