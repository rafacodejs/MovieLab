import { useParams } from 'react-router-dom';
import { useGetDetails } from '../Hooks/useGetDetails';

const Details = () => {
  const { id, media } = useParams();
  const { data, genres, cast, recommended } = useGetDetails({ id, media });
  return <div>Details</div>;
};

export { Details };
