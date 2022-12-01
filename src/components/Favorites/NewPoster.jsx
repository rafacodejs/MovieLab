import styles from '../../styles/styles';

const NewPoster = ({ id, media, poster, title, vote, overview }) => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className='banner-grid bg-dimBlack w-[95%] h-[350px] mt-10 rounded-xl shadow-5xl'>
        <div>
          <img
            src={poster}
            alt={title}
            className='w-[200px] object-cover rounded-lg'
          />
        </div>
        <div className={`${styles.flexStartX} flex-col`}>
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
      </div>
    </section>
  );
};

export { NewPoster };
