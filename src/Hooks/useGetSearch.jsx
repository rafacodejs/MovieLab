import { useEffect } from 'react';
import { API } from '../API';

const useGetSearch = ({ query }) => {
  const [search, setSearchData] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const searchRes = await API(`search/multi`, {
        params: {
          query,
        },
      });
      const searchData = searchRes.data.results;
      setSearchData(searchData);
    };

    fetchSearch();
  }, []);

  return { search };
};

export { useGetSearch };
