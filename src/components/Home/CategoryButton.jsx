import { Link } from 'react-router-dom';

const CategoryButton = ({ dataMovie, dataTv }) => {
  return (
    <section className='relative ss:h-[450px] w-[90%] ss:w-[90%] scroll-smooth mb-10'>
      <div className='w-full'>
        <div className='w-[80%] flex flex-row justify-start items-start px-2'>
          <h1 className='text-[24px] sm:text-[34px] font-primary font-bold text-white'>
            Categories☑️
          </h1>
        </div>
        <div className='w-full flex flex-row flex-wrap  justify-center lg:justify-start items-center mt-5'>
          {dataMovie?.map((item) => (
            <button
              key={item.id}
              className='flex flex-row justify-center items-center w-[145px] sm:w-[190px] h-[40px] bg-transparent blur-card border-2 border-secondary mr-3 mt-3 rounded-[20px] animation-link cursor-pointer'
            >
              <Link
                to={`/categories/${item.name}/${item.id}/`}
                className='text-white text-[14px] sm:text-[16px] font-primary font-medium p-4'
              >
                {item.name}
              </Link>
            </button>
          ))}
          {dataTv?.map((item) => (
            <button
              key={item.id}
              className='flex flex-row justify-center items-center w-[145px] sm:w-[190px] h-[40px] bg-transparent blur-card border-2 border-secondary mr-3 mt-3 rounded-[20px] animation-link cursor-pointer'
            >
              <Link
                to={`/categories/${item.name}/${item.id}/`}
                className='text-white text-[14px] sm:text-[16px] font-primary font-medium p-4'
              >
                {item.name}
              </Link>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { CategoryButton };
