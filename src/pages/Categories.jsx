import { useGetCategories } from '../Hooks/useGetCategories';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const { id, name } = useParams();
  const { categoriesMovies, categoriesTv } = useGetCategories(id);

  return <div>Categories</div>;
};

export { Categories };
