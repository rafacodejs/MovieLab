//import { useNavigate } from 'react-router-dom';
import { RiSearchLine } from 'react-icons/ri';
import styles from '../../styles/styles';

const SearchBar = () => {
  //const navigate = useNavigate();

  // const [query, setQuery] = useState('');

  /*const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    window.location.reload();
  };*/
  return (
    <form className={`border-b-2 border-primary`}>
      <div className={`${styles.flexCenter} flex-row mb-1`}>
        <button
          className='text-[24px] text-white'
          // onClick={handleSubmit}
        >
          <RiSearchLine className='cursor-pointer' />
        </button>
        <div className='w-full'>
          <input
            type='text'
            className='relative left-4 bg-transparent outline-none font-primary font-normal text-[18px] shadow-5xl '
            placeholder='Search for movies'
            //value={query}
            //onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export { SearchBar };
