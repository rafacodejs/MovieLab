import { useState, useEffect } from 'react';
import { API } from '../API';

const useGetPerson = (id) => {
  const [person, setPerson] = useState([]);
  const [result, setResults] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      const personRes = await API(`/person/${id}`);
      const resultRes = await API(`/person/${id}/combined_credits`);

      const personData = personRes.data;
      const resultData = resultRes.data.cast;
      console.log(personData);

      setPerson(personData);
      setResults(resultData);
    };

    fetchPerson();
  }, []);

  return { person, result };
};

export { useGetPerson };
