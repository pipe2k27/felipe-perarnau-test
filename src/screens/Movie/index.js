import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { useHistory } from 'react-router-dom';
import starSetter from '../../Utils/starSetter';
import Stars from '../../components/Stars';

const Movie = ({ data }) => {
  const [currentMovie, setCurrentMovie] = useState(null);
  let history = useHistory();

  useEffect(() => {
    // this will check wheteher there is
    // a movie stored in session so that
    // it can load it on page refresh
    if (!data && sessionStorage.movieData) {
      try {
        const storageMovies = JSON.parse(sessionStorage.movieData);
        setCurrentMovie(storageMovies);
      } catch (error) {
        console.log(error);
        history.push('/');
      }
    } else if (data) {
      setCurrentMovie(data);
      var movieJson = JSON.stringify(data);
      sessionStorage.setItem('movieData', movieJson);
    } else {
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
      {currentMovie && (
        <div>
          <div className="movie-grid center">
            <img
              src={`https://image.tmdb.org/t/p/w400${currentMovie.poster_path}`}
              alt={currentMovie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2 className="underline">{currentMovie.title}</h2>
              <div className="flex">
                <p className="small margin-r">Rating:</p>
                <Stars number={starSetter(currentMovie.vote_average)} />
                {currentMovie.release_date && (
                  <p className="small grey margin-l">
                    Release date: {currentMovie.release_date}
                  </p>
                )}
              </div>

              {currentMovie.overview && (
                <p className="grey margin0">{currentMovie.overview}</p>
              )}
            </div>
          </div>

          <div className="movie-snapshots center">
            <h3>
              <i className="fas fa-fire-alt margin-r red"></i>
              Movie Snapshots
            </h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`}
              alt={currentMovie.title}
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
