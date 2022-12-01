import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/styles';

const SearchBar = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    window.location.reload();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`${styles.flexCenter} flex-row mt-2 sm:mt-0 ss:ml-16 sm:ml-0 sm:mr-20`}
      >
        <button
          className='w-[55px] h-[45px] mr-2 ss:mr-3 bg-primary rounded-full text-[24px] shadow-5xl '
          onClick={handleSubmit}
        >
          <FaSearch className='relative top-[1px] left-[12px] cursor-pointer' />
        </button>
        <div className='w-full'>
          <input
            type='text'
            className='relative w-[250px] ss:w-[300px] md:w-[500px] h-[50px] rounded-[30px] outline-none font-primary font-normal text-[18px] text-black p-5 shadow-5xl focus:border-tertiary '
            placeholder='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export { SearchBar };
