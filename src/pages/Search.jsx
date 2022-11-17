import { useGetSearch } from '../Hooks/useGetSearch';
import { useParams } from 'react-router-dom';
const Search = () => {
  const { query } = useParams();
  const { search } = useGetSearch(query);
  return <div>Search</div>;
};

export { Search };
