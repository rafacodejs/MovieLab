import { useEffect, useState } from 'react';
import { API } from '../API';

const useGetDetails = ({ id, media }) => {
  const [data, setData] = useState([]);
  const [genres, setTest] = useState([]);
  const [cast, setCast] = useState([]);
  const [recommended, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      const detailsRes = await API(`${media}/${id}`);
      const castRes = await API(`/${media}/${id}/credits`);
      const recommendedRes = await API(`/${media}/${id}/recommendations`);
      const detailsData = detailsRes.data;
      const genres = detailsRes.data.genres;
      const castData = castRes.data.cast;
      const recommendedData = recommendedRes.data.results;

      setData(detailsData);
      setTest(genres);
      setCast(castData);
      setSimilar(recommendedData);
    };
    fetchDetails();
    setLoading(false);
  }, []);

  return { data, genres, cast, recommended, loading };
};

export { useGetDetails };
