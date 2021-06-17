import React, { useState, useEffect } from 'react';
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

export default MovieSmall;
