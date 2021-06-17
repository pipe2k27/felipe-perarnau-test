import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MovieSmall from '../../components/MovieSmall';
import SearchBar from '../../components/SearchBar';
import Image from '../../components/Image';
import starSetter from '../../Utils/starSetter';
import StarsFilter from '../../components/StarsFilter';
import getPopularMovies from './AsyncMethods/getPopularMovies';
import './styles.css';

const Discover = ({ setCurrentMovieData }) => {
  const [displayMovies, setDisplayMovies] = useState(null);
  const [SearchResults, setSearchResults] = useState(null);
  const [PopularMovies, setPopularMovies] = useState(null);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [starsFilterNumber, setStarsFilterNumber] = useState(0);

  useEffect(() => {
    setLoadingMovies(true);
    if (SearchResults !== null) {
      setDisplayMovies(SearchResults);
      setLoadingMovies(false);
      setStarsFilterNumber(0);
    } else {
      const movieGetter = async () => {
        // On a larger project would hav used redux sagas or thunks for async calls
        const getMovies = await getPopularMovies(currentPage);
        setPopularMovies(getMovies);
        setDisplayMovies(getMovies);
        setLoadingMovies(false);
      };
      movieGetter();
    }
  }, [SearchResults, currentPage]);

  // filters movies acording to stars
  const starFilterSetter = (number) => {
    if (number > 0) {
      setStarsFilterNumber(number);
      const oldMovies = SearchResults ? SearchResults : PopularMovies;
      const newArray = oldMovies.results.filter((movie) => {
        const movieStars = starSetter(movie.vote_average);
        return movieStars === number;
      });
      setDisplayMovies({ ...oldMovies, results: newArray });
    } else {
      setStarsFilterNumber(number);
      setSearchResults(null);
      setDisplayMovies(PopularMovies);
    }
  };

  return (
    <div className="discover">
      <div className="discover-introduction blue-bg">
        <Image name={'backdrop-main.jpeg'} className="discover-backdrop" />
        <div className="discover-intro-box">
          <h1 className="underline">New Movies For You.</h1>
          <p>
            Find movies that will make you happy. The latest and greatest, in
            one place.
          </p>
          <SearchBar setSearchResults={setSearchResults} />
        </div>
      </div>
      <div className="discover-movies center">
        <div className="flex-space-between">
          <p>
            <i className="fas fa-fire-alt margin-r red"></i>
            {!SearchResults ? 'Popular Movies!' : 'Search Results'}
          </p>
          <StarsFilter number={starsFilterNumber} setter={starFilterSetter} />
        </div>
        {!loadingMovies && displayMovies && (
          <div className="discover-grid center">
            {displayMovies.results.map((movie) => {
              if (movie.poster_path && movie.backdrop_path) {
                return (
                  <MovieSmall
                    title={movie.title}
                    poster={movie.poster_path}
                    setCurrentMovieData={setCurrentMovieData}
                    movieData={movie}
                    stars={starSetter(movie.vote_average)}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
        {loadingMovies && <p className="discover-loading">Loading Movies...</p>}
      </div>
      {!SearchResults && (
        <div className="discover-page-button-div center">
          {currentPage > 1 && (
            <div
              className="discover-page-button"
              onClick={() => {
                setCurrentPage((prev) => prev - 1);
                window.scrollTo(0, 500);
                setStarsFilterNumber(0);
              }}
            >
              Previous Page
            </div>
          )}
          {currentPage > 1 && <div className="red">{currentPage}</div>}
          <div
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              window.scrollTo(0, 500);
              setStarsFilterNumber(0);
            }}
            className="discover-page-button"
          >
            Next Page
          </div>
        </div>
      )}
    </div>
  );
};

Discover.propTypes = {
  setCurrentMovieData: PropTypes.func,
};

export default Discover;
