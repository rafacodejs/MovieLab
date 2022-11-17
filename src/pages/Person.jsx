import { useGetPerson } from '../Hooks/useGetPerson';
import { useParams } from 'react-router-dom';

const Person = () => {
  const { id } = useParams();
  const { person, result } = useGetPerson(id);
  return <div>Person</div>;
};

export { Person };
