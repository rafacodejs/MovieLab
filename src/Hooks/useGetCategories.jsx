import { useEffect } from 'react';
import { API } from '../API';

const useGetCategories = ({ id }) => {
  const [categoriesMovies, setCategoriesMovies] = useState([]);
  const [categoriesTv, setCategoriesTv] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryResMovie = await API(`/discover/movie?with_genres=${id}`);
      const categoryResTv = await API(`/discover/tv?with_genres=${id}`);
      const categoryDataMovie = categoryResMovie.data.results;
      const categoryDataTv = categoryResTv.data.results;

      setCategoriesMovies(categoryDataMovie);
      setCategoriesTv(categoryDataTv);
    };

    fetchCategories();
  }, []);

  return { categoriesMovies, categoriesTv };
};

export { useGetCategories };
