import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/styles';

const GenreButton = ({ id, name }) => {
  return (
    <button
      key={id}
      className={`${styles.bannerButton} truncate`}
    >
      <Link to={`/categories/${name}/${id}/`}>{name}</Link>
    </button>
  );
};

export { GenreButton };
