import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory } from 'react-router-dom';
import Stars from '../Stars';

const MovieSmall = ({
  title,
  poster,
  setCurrentMovieData,
  movieData,
  stars,
}) => {
  let history = useHistory();

  const handleClick = (data) => {
    setCurrentMovieData(data);
    history.push('/movie');
  };
  return (
    <div className="small-movie">
      <Stars number={stars} className="small-movie-stars" />
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        className="small-movie-poster"
        onClick={() => handleClick(movieData)}
      />
      {/* <span className="small-movie-title">{title}</span> */}
    </div>
  );
};

MovieSmall.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  stars: PropTypes.number,
  movieData: PropTypes.shape({}),
  setCurrentMovieData: PropTypes.func,
};

export default MovieSmall;
