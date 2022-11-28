import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/styles';

const SearchBar = () => {
  //const navigate = useNavigate();

  //const [query, setQuery] = useState('');

  //const handleSubmit = (e) => {
  //  e.preventDefault();
  //  navigate(`/search/${query}`);
  //  window.location.reload();
  //}
  return (
    <form>
      <div className={`${styles.flexCenter} flex-row`}>
        <input
          type='text'
          className='bg-primary relative w-[250px] ss:w-[300px] md:w-[250px] h-[50px] rounded-[30px] outline-none font-primary font-normal text-[18px] text-black p-5 shadow-5xl focus:border-tertiary placeholder:text-black '
          placeholder='Search'
          //value={query}
          //onChange={(e) => setQuery(e.target.value)}
        />
        <div className='flex justify-end items-center'>
          <button
            className='flex justify-center items-center absolute w-[55px] h-[50px] bg-dimDark rounded-r-[30px] text-[24px] text-white shadow-5xl cursor-pointer'
            //onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export { SearchBar };
