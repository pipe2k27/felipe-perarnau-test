import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory } from 'react-router-dom';
import starSetter from '../../Utils/starSetter';
import Stars from '../../components/Stars';

const Movie = ({ data }) => {
  let history = useHistory();

  useEffect(() => {
    if (!data) {
      history.push('/');
    }
  }, [data, history]);

  // navigates back to home page
  const back = (data) => {
    history.push('/');
  };
  return (
    <div className="movie">
      <i onClick={back} className="fas fa-arrow-left red movie-back"></i>
      {data && (
        <div>
          <div className="movie-grid center">
            <img
              src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
              alt={data.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="underline">{data.title}</h2>
              <div className="flex">
                <p className="small margin-r">Rating:</p>
                <Stars number={starSetter(data.vote_average)} />
                {data.release_date && (
                  <p className="small grey margin-l">
                    Release date: {data.release_date}
                  </p>
                )}
              </div>

              {data.overview && <p className="grey margin0">{data.overview}</p>}
            </div>
          </div>

          <div className="movie-snapshots center">
            <h3>
              <i className="fas fa-fire-alt margin-r red"></i>
              Movie Snapshots
            </h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              alt={data.title}
              className="movie-backdrop"
            />
          </div>
        </div>
      )}
    </div>
  );
};

Movie.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    backdrop_path: PropTypes.string,
  }),
};

export default Movie;
