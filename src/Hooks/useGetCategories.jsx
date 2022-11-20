import { useEffect, useState } from 'react';
import { API } from '../API';

const useGetCategories = ({ id, media }) => {
  const [categoriesMovies, setCategoriesMovies] = useState([]);
  const [categoriesTv, setCategoriesTv] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryResMovie = await API(`/discover/movie?with_genres=${id}`);
      const categoryResTv = await API(`/discover/tv?with_genres=${id}`);

      const categoryRes = await API(`${media}/${id}`);
      const categoryDataMovie = categoryResMovie.data.results;
      const categoryDataTv = categoryResTv.data.results;
      const categoryData = categoryRes.data.genres;

      setCategoriesMovies(categoryDataMovie);
      setCategoriesTv(categoryDataTv);
      setCategories(categoryData);
    };

    fetchCategories();
  }, []);

  return {
    categories,
    categoriesMovies,
    categoriesTv,
  };
};

export { useGetCategories };
